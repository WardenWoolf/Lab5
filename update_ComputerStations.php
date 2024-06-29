<?php
require_once 'connect.php';

$station_id = $_POST['station_id'];
$equipment_id = $_POST['equipment_id'];
$class = $_POST['class'];
$status = $_POST['status'];

$sql = "UPDATE ComputerStations SET equipment_id='$equipment_id', class='$class', status='$status' WHERE station_id='$station_id'";

if (mysqli_query($connect, $sql)) {
    echo "Запись успешно изменена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($connect);
}

mysqli_close($connect);
?>
