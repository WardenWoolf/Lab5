<?php
$servername = "localhost";  // адрес сервера базы данных
$username = "root";         // имя пользователя
$password = "";             // пароль
$dbname = "ComputerClub";       // имя базы данных

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-запрос для получения списка таблиц
$sql = "SHOW TABLES FROM $dbname";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Выводим таблицы в HTML
    echo '<div class="admin-panel__panel__gridview">';
    echo '<ul>';
    while($row = $result->fetch_array()) {
        echo '<li>' . $row[0] . '</li>';
    }
    echo '</ul>';
    echo '</div>';
} else {
    echo "0 results";
}

$conn->close();
?>
