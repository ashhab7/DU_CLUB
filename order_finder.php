<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/18/2017
 * Time: 15:31
 */

session_start();


include 'database.php';

$email = $_SESSION["Email"];
$pass = $_SESSION["pass"];


$account_number = $_POST['account_number'];
$sql ="SELECT * FROM orders WHERE Account_Number = '$account_number'";
$result = $conn->query($sql);

$found=array();
while($row = $result->fetch_assoc())
{
    $found[]=$row;
}

echo json_encode($found);

?>