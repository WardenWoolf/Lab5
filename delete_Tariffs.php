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

$sql = "DELETE FROM Tariffs WHERE tariff_id='$tariff_id'";

if (mysqli_query($conn, $sql)) {
    echo "Запись успешно удалена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
