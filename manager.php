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



$sql ="SELECT * FROM orders WHERE Status = '0'";
$result = $conn->query($sql);

$found=array();
while($row = $result->fetch_assoc())
{
    $found[]=$row;
}

echo json_encode($found);

?>