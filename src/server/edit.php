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
    $firstname = $_GET['firstname'];
    $lastname = $_GET['lastname'];
    $patientnumber = $_GET['patientnumber'];
    $treatment = $_GET['treatment'];
    $Doctor = $_GET['Doctor'];
    $WARD = $_GET['WARD'];
    $Appointmentsdue = $_GET['Appointmentsdue'];
    $ailment = $_GET['ailment'];
   


// Retrieve data from the database based on the user's ID
$sql = 
"UPDATE register 
SET 
first_name ='$firstname',
last_name='$lastname',
patientnum='$patientnumber',
Appointments=' $Appointmentsdue'
WHERE id='$user_id'; ";
$result = $conn->query($sql); 

$sql = "UPDATE visit 
INNER JOIN register
ON visit.fk_register_id = register.id
SET 
treatment ='$treatment',
ailment=' $ailment',
ward=' $WARD'
WHERE register.id = '$user_id'";
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