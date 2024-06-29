<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ComputerClub";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$table = $_POST['table'];
$id = $_POST['id'];
$id_field = $_POST['id_field'];
$values = $_POST['values'];

file_put_contents('debug.log', "Table: $table\nID: $id\nID Field: $id_field\nValues: " . json_encode($values) . "\n", FILE_APPEND);

$columns = [];
$sql = "DESCRIBE $table";
$result = $conn->query($sql);

if (!$result) {
    die("Error describing table: " . $conn->error);
}

while ($row = $result->fetch_assoc()) {
    $columns[] = $row['Field'];
}

if (strtolower($columns[0]) == 'id') {
    array_shift($columns);
}

if (count($columns) != count($values)) {
    die("Error: Number of columns and values do not match.");
}

$escaped_values = array_map([$conn, 'real_escape_string'], $values);
$update_pairs = [];
for ($i = 0; $i < count($columns); $i++) {
    $update_pairs[] = $columns[$i] . "='" . $escaped_values[$i] . "'";
}

$sql = "UPDATE $table SET " . implode(", ", $update_pairs) . " WHERE $id_field='$id'";
file_put_contents('debug.log', "Executing query: $sql\n", FILE_APPEND);

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
