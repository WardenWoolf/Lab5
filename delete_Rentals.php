<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$rental_id = $_POST['rental_id'];

$sql = "DELETE FROM Rentals WHERE rental_id='$rental_id'";

if (mysqli_query($conn, $sql)) {
    echo "Запись успешно удалена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
