<?php
require_once 'connect.php';

$station_id = $_POST['station_id'];
$equipment_id = $_POST['equipment_id'];
$class = $_POST['class'];
$status = $_POST['status'];

$sql = "INSERT INTO ComputerStations (station_id, equipment_id, class, status) VALUES ('$station_id', '$equipment_id', '$class', '$status')";

if (mysqli_query($connect, $sql)) {
    echo "Запись успешно добавлена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($connect);
}

mysqli_close($connect);
?>
