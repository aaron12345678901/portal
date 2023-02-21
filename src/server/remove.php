<?php
header("Access-Control-Allow-Origin: *");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: applocation/json; charset=UTF-8");



$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'reactlogin';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the logged-in user's ID from the session
    
$user_id = $_GET['id'];


   
   


// Retrieve data from the database based on the user's ID
$sql = 
"DELETE FROM  visit 
WHERE fk_register_id = '$user_id'";
$result = $conn->query($sql); 

$sql = 
"DELETE FROM  register 
WHERE id = '$user_id'";
$result = $conn->query($sql); 


// Close the connection
$conn->close();
?>