//CARGA DE DATOS CLIMATICOS///


// Cargar los módulos necesarios
const path = require('path');
const { Pool } = require('pg');
const csvParser = require('csv-parser');
const XLSX = require('xlsx');
const fs = require('fs');

// Configurar conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres', // Reemplaza con tu usuario de PostgreSQL
  host: 'localhost',
  database: 'GeovisorDB', // Reemplaza con el nombre de tu base de datos
  password: 'admin123', // Reemplaza con tu contraseña de PostgreSQL
  port: 5432,
});

// Función para convertir fechas MM/DD/YY a YYYY-MM-DD
function parseDate(inputDate) {
  const [month, day, year] = inputDate.split('/');
  const fullYear = parseInt(year) > 50 ? `19${year}` : `20${year}`;
  return `${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

// Función para convertir horas a formato HH:MM:SS
function parseTime(inputTime) {
  const [hours, minutes, seconds] = inputTime.split(':');
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds ? seconds.padStart(2, '0') : '00'}`;
}

// Función para redondear valores a dos decimales
function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

// Función para insertar datos en la base de datos
async function insertData(data, regionId, tableName) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    if (!regionId || isNaN(regionId)) {
      throw new Error('ID de región inválido.');
    }

    for (const row of data) {
      const fecha = parseDate(row.fecha);
      const hora = parseTime(row.hora);
      const fechaRegistro = new Date();

      const query = `
        INSERT INTO datosgeovisor.${tableName} (
          fecha, hora, status, temperatura_ambiente_promedio, temperatura_ambiente_maximo,
          temperatura_ambiente_minimo, humedad_relativa_promedio, humedad_relativa_maximo,
          humedad_relativa_minimo, presion_atmosferica_promedio, presion_atmosferica_maximo,
          presion_atmosferica_minimo, radiacion_difusa_promedio, radiacion_difusa_maximo,
          radiacion_difusa_minimo, suma_acumulativa_radiacion_difusa, radiacion_global_promedio,
          radiacion_global_maximo, radiacion_global_minimo, suma_acumulativa_radiacion_global,

          temperatura_suelo_nivel1_promedio, temperatura_suelo_nivel1_maximo,
          temperatura_suelo_nivel1_minimo, temperatura_suelo_nivel2_promedio, temperatura_suelo_nivel2_maximo,
          temperatura_suelo_nivel2_minimo, temperatura_suelo_nivel3_promedio, temperatura_suelo_nivel3_maximo,
          temperatura_suelo_nivel3_minimo, temperatura_suelo_nivel4_promedio, temperatura_suelo_nivel4_maximo,
          temperatura_suelo_nivel4_minimo, temperatura_suelo_nivel5_promedio, temperatura_suelo_nivel5_maximo,
          temperatura_suelo_nivel5_minimo, temperatura_suelo_nivel6_promedio, temperatura_suelo_nivel6_maximo,
          temperatura_suelo_nivel6_minimo, temperatura_suelo_nivel7_promedio, temperatura_suelo_nivel7_maximo,
          temperatura_suelo_nivel7_minimo,

          precipitacion, voltaje_bateria, velocidad_viento_minimo, longitud_viento_recorrido,
          direccion_viento_promedio, direccion_viento_maximo, direccion_rafaga_viento, 
          magnitud_rafaga_viento, rafaga_promedio_viento, velocidad_viento_promedio, velocidad_viento_maximo,
          viento_stermica_promedio, viento_stermica_maximo, viento_stermica_minimo, fecha_registro, id_region
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
          $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
          $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57
        )`;

      const values = [
        fecha, hora, row.status, 
        roundToTwo(row.temperatura_ambiente_promedio),
        roundToTwo(row.temperatura_ambiente_maximo), 
        roundToTwo(row.temperatura_ambiente_minimo),
        roundToTwo(row.humedad_relativa_promedio), 
        roundToTwo(row.humedad_relativa_maximo),
        roundToTwo(row.humedad_relativa_minimo), 
        roundToTwo(row.presion_atmosferica_promedio),
        roundToTwo(row.presion_atmosferica_maximo), 
        roundToTwo(row.presion_atmosferica_minimo),
        roundToTwo(row.radiacion_difusa_promedio), 
        roundToTwo(row.radiacion_difusa_maximo),
        roundToTwo(row.radiacion_difusa_minimo), 
        roundToTwo(row.suma_acumulativa_radiacion_difusa),
        roundToTwo(row.radiacion_global_promedio), 
        roundToTwo(row.radiacion_global_maximo),
        roundToTwo(row.radiacion_global_minimo), 
        roundToTwo(row.suma_acumulativa_radiacion_global),
        roundToTwo(row.temperatura_suelo_nivel1_promedio), 
        roundToTwo(row.temperatura_suelo_nivel1_maximo),
        roundToTwo(row.temperatura_suelo_nivel1_minimo), 
        roundToTwo(row.temperatura_suelo_nivel2_promedio),
        roundToTwo(row.temperatura_suelo_nivel2_maximo), 
        roundToTwo(row.temperatura_suelo_nivel2_minimo),
        roundToTwo(row.temperatura_suelo_nivel3_promedio), 
        roundToTwo(row.temperatura_suelo_nivel3_maximo),
        roundToTwo(row.temperatura_suelo_nivel3_minimo), 
        roundToTwo(row.temperatura_suelo_nivel4_promedio),
        roundToTwo(row.temperatura_suelo_nivel4_maximo), 
        roundToTwo(row.temperatura_suelo_nivel4_minimo),
        roundToTwo(row.temperatura_suelo_nivel5_promedio), 
        roundToTwo(row.temperatura_suelo_nivel5_maximo),
        roundToTwo(row.temperatura_suelo_nivel5_minimo), 
        roundToTwo(row.temperatura_suelo_nivel6_promedio),
        roundToTwo(row.temperatura_suelo_nivel6_maximo), 
        roundToTwo(row.temperatura_suelo_nivel6_minimo),
        roundToTwo(row.temperatura_suelo_nivel7_promedio), 
        roundToTwo(row.temperatura_suelo_nivel7_maximo),
        roundToTwo(row.temperatura_suelo_nivel7_minimo),
        roundToTwo(row.precipitacion), 
        roundToTwo(row.voltaje_bateria), 
        roundToTwo(row.velocidad_viento_minimo),
        roundToTwo(row.longitud_viento_recorrido), 
        roundToTwo(row.direccion_viento_promedio),
        roundToTwo(row.direccion_viento_maximo), 
        roundToTwo(row.direccion_rafaga_viento), 
        roundToTwo(row.magnitud_rafaga_viento), 
        roundToTwo(row.rafaga_promedio_viento), 
        roundToTwo(row.velocidad_viento_promedio), 
        roundToTwo(row.velocidad_viento_maximo),
        roundToTwo(row.viento_stermica_promedio), 
        roundToTwo(row.viento_stermica_maximo), 
        roundToTwo(row.viento_stermica_minimo), 
        fechaRegistro, 
        regionId
      ];

      await client.query(query, values);
    }

    await client.query('COMMIT');
    console.log(`Datos insertados correctamente en la tabla: ${tableName}`);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error al insertar datos:', error.message);
    throw error;
  } finally {
    client.release();
  }
}

// Función para procesar archivos CSV y XLSX
async function processFile(filePath, fileExtension) {
  let data = [];

  if (fileExtension === '.csv') {
    const rows = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => rows.push(row))
        .on('end', () => resolve(rows))
        .on('error', (err) => reject(err));
    });
  } else if (fileExtension === '.xlsx') {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  } else {
    throw new Error('Formato de archivo no soportado.');
  }

  return data;
}

// Exportar funciones para usarlas en otros archivos
module.exports = {
  pool,
  insertData,
  processFile,
};