<?php

$host = "localhost";
$user = "ryanlacl_user";
$password = "c0nt4ctus3r";
$db = "ryanlacl_contact_form_data";
$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Could not connect:" . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO contact " . 
    "(id, timestamp, first_name, last_name, email, message) " .
    "VALUES(NULL, NOW(), ?, ?, ?, ?)");
$stmt->bind_param("ssss", $first_name, $last_name, $email, $message);

$first_name = $_POST["firstName"];
$last_name = $_POST["lastName"];
$email = addslashes($_POST["email"]);
$message = addslashes($_POST["message"]);
$stmt->execute();

$stmt->close();
$conn->close();

header("Location: contact.html");
die();

?>