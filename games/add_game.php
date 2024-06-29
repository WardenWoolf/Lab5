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
$name = $_POST['name'];
$genre = $_POST['genre'];

// Подготовка SQL запроса для добавления записи
$sql = "INSERT INTO Games (name, genre) VALUES ('$name', '$genre')";

// Выполнение SQL запроса и проверка на ошибки
if ($conn->query($sql) === TRUE) {
    echo "Record added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>
