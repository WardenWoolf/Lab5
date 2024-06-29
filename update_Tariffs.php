<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$tariff_id = $_POST['tariff_id'];
$name = $_POST['name'];
$type = $_POST['type'];
$duration = $_POST['duration'];
$price = $_POST['price'];

$sql = "UPDATE Tariffs SET name='$name', type='$type', duration='$duration', price='$price' WHERE tariff_id='$tariff_id'";

if (mysqli_query($conn, $sql)) {
    echo "Запись успешно обновлена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
