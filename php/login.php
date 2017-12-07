<?php

$PASSWORD = "cs601demo";
$password = $_POST["password"];

if ($password == $PASSWORD) {
    $host = "localhost";
    $user = "ryanlacl_user";
    $password = "c0nt4ctus3r";
    $db = "ryanlacl_contact_form_data";
    $conn = new mysqli($host, $user, $password, $db);
    
    if ($conn->connect_error) {
        die("Could not connect:" . $conn->connect_error);
    }

    $sql = "SELECT * FROM contact ORDER BY id DESC LIMIT 20";
    $result = $conn->query($sql);

    $rows = array();
    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }

    echo json_encode($rows);
}
else {
    header('HTTP/1.1 401 Unauthorized', true, 401);
}

?>