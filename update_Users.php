<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_POST['user_id'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$avatar = $_POST['avatar'];
$role = $_POST['role'];
$registration_date = $_POST['registration_date'];

$sql = "UPDATE Users SET username='$username', email='$email', password='$password', avatar='$avatar', 
        role='$role', registration_date='$registration_date' WHERE user_id='$user_id'";

if (mysqli_query($conn, $sql)) {
    echo "Запись успешно обновлена";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
