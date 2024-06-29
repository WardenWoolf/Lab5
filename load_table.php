<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

$table = isset($_POST['table']) ? $_POST['table'] : '';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$validTables = ["Users", "Equipment", "ComputerStations", "Tariffs", "Rentals", "Games"];

if (in_array($table, $validTables)) {
    $sql = "SELECT * FROM $table";
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
        echo "No results found for table $table";
    }
    echo json_encode(['table' => ob_get_clean(), 'attributes' => $attributes]);
} else {
    echo "Invalid table specified";
}

$conn->close();
?>
