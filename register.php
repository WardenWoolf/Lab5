<?php
ob_start(); // Начать буферизацию вывода

session_start();

// Подключение к базе данных
$db = mysqli_connect('localhost', 'root', '', 'ComputerClub');
if ($db === false) {
    die("Ошибка соединения: " . mysqli_connect_error());
}

// Получение данных из формы
$username = mysqli_real_escape_string($db, $_POST['username']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$password = mysqli_real_escape_string($db, $_POST['password']);
$confirm_password = mysqli_real_escape_string($db, $_POST['confirm_password']);

// Проверка совпадения паролей
if ($password !== $confirm_password) {
    echo "Пароли не совпадают";
    exit;
}

// Проверка длины пароля
if (strlen($password) < 8) {
    echo "Пароль должен быть не менее 8 символов";
    exit;
}

// Проверка сложности пароля
if (!preg_match("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/", $password)) {
    echo "Пароль должен содержать цифры, латинские буквы в разных регистрах и специальные символы";
    exit;
}

// Проверка уникальности логина
$checkUsernameQuery = "SELECT * FROM Users WHERE `username` = '$username'";
$result = mysqli_query($db, $checkUsernameQuery);

if (mysqli_num_rows($result) > 0) {
    echo "Логин уже занят";
    exit;
}

// Проверка уникальности email
$checkMailQuery = "SELECT * FROM Users WHERE `email` = '$email'";
$result = mysqli_query($db, $checkMailQuery);

if (mysqli_num_rows($result) > 0) {
    echo "Аккаунт с такой почтой уже существует!";
    exit;
}

// Вставка нового пользователя в базу данных (без хеширования пароля)
$sqlInsert = "INSERT INTO Users (`username`, `email`, `password`, `registration_date`) VALUES ('$username', '$email', '$password', NOW())";

if (mysqli_query($db, $sqlInsert)) {
    // Регистрация прошла успешно, перенаправление на profile.php
    $_SESSION['username'] = $username; // Сохраняем логин в сессии для отображения на профиле
    header('Location: http://localhost/GameZone/profile.php');
    exit;
} else {
    echo "Ошибка: " . mysqli_error($db);
}

mysqli_close($db);
ob_end_flush(); 
?>
