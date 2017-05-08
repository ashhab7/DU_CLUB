
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/25/2017
 * Time: 19:18
 */

session_start();


include 'database.php';


$email = $_SESSION["Email"];
$pass = $_SESSION["pass"];


$account=$_SESSION['Account_Number'];

$sql ="SELECT * FROM `user` WHERE Email = '$email'";
$result = $conn->query($sql);
$found=array();
while($row = $result->fetch_assoc())
{
    $found[]=$row;
}

echo json_encode($found);


?>
