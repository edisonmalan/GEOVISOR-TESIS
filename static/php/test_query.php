<?php
$host = "localhost"; // Cambia si usas otro host
$dbname = "GeovisorDB"; // Cambia por el nombre de tu base de datos
$user = "postgres"; // Usuario de PostgreSQL
$password = "admin123"; // Contraseña de PostgreSQL

try {
    // Conexión a la base de datos
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    echo "Conexión exitosa a la base de datos.<br>";

    // Consulta SQL para verificar los datos
    $query = "SELECT * FROM datosgeovisor.usuario_administrador"; // Ajusta el nombre de la tabla si es necesario
    $stmt = $pdo->query($query);

    // Mostrar los resultados
    $usuarios = $stmt->fetchAll();
    if ($usuarios) {
        echo "Usuarios encontrados:<br>";
        foreach ($usuarios as $usuario) {
            echo "ID: " . $usuario['idusuarioadministrador'] . "<br>";
            echo "Nombre: " . $usuario['nombre'] . "<br>";
            echo "Correo: " . $usuario['correo'] . "<br>";
            echo "Contraseña: " . $usuario['contraseña'] . "<br><br>";
        }
    } else {
        echo "No se encontraron usuarios en la tabla.";
    }
} catch (PDOException $e) {
    // Mostrar error si ocurre algo
    echo "Error al ejecutar la consulta: " . $e->getMessage();
}
?>
