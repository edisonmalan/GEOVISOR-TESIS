// Cargar los módulos necesarios
const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const multer = require('multer');
const csvParser = require('csv-parser');
const XLSX = require('xlsx');
const fs = require('fs');

// Crear una instancia de express
const app = express();

// Configurar el puerto para el servidor
const PORT = 3000;

// Crear una conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres', // Reemplaza con tu usuario de PostgreSQL
  host: 'localhost',
  database: 'GeovisorDB', // Reemplaza con el nombre de tu base de datos
  password: 'admin123', // Reemplaza con tu contraseña de PostgreSQL
  port: 5432,
});

// Middleware para parsear datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar multer para manejar archivos subidos
const upload = multer({ dest: 'uploads/' });

// Servir archivos estáticos desde la carpeta 'static'
app.use(express.static(path.join(__dirname, 'static')));

// Ruta de login que se manejará con POST
app.post('/login', async (req, res) => {
  const { email, password } = req.body;  // Obtén los datos del formulario

  try {
    // Consulta SQL para verificar si el usuario existe con el correo y la contraseña
    const result = await pool.query(
      'SELECT * FROM datosgeovisor.usuario_administrador WHERE correo = $1 AND contraseña = $2',
      [email, password]
    );

    if (result.rows.length > 0) {
      // Si el login es exitoso, responde con un mensaje de éxito y la ruta al dashboard
      res.json({ success: true, message: 'Login exitoso', redirectUrl: '/admin-dashboard.html' });
    } else {
      // Si las credenciales son incorrectas, responde con un mensaje de error
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (err) {
    console.error('Error de base de datos:', err);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

// Función para convertir fechas de dd/mm/yyyy a yyyy-mm-dd
function parseDate(inputDate) {
  const [day, month, year] = inputDate.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

// Función para convertir horas de hh:mm AM/PM a formato 24 horas
function parseTime(inputTime) {
  const [time, modifier] = inputTime.split(' ');
  let [hours, minutes] = time.split(':');
  if (modifier === 'PM' && hours !== '12') hours = parseInt(hours, 10) + 12;
  if (modifier === 'AM' && hours === '12') hours = '00';
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
}

// Función para insertar datos en la base de datos
async function insertData(data, regionId, tableName) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    if (!regionId || isNaN(regionId)) {
      throw new Error("ID de región inválido.");
    }

    for (const row of data) {
      const fechaRegistro = new Date();

      if (tableName === 'datosclima') {
        const fecha = parseDate(row.fecha);
        const hora = parseTime(row.hora);
        console.log(`Procesando datos para datosclima: Fecha: ${fecha}, Hora: ${hora}, Región: ${regionId}`);
        await client.query(
          `INSERT INTO datosgeovisor.datosclima (
            fecha, hora, status, temperatura_ambiente_promedio, temperatura_ambiente_maximo,
            temperatura_ambiente_minimo, humedad_relativa_promedio, humedad_relativa_maximo,
            humedad_relativa_minimo, presion_atmosferica_promedio, presion_atmosferica_maximo,
            presion_atmosferica_minimo, radiacion_difusa_promedio, radiacion_difusa_maximo,
            radiacion_difusa_minimo, suma_acumulativa_radiacion_difusa, radiacion_global_promedio,
            radiacion_global_maximo, radiacion_global_minimo, suma_acumulativa_radiacion_global,
            precipitacion, voltaje_bateria, velocidad_viento_minimo, longitud_viento_recorrido,
            direccion_viento_promedio, direccion_viento_maximo, direccion_rafaga_viento, 
            magnitud_rafaga_viento, fecha_registro, id_region
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
            $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30
          )`,
          [
            fecha, hora, row.status, row.temperatura_ambiente_promedio,
            row.temperatura_ambiente_maximo, row.temperatura_ambiente_minimo,
            row.humedad_relativa_promedio, row.humedad_relativa_maximo,
            row.humedad_relativa_minimo, row.presion_atmosferica_promedio,
            row.presion_atmosferica_maximo, row.presion_atmosferica_minimo,
            row.radiacion_difusa_promedio, row.radiacion_difusa_maximo,
            row.radiacion_difusa_minimo, row.suma_acumulativa_radiacion_difusa,
            row.radiacion_global_promedio, row.radiacion_global_maximo,
            row.radiacion_global_minimo, row.suma_acumulativa_radiacion_global,
            row.precipitacion, row.voltaje_bateria, row.velocidad_viento_minimo,
            row.longitud_viento_recorrido, row.direccion_viento_promedio,
            row.direccion_viento_maximo, row.direccion_rafaga_viento,
            row.magnitud_rafaga_viento, fechaRegistro, regionId
          ]
        );
      }
    }
    await client.query('COMMIT');
    console.log(`Datos insertados correctamente para la tabla: ${tableName}`);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error al insertar datos:', error.message);
    throw error;
  } finally {
    client.release();
  }
}

// Ruta para cargar y procesar archivos
app.post('/upload', upload.single('file'), async (req, res) => {
  const regionId = req.body.regionId;
  const tableName = req.body.tableName;
  const filePath = req.file.path;
  const fileExtension = path.extname(req.file.originalname).toLowerCase();

  console.log(`Archivo recibido: ${req.file.originalname}, Región: ${regionId}, Tabla: ${tableName}`);

  try {
    let data = [];
    if (fileExtension === '.csv') {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => data.push(row))
        .on('end', async () => {
          console.log(`Datos procesados desde CSV:`, data);
          fs.unlinkSync(filePath);
          await insertData(data, regionId, tableName);
          res.json({ success: true, message: 'Datos insertados correctamente.' });
        });
    } else if (fileExtension === '.xlsx') {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      console.log(`Datos procesados desde XLSX:`, data);
      fs.unlinkSync(filePath);
      await insertData(data, regionId, tableName);
      res.json({ success: true, message: 'Datos insertados correctamente.' });
    } else {
      fs.unlinkSync(filePath);
      res.status(400).json({ success: false, message: 'Formato de archivo no soportado.' });
    }
  } catch (error) {
    fs.unlinkSync(filePath);
    res.status(500).json({ success: false, message: 'Error al procesar los datos.', error: error.message });
  }
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
