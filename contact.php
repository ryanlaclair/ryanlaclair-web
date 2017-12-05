<?php

$host = "localhost";
$user = "ryanlacl_user";
$password = "c0nt4ctus3r";
$conn = mysql_connect($host, $user, $password);

if (! $conn) {
    die("Could not connetct:" . mysql_error());
}

$id = NULL;
$first_name = $_POST["firstName"];
$last_name = $_POST["lastName"];
$email = addslashes($_POST["email"]);
$message = addslashes($_POST["message"]);

$sql = "INSERT INTO contact " . 
       "(id, first_name, last_name, email, message)" .
       "VALUES('$id', '$first_name', '$last_name', '$email', '$message')";

mysql_select_db("ryanlacl_contact_form_data");

$return_val = mysql_query($sql, $conn);

if (! $return_val) {
    die("Could not enter data: " . mysql_error());
}

mysql_close($conn);

header("Location: contact.html");
die();

?>