// Manejo del formulario de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Evita que se recargue la página

    const email = document.getElementById("email").value;  // Obtén el correo del formulario
    const password = document.getElementById("password").value;  // Obtén la contraseña del formulario

    // Realiza una solicitud POST al backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Asegura que los datos se envíen como JSON
        },
        body: JSON.stringify({
            email: email,  // Envía el correo
            password: password  // Envía la contraseña
        })
    })
    .then(response => response.json())  // Espera una respuesta JSON
    .then(data => {
        if (data.success) {
            // Si el login es exitoso, redirige al dashboard
            window.location.href = data.redirectUrl;  // Usamos la URL proporcionada por el servidor
        } else {
            // Si hay un error (como credenciales incorrectas), muestra el mensaje
            document.getElementById("errorMessage").innerText = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
