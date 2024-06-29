<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

$view = isset($_POST['view']) ? $_POST['view'] : '';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$validViews = ["view1", "view2", "view3", "view4", "view5", "view6", "view7", "view8", "view9", "view10"];

if (in_array($view, $validViews)) {
    $sql = "SELECT * FROM $view"; // Предполагается, что представления именуются как 'view1', 'view2', и так далее
    $result = $conn->query($sql);

    $attributes = [];
    if ($result->num_rows > 0) {
        echo '<table border="1">';
        echo '<tr>';
        while ($field = $result->fetch_field()) {
            $attributes[] = $field->name;
            echo '<th>' . $field->name . '</th>';
        }
        echo '</tr>';
        while ($row = $result->fetch_assoc()) {
            echo '<tr>';
            foreach ($row as $cell) {
                echo '<td>' . $cell . '</td>';
            }
            echo '</tr>';
        }
        echo '</table>';
    } else {
        echo "No results found for view $view";
    }
    echo json_encode(['table' => ob_get_clean(), 'attributes' => $attributes]);
} else {
    echo "Invalid view specified";
}

$conn->close();
?>
