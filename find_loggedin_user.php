
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
 */
session_start();

include 'database.php';

$email = $_SESSION['Email'];
$pass = $_SESSION['pass'];
$emaillerr = $passerr = "";

if(isset($_SESSION['Email']))
{
    if($conn->connect_error)
    {
        // echo "Connection not successful\n" . "<br>";
        die("Connection failed: " .$conn->connect_error);
    }
    $sql = "SELECT * from user WHERE (Email = '".$email."' AND Password = '".$pass."');" ;



    $result = $conn->query($sql);
    $found=array();
    while($row = $result->fetch_assoc())
    {
        $found[]=$row;
    }

    echo json_encode($found);


    $conn->close();

}

?>
