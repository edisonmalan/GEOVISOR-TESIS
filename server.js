// Cargar los módulos necesarios
const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
