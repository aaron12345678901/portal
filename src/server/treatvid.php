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
   


// Retrieve data from the database based on the user's ID extra data included for test purpose 
$sql = "SELECT register.first_name,register.last_name,register.patientnum,register.Appointments,visit.ward,visit.ailment,visit.treatment,vid.vidname,vid.vidcode
FROM visit
INNER JOIN register
ON visit.fk_register_id = register.id
INNER JOIN vid
ON visit.fk_vid_id = vid.id
WHERE visit.fk_register_id = '$user_id'";
$result = $conn->query($sql);


// Check if there are any results
if ($result->num_rows > 0) {
    // Output the data as a JSON string
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array());
}

// Close the connection
$conn->close();
?>