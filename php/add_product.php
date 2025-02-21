<?php
include 'conn.php'; // Database connection

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) && isset($data->price) && isset($data->category) && isset($data->subCategory) && isset($data->description)) {
    $name = $data->name;
    $price = $data->price;
    $category = $data->category;
    $subCategory = $data->subCategory;
    $description = $data->description;

    $sql = "INSERT INTO products (name, price, category, subCategory, description) VALUES ('$name', '$price', '$category', '$subCategory', '$description')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Product added successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Invalid input"]);
}

$conn->close();
?>
