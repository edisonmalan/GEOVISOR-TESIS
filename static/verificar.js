document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos de correo y contraseña
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si las credenciales son correctas
    if (email === 'benito@geovisor.com' && password === 'geovisor') {
        // Redirigir a la página deseada
        window.location.href = 'admin-dashboard.html'; // Cambia 'pagina_deseada.html' por el archivo al que quieras redirigir
    } else {
        // Mostrar mensaje de error
        document.getElementById('errorMessage').textContent = 'Credenciales incorrectas';
    }
});
