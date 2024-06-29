<?php
require_once 'connect.php';

$station_id = $_POST['station_id'];

$sql = "DELETE FROM ComputerStations WHERE station_id='$station_id'";

if (mysqli_query($connect, $sql)) {
    echo "Запись успешно удалена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($connect);
}

mysqli_close($connect);
?>
