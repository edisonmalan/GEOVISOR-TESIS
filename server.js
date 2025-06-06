// CODIGO DEL SERVIDOR CENTRAL - server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { insertData: insertData1, calculateAndSaveICA, pool } = require('./codigo1'); // Funciones de codigo1
const { insertData: insertData2, processFile: processFile2 } = require('./codigo2'); // Funciones de codigo2
const XLSX = require('xlsx'); // Asegúrate de cargar este módulo

// Crear una instancia de Express
const app = express();
const upload = multer({ dest: 'uploads/' });

// Configuración del puerto
const PORT = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Servir archivos estáticos desde una carpeta pública
app.use(express.static(path.join(__dirname, 'static')));

// Ruta raíz para servir la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Ruta para procesar la subida de archivos con codigo1
app.post('/upload-codigo1', upload.single('file'), async (req, res) => {
  try {
    console.log('=== LOG: Carga de archivo para codigo1 iniciada ===');
    console.log('Body recibido:', req.body);
    console.log('Archivo recibido:', req.file);

    const regionId = req.body.regionId;

    if (!regionId) {
      console.warn('ID de región no proporcionado.');
      return res.status(400).json({ message: 'ID de región no proporcionado.' });
    }

    const filePath = req.file.path;
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    console.log(`Archivo subido en la ruta: ${filePath}, con extensión: ${fileExtension}`);

    if (fileExtension !== '.xlsx') {
      throw new Error('Formato de archivo no soportado. Por favor, sube un archivo .xlsx');
    }

    // Procesar archivo directamente usando XLSX como en el código original
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const rawData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

    const headers = rawData[0].map(header => header.trim());
    const data = rawData.slice(1).map(row => {
      const normalizedRow = {};
      headers.forEach((header, index) => {
        normalizedRow[header] = row[index];
      });
      return normalizedRow;
    });

    // Insertar datos y calcular el ICA
    await insertData1(data, regionId);
    await calculateAndSaveICA(regionId);

    // Eliminar el archivo temporal
    fs.unlinkSync(filePath);
    console.log(`Archivo temporal eliminado: ${filePath}`);

    res.json({ success: true, message: 'Datos insertados y valor ICA calculado correctamente.' });
  } catch (error) {
    console.error('Error al procesar el archivo con codigo1:', error.message);
    res.status(500).json({ success: false, message: 'Error al procesar el archivo con codigo1.', error: error.message });
  }
});

// Ruta para procesar la subida de archivos con codigo2
app.post('/upload-codigo2', upload.single('file'), async (req, res) => {
  try {
    console.log('=== LOG: Carga de archivo para codigo2 iniciada ===');
    console.log('Body recibido:', req.body);
    console.log('Archivo recibido:', req.file);

    const regionId = req.body.regionId;
    const tableName = req.body.tableName;

    if (!regionId || !tableName) {
      console.warn('ID de región o nombre de tabla no proporcionados.');
      return res.status(400).json({ message: 'ID de región o nombre de tabla no proporcionados.' });
    }

    const filePath = req.file.path;
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    console.log(`Archivo subido en la ruta: ${filePath}, con extensión: ${fileExtension}`);

    // Procesar el archivo y manejar datos con codigo2
    const data = await processFile2(filePath, fileExtension);
    await insertData2(data, regionId, tableName);

    // Eliminar el archivo temporal
    fs.unlinkSync(filePath);
    console.log(`Archivo temporal eliminado: ${filePath}`);

    res.json({ success: true, message: 'Datos insertados correctamente .' });
  } catch (error) {
    console.error('Error al procesar el archivo con codigo2:', error.message);
    res.status(500).json({ success: false, message: 'Error al procesar el archivo con codigo2.', error: error.message });
  }
});

// Ruta para manejo de login con codigo1
app.post('/login', async (req, res) => {
  try {
    console.log('=== LOG: Intento de inicio de sesión ===');
    console.log('Body recibido:', req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      console.warn('Correo o contraseña no proporcionados.');
      return res.status(400).json({ message: 'Correo o contraseña no proporcionados.' });
    }

    const result = await pool.query(
      'SELECT * FROM datosgeovisor.usuario_administrador WHERE correo = $1 AND contraseña = $2',
      [email, password]
    );

    if (result.rows.length > 0) {
      console.log('Inicio de sesión exitoso para el usuario:', email);
      res.json({ success: true, message: 'Login exitoso', redirectUrl: '/admin-dashboard.html' });
    } else {
      console.warn('Credenciales incorrectas para el usuario:', email);
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en el login:', error.message);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});



// Nueva ruta para obtener los datos de la tabla ICA
app.get('/get-ica-data', async (req, res) => {
  const regionId = req.query.regionId; // Obtener el ID de provincia de la consulta

  if (!regionId) {
    return res.status(400).json({ message: 'ID de provincia no proporcionado' });
  }

  try {
    // Realizar la consulta a la base de datos para obtener los datos de ICA
    const result = await pool.query(`
      SELECT "Codigo Muestra","Coordenada X","Coordenada Y","%OD ()", "Coliformes fecales (NMP/100 mL)", "pH", "DBO5 (mg O2/L)", "Cambio de Temp ºC", "Fosfatos (mg/L)", "Nitratos (mg/L)", "Turbidez (NTU)", "TDS (mg/L)","valor_ica"
      FROM datosgeovisor.ica
      WHERE id_region = $1
    `, [regionId]);

    // Si se encuentran resultados, devolverlos como respuesta en formato JSON
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.json([]); // Si no se encuentran datos, devolver un array vacío
    }
  } catch (error) {
    console.error("Error al obtener los datos de ICA:", error);
    res.status(500).json({ message: "Error al obtener los datos de ICA" });
  }
});

// ----------------------------------------
// API para obtener todos los datos de la tabla ICA
// ----------------------------------------
app.get('/api/datos/ica', async (req, res) => {
  try {
    // Consulta para obtener todos los registros de la tabla ICA
    const result = await pool.query(`SELECT * FROM datosgeovisor.ica`);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener datos de ICA:', error);
    res.status(500).json({ message: 'Error al obtener datos de ICA' });
  }
});

// Eliminar un registro de DatosClima por ID
app.delete('/api/datos/ica/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query(`DELETE FROM datosgeovisor.ica WHERE id_ica = $1`, [id]);
    res.json({ message: `Registro ica con ID ${id} eliminado correctamente.` });
  } catch (error) {
    console.error("Error al eliminar registro ica:", error);
    res.status(500).json({ message: "Error al eliminar registro ica." });
  }
});



// ----------------------------------------
// API para obtener todos los datos de la tabla DatosClima
// ----------------------------------------
app.get('/api/datos/clima', async (req, res) => {
  try {
    // Consulta para obtener todos los registros de la tabla DatosClima
    const result = await pool.query(`SELECT * FROM datosgeovisor.datosclima`);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener datos de Clima:', error);
    res.status(500).json({ message: 'Error al obtener datos de Clima' });
  }
});
// Eliminar un registro de DatosClima por ID
app.delete('/api/datos/clima/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query(`DELETE FROM datosgeovisor.datosclima WHERE id_datosclima = $1`, [id]);
    res.json({ message: `Registro Clima con ID ${id} eliminado correctamente.` });
  } catch (error) {
    console.error("Error al eliminar registro Clima:", error);
    res.status(500).json({ message: "Error al eliminar registro Clima." });
  }
});


// ----- Eliminación por Rango de Fechas -----

// Eliminar registros de ICA por rango de fecha de registro
app.delete('/api/datos/ica', async (req, res) => {
  const { inicio, fin } = req.query;
  if (!inicio || !fin) {
    return res.status(400).json({ message: 'Debe proporcionar fechas de inicio y fin.' });
  }
  try {
    await pool.query(
      `DELETE FROM datosgeovisor.ica WHERE fecha_registro BETWEEN $1 AND $2`,
      [inicio, fin]
    );
    res.json({ message: `Registros ICA eliminados entre ${inicio} y ${fin}.` });
  } catch (error) {
    console.error("Error al eliminar registros ICA por rango de fecha:", error);
    res.status(500).json({ message: "Error al eliminar registros ICA por rango de fecha." });
  }
});

// Eliminar registros de DatosClima por rango de fecha de registro
app.delete('/api/datos/clima', async (req, res) => {
  const { inicio, fin } = req.query;
  if (!inicio || !fin) {
    return res.status(400).json({ message: 'Debe proporcionar fechas de inicio y fin.' });
  }
  try {
    await pool.query(
      `DELETE FROM datosgeovisor.datosclima WHERE fecha_registro BETWEEN $1 AND $2`,
      [inicio, fin]
    );
    res.json({ message: `Registros de Clima eliminados entre ${inicio} y ${fin}.` });
  } catch (error) {
    console.error("Error al eliminar registros de Clima por rango de fecha:", error);
    res.status(500).json({ message: "Error al eliminar registros de Clima por rango de fecha." });
  }
});

// ----------------------------------------
// -- INICIO: RUTA GRAFICOS (Agregar este bloque) --
// ----------------------------------------
/*
  Ruta genérica para obtener datos de gráficas climáticas según:
  - :variable  → nombre de la variable climática (humedad_relativa, presion_atmosferica, etc.)
  - :periodo   → diario, mensual, anual
  - ?regionId  → query param obligatorio (ID numérico de la región)
  Responde JSON con: { labels: [...], promedio: [...], maximo: [...], minimo: [...] }
*/
app.get('/api/graficos/:variable/:periodo', async (req, res) => {
  try {
    const { variable, periodo } = req.params;
    const regionId = parseInt(req.query.regionId, 10);

    // Validar regionId
    if (!regionId || isNaN(regionId)) {
      return res.status(400).json({ message: 'regionId es obligatorio y debe ser un número válido.' });
    }

    // 3.1) Mapear "variable" a las columnas de la tabla datosclima
    let colProm, colMax, colMin;
    const fechaField = 'fecha';

    switch (variable) {
      case 'humedad_relativa':
        colProm = 'humedad_relativa_promedio';
        colMax  = 'humedad_relativa_maximo';
        colMin  = 'humedad_relativa_minimo';
        break;
      case 'presion_atmosferica':
        colProm = 'presion_atmosferica_promedio';
        colMax  = 'presion_atmosferica_maximo';
        colMin  = 'presion_atmosferica_minimo';
        break;
      case 'radiacion_difusa':
        colProm = 'radiacion_difusa_promedio';
        colMax  = 'radiacion_difusa_maximo';
        colMin  = 'radiacion_difusa_minimo';
        break;
      case 'radiacion_global':
        colProm = 'radiacion_global_promedio';
        colMax  = 'radiacion_global_maximo';
        colMin  = 'radiacion_global_minimo';
        break;
      case 'temperatura_2m':
        colProm = 'temperatura_ambiente_promedio';
        colMax  = 'temperatura_ambiente_maximo';
        colMin  = 'temperatura_ambiente_minimo';
        break;
      case 'temperatura_suelo':
        // Usamos nivel 1 como ejemplo. Si deseas otro nivel, hay que modificar aquí.
        colProm = 'temperatura_suelo_nivel1_promedio';
        colMax  = 'temperatura_suelo_nivel1_maximo';
        colMin  = 'temperatura_suelo_nivel1_minimo';
        break;
      case 'precipitacion':
        colProm = 'precipitacion';
        colMax  = 'precipitacion';
        colMin  = 'precipitacion';
        break;
      case 'velocidad_viento':
        colProm = 'velocidad_viento_promedio';
        colMax  = 'velocidad_viento_maximo';
        colMin  = 'velocidad_viento_minimo';
        break;
      case 'direccion_viento':
        colProm = 'direccion_viento_promedio';
        colMax  = 'direccion_viento_maximo';
        colMin  = 'direccion_rafaga_viento'; // En lugar de mínimo real
        break;
      default:
        return res.status(400).json({ message: 'Variable inválida.' });
    }

    // 3.2) Construir la consulta SQL según “periodo”
    let queryText = '';
    const queryParams = [ regionId ];

    if (periodo === 'diario') {
      // Traer cada fila por fecha
      queryText = `
        SELECT 
          ${fechaField} AS etiqueta, 
          ${colProm}  AS promedio, 
          ${colMax}   AS maximo, 
          ${colMin}   AS minimo
        FROM datosgeovisor.datosclima
        WHERE id_region = $1
        ORDER BY ${fechaField} ASC
      `;
    }
    else if (periodo === 'mensual') {
      // Agrupar por mes
      queryText = `
        SELECT 
          TO_CHAR(date_trunc('month', ${fechaField}), 'YYYY-MM') AS etiqueta,
          ROUND(AVG(${colProm})::numeric, 2) AS promedio,
          ROUND(MAX(${colMax})::numeric, 2)  AS maximo,
          ROUND(MIN(${colMin})::numeric, 2)  AS minimo
        FROM datosgeovisor.datosclima
        WHERE id_region = $1
        GROUP BY date_trunc('month', ${fechaField})
        ORDER BY date_trunc('month', ${fechaField}) ASC
      `;
    }
    else if (periodo === 'anual') {
      // Agrupar por año
      queryText = `
        SELECT 
          TO_CHAR(date_trunc('year', ${fechaField}), 'YYYY') AS etiqueta,
          ROUND(AVG(${colProm})::numeric, 2) AS promedio,
          ROUND(MAX(${colMax})::numeric, 2)  AS maximo,
          ROUND(MIN(${colMin})::numeric, 2)  AS minimo
        FROM datosgeovisor.datosclima
        WHERE id_region = $1
        GROUP BY date_trunc('year', ${fechaField})
        ORDER BY date_trunc('year', ${fechaField}) ASC
      `;
    }
    else {
      return res.status(400).json({ message: 'Periodo inválido. Use diario, mensual o anual.' });
    }

    // 3.3) Ejecutar la consulta y devolver los datos
    const { rows } = await pool.query(queryText, queryParams);

    // Formatear arrays para JSON
    const labels   = rows.map(r => r.etiqueta);
    const promedio = rows.map(r => parseFloat(r.promedio));
    const maximo   = rows.map(r => parseFloat(r.maximo));
    const minimo   = rows.map(r => parseFloat(r.minimo));

    return res.json({ labels, promedio, maximo, minimo });
  } catch (error) {
    console.error('Error en /api/graficos/:variable/:periodo →', error);
    return res.status(500).json({ message: 'Error interno al obtener datos de gráficos.' });
  }
});
// ----------------------------------------
// -- FIN: RUTA GRAFICOS --
// ----------------------------------------



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en http://localhost:${PORT}/`);
});
