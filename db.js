const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Reemplaza con tu usuario de PostgreSQL
  host: 'localhost',  // O la dirección de tu servidor PostgreSQL
  database: 'GeovisorDB', // Reemplaza con el nombre de tu base de datos
  password: 'admin123', // Reemplaza con tu contraseña
  port: 5432, // Puerto por defecto de PostgreSQL
});

pool.on('connect', () => {
  console.log('Conectado a la base de datos PostgreSQL');
});

module.exports = pool;
