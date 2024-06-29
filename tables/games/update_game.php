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

// Получение данных из POST запроса
$game_id = $_POST['game_id'];
$name = $_POST['name'];
$genre = $_POST['genre'];

// Подготовка SQL запроса для изменения записи
$sql = "UPDATE Games SET name='$name', genre='$genre' WHERE game_id='$game_id'";

// Выполнение SQL запроса и проверка на ошибки
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>
