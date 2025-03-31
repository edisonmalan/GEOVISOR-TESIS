from flask import Flask, jsonify, request
from flask_cors import CORS  # Importa flask-cors
from cnn_prediccion_automatico import hacer_prediccion

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

@app.route('/prediccion', methods=['GET'])
def prediccion():
    # Obtener el id de la región desde la URL
    region_id = request.args.get('region_id', default=1, type=int)
    
    # Llamar a la función de predicción
    resultado = hacer_prediccion(region_id)
    
    # Retornar el resultado en formato JSON
    return jsonify({'region_id': region_id, 'prediccion': resultado})

if __name__ == '__main__':
    app.run(debug=True)
