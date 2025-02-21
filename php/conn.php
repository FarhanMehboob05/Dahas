<?php
$host = "localhost";
$user = "root";  // Default user in Ampps
$pass = "mysql";  // Default password is empty
$dbname = "dahas"; // Your database name

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Database connected successfully!";
}
?>
