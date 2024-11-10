<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$base_datos = "izanv";

// Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $base_datos);


if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtiene el nombre del proyecto desde la solicitud
$projectName = $_GET['nombre'] ?? '';
// Prepara y ejecuta la consulta solo si el nombre del proyecto no está vacío
if ($projectName !== '') {
    $sql = "SELECT Descripcion FROM proyectos WHERE Nombre = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("s", $projectName);
    $stmt->execute();
    $stmt->bind_result($descripcion);
    $stmt->fetch();

    // Verificar si se encontró una descripción
    if ($descripcion) {
        echo json_encode(["descripcion" => $descripcion]);
    } else {
        echo json_encode(["error" => "Descripción no encontrada"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "Nombre de proyecto no válido"]);
}

$conexion->close();
?>