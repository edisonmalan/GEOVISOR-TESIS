import pandas as pd
import psycopg2
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense
from tensorflow.keras.callbacks import EarlyStopping

def hacer_prediccion(region_id):
    # Configuración de conexión a la base de datos
    conn = psycopg2.connect(
        dbname="GeovisorDB",
        user="postgres",
        password="admin123",
        host="localhost",
        port="5432"
    )

    # Consulta para extraer los datos necesarios
    query = """
    SELECT id_region, temperatura_suelo_nivel1_maximo, temperatura_ambiente_maximo
    FROM datosgeovisor.datosclima
    WHERE id_region = %s
    ORDER BY id_region
    """
    df = pd.read_sql(query, conn, params=(region_id,))
    conn.close()

    # Función para crear secuencias a partir de un vector de datos
    def create_sequences(data, seq_length):
        X, y = [], []
        for i in range(len(data) - seq_length):
            X.append(data[i:i+seq_length])
            y.append(data[i+seq_length])
        return np.array(X), np.array(y)

    # Parámetro de la ventana (número de registros usados como entrada)
    seq_length = 10

    # Filtrar datos de la región actual
    region_df = df.reset_index(drop=True)
    if len(region_df) <= seq_length:
        return "No hay suficientes datos para entrenar y predecir en esta región."

    # Normalizar los datos (cada región por separado)
    scaler_suelo = MinMaxScaler()
    scaler_ambiente = MinMaxScaler()
    
    region_df['suelo_scaled'] = scaler_suelo.fit_transform(region_df[['temperatura_suelo_nivel1_maximo']])
    region_df['ambiente_scaled'] = scaler_ambiente.fit_transform(region_df[['temperatura_ambiente_maximo']])
    
    # Crear secuencias para entrenamiento
    X, y = create_sequences(region_df['suelo_scaled'].values, seq_length)
    X = X.reshape((X.shape[0], X.shape[1], 1))
    
    # División de datos: usaremos el 80% para entrenamiento y el 20% restante para validación
    split = int(0.8 * len(X))
    X_train, X_val = X[:split], X[split:]
    y_train, y_val = y[:split], y[split:]
    
    # Diseño de la red neuronal convolucional
    model = Sequential([
        Conv1D(filters=32, kernel_size=3, activation='relu', input_shape=(seq_length, 1)),
        MaxPooling1D(pool_size=2),
        Flatten(),
        Dense(64, activation='relu'),
        Dense(1, activation='linear')
    ])
    
    model.compile(optimizer='adam', loss='mse')
    
    # Entrenamiento con EarlyStopping para evitar sobreentrenamiento
    early_stop = EarlyStopping(monitor='val_loss', patience=5)
    model.fit(X_train, y_train, epochs=50, batch_size=16, validation_data=(X_val, y_val), callbacks=[early_stop], verbose=0)
    
    # Para predecir, usaremos los últimos 10 registros de suelo (ya normalizados)
    ultima_secuencia = region_df['suelo_scaled'].values[-seq_length:]
    X_input = np.array(ultima_secuencia).reshape((1, seq_length, 1))
    
    # Realizar la predicción (en la escala normalizada)
    prediccion_norm = model.predict(X_input)[0][0]
    # Convertir la predicción a la escala original
    prediccion = scaler_ambiente.inverse_transform([[prediccion_norm]])[0][0]
    
    return prediccion
