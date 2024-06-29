<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

// Подключение к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$equipment_id = $_POST['equipment_id'];
$type = $_POST['type'];
$characteristics = $_POST['characteristics'];

$sql = "INSERT INTO Equipment (equipment_id, type, characteristics) VALUES ('$equipment_id', '$type', '$characteristics')";

if (mysqli_query($conn, $sql)) {
    echo "Запись успешно добавлена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
