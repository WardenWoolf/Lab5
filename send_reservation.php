<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получить данные из запроса
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = $data['name'];
    $email = $data['email'];
    $details = $data['details'];

    // Проверка на заполнение полей
    if (empty($name) || empty($email) || empty($details)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    // Заготовленный текст письма
    $subject = "Подтверждение брони";
    $message = "Здравствуйте, $name!\n\nСпасибо за вашу бронь. Мы получили следующие данные:\n\nИмя: $name\nПочта: $email\nЖелаемое время и дата брони: $details\n\nМы свяжемся с вами в ближайшее время для подтверждения.";
    $headers = "From: wordenshow@gmail.com";

    // Отправка письма
    if (mail($email, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено.";
    } else {
        echo "Ошибка при отправке письма.";
    }
} else {
    echo "Некорректный метод запроса.";
}
?>
