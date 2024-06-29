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

// Подготовка SQL запроса для удаления записи
$sql = "DELETE FROM Games WHERE game_id='$game_id'";

// Выполнение SQL запроса и проверка на ошибки
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>
