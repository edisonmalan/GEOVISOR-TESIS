<?php
$host = "localhost"; // Cambia si usas otro host
$dbname = "GeovisorDB";
$user = "postgres";
$password = "admin123";

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // Mensaje de conexión exitosa
    echo "Conexión exitosa a la base de datos: $dbname";
} catch (PDOException $e) {
    // Mostrar el error en caso de fallo
    die("Error de conexión: " . $e->getMessage());
}
?>
