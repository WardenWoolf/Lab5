<?php
session_start();

// Ваш секретный ключ
$secretKey = '6LcPfAIqAAAAAG4KoQxz7Ks6QmErQuIDmqzQNKyA';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    var_dump($_POST);
    // Проверка, что токен reCAPTCHA передан
    if (!$recaptchaResponse) {
        echo 'Ошибка: токен reCAPTCHA не передан.';
        exit;
    }

    // Проверка reCAPTCHA
    $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptchaData = array(
        'secret' => $secretKey,
        'response' => $recaptchaResponse
    );

    $options = array(
        'http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($recaptchaData)
        )
    );

    $context = stream_context_create($options);
    $verify = file_get_contents($recaptchaUrl, false, $context);
    $captchaSuccess = json_decode($verify);

    // Логирование ответа reCAPTCHA для отладки
    error_log(print_r($captchaSuccess, true));

    if ($captchaSuccess->success) {
        // Подключение к базе данных
        $db = mysqli_connect('localhost', 'root', '', 'ComputerClub');
        if ($db == false) {
            echo 'Ошибка соединения!';
            exit;
        }

        // Проверка имени пользователя и пароля в базе данных
        $query = "SELECT * FROM Users WHERE username = '$username' AND password = '$password'";
        $result = mysqli_query($db, $query);

        if (mysqli_num_rows($result) == 1) {
            // Успешная авторизация
            $_SESSION['username'] = $username;
            header('Location: profile.php');
        } else {
            // Ошибка авторизации
            echo 'Неверное имя пользователя или пароль.';
        }
        mysqli_close($db);
    } else {
        // Ошибка reCAPTCHA
        echo 'Проверка reCAPTCHA не пройдена. Попробуйте снова.';
        // Выводим ошибки для отладки
        echo '<pre>';
        print_r($captchaSuccess);
        echo '</pre>';
    }
}
?>
