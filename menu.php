<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/19/2017
 * Time: 09:22
 */
session_start();

include 'database.php';

$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];



$sql ="SELECT * FROM menu WHERE Status = '1'";
$result = $conn->query($sql);
$found=array();
while($row = $result->fetch_assoc())
{
   $found[]=$row;
}

echo json_encode($found);

?>

