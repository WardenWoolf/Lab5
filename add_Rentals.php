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
$user_id = $_POST['user_id'];
$station_id = $_POST['station_id'];
$game_id = $_POST['game_id'];
$start_time = $_POST['start_time'];
$end_time = $_POST['end_time'];
$tariff_id = $_POST['tariff_id'];
$cost = $_POST['cost'];

$sql = "INSERT INTO Rentals (rental_id, user_id, station_id, game_id, start_time, end_time, tariff_id, cost) 
        VALUES ('$rental_id', '$user_id', '$station_id', '$game_id', '$start_time', '$end_time', '$tariff_id', '$cost')";

if (mysqli_query($conn, $sql)) {
    echo "Запись успешно добавлена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
