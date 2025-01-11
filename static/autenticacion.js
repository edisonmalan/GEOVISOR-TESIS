document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación de campos vacíos
    if (!email || !password) {
        document.getElementById('errorMessage').textContent = 'Por favor ingrese el correo y la contraseña';
        return;
    }

    try {
        const response = await fetch('php/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        // Verificar si la respuesta es correcta
        if (!response.ok) {
            throw new Error('No se pudo conectar con el servidor');
        }

        const data = await response.json();

        if (data.status === 'success') {
            alert('Inicio de sesión exitoso');
            window.location.href = 'admin-dashboard.html'; // Redirige al dashboard
        } else {
            document.getElementById('errorMessage').textContent = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('errorMessage').textContent = 'Error al conectar con el servidor';
    }
});
