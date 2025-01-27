//CARGA DE ICA Y BLOQUES///


// Cargar los módulos necesarios
const path = require('path');
const { Pool } = require('pg');
const XLSX = require('xlsx');
const fs = require('fs');
const { calculateICA } = require('./icaCalculator'); // Importar la lógica del cálculo del ICA

// Configurar la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'GeovisorDB',
  password: 'admin123',
  port: 5432,
});

// Función para convertir fechas DD/MM/YYYY a YYYY-MM-DD
function parseDateDMY(inputDate) {
  try {
    if (!inputDate || typeof inputDate !== 'string') {
      console.warn(`Fecha inválida o no definida: ${inputDate}`);
      return null;
    }
    const [day, month, year] = inputDate.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  } catch (error) {
    console.error("Error al procesar la fecha:", error.message, "Fecha recibida:", inputDate);
    return null;
  }
}

// Función para normalizar valores
function normalizeValue(value) {
  if (
    value === "S/N" ||
    value === "N/A" ||
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null;
  }
  return !isNaN(parseFloat(value)) && isFinite(value)
    ? Math.round(parseFloat(value) * 100) / 100
    : value;
}

// Función para insertar datos en la tabla
async function insertData(data, regionId) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (const row of data) {
      const fechaMuestreo = parseDateDMY(row['Fecha de muestreo']);
      const fechaRegistro = new Date();

      const normalizedRow = Object.keys(row).reduce((acc, key) => {
        acc[key] = normalizeValue(row[key]);
        return acc;
      }, {});

      await client.query(
        `INSERT INTO datosgeovisor.ica (
          "Codigo Muestra", "comunidad", "Fecha de muestreo", "Codigo Etiqueta",
          "Junta Administradora", "Nombre de la Junta/Humedal", "Coordenada X",
          "Coordenada Y", "Altura", "pH", "%OD ()", "OD (mg/L)", "Conductividad (µS/cm)",
          "TDS (mg/L)", "Temp ºC", "Cambio de Temp ºC", "Caudal (L/s)",
          "Coliformes fecales (NMP/100 mL)", "DQO (mg/L)", "DBO5 (mg O2/L)", "Nitritos (mg/L)",
          "Nitratos (mg/L)", "Fosfatos (mg/L)", "Turbidez (NTU)", "Pb (µg/L) 0,005",
          "Pb (mg/L) 0,005", "Cd (µg/L)", "Cd (mg/L) 0,002", "Al (mg/L) -0,1",
          "Mn (mg/L) -0,01", "Ni (mg/L) -0,05", "Zn (mg/L) -0,05", "As (µg/L)",
          "As (mg/L) 0,005", "id_region", "fecha_registro"
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
          $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36
        )`,
        [
          normalizedRow['Codigo Muestra'], normalizedRow['comunidad'], fechaMuestreo, normalizedRow['Codigo Etiqueta'],
          normalizedRow['Junta Administradora'], normalizedRow['Nombre de la Junta/Humedal'], normalizedRow['Coordenada X'],
          normalizedRow['Coordenada Y'], normalizedRow['Altura'], normalizedRow['pH'], normalizedRow['%OD ()'], normalizedRow['OD (mg/L)'],
          normalizedRow['Conductividad (µS/cm)'], normalizedRow['TDS (mg/L)'], normalizedRow['Temp ºC'],
          normalizedRow['Cambio de Temp ºC'], normalizedRow['Caudal (L/s)'], normalizedRow['Coliformes fecales (NMP/100 mL)'],
          normalizedRow['DQO (mg/L)'], normalizedRow['DBO5 (mg O2/L)'], normalizedRow['Nitritos (mg/L)'],
          normalizedRow['Nitratos (mg/L)'], normalizedRow['Fosfatos (mg/L)'], normalizedRow['Turbidez (NTU)'], normalizedRow['Pb (µg/L) 0,005'],
          normalizedRow['Pb (mg/L) 0,005'], normalizedRow['Cd (µg/L)'], normalizedRow['Cd (mg/L) 0,002'], normalizedRow['Al (mg/L) -0,1'],
          normalizedRow['Mn (mg/L) -0,01'], normalizedRow['Ni (mg/L) -0,05'], normalizedRow['Zn (mg/L) -0,05'], normalizedRow['As (µg/L)'],
          normalizedRow['As (mg/L) 0,005'], regionId, fechaRegistro
        ]
      );
    }
    await client.query('COMMIT');
    console.log("Datos insertados correctamente.");
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}


// Función para calcular y guardar el ICA
async function calculateAndSaveICA(regionId) {
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM datosgeovisor.ica WHERE id_region = $1`, [regionId]);
    for (const row of result.rows) {
      const values = {
        "Oxígeno disuelto": row["%OD ()"],
        "Coliformes fecales": row["Coliformes fecales (NMP/100 mL)"],
        "pH": row.pH,
        "DBO5": row["DBO5 (mg O2/L)"],
        "Cambio de temperatura": row["Cambio de Temp ºC"],
        "Fosfato": row["Fosfatos (mg/L)"],
        "Nitratos": row["Nitratos (mg/L)"],
        "Turbidez": row["Turbidez (NTU)"],
        "TDS": row["TDS (mg/L)"],
      };
      const icaValue = calculateICA(values);
      await client.query(`UPDATE datosgeovisor.ica SET valor_ica = $1 WHERE id_ica = $2`, [icaValue, row.id_ica]);
    }
  } catch (error) {
    console.error("Error al calcular el ICA:", error.message);
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


// Exportar funciones
module.exports = {
  pool,
  insertData,
  calculateAndSaveICA,
  processFile,
  parseDateDMY, // Incluimos parseDateDMY
};
