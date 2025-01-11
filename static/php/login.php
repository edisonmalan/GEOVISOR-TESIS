<?php
echo "Conexión exitosa al servidor";
exit; 
require_once 'db_connection.php'; // Archivo para conectar con la base de datos

// Leer datos enviados desde el cliente
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) && isset($data->password)) {
    $email = $data->email;
    $password = $data->password;

    try {
        // Consulta SQL para validar el usuario
        $query = "SELECT * FROM datosgeovisor.usuario_administrador WHERE correo = :correo";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':correo', $email);
        $stmt->execute();
        $user = $stmt->fetch();

        if ($user && $user['contraseña'] === $password) {
            // Login exitoso
            echo json_encode(["status" => "success", "message" => "Login exitoso"]);
        } else {
            // Credenciales incorrectas
            echo json_encode(["status" => "error", "message" => "Credenciales incorrectas"]);
        }
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Error del servidor"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
}
?>
