<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/19/2017
 * Time: 09:22
 */
session_start();

include 'database.php';
$email = $_SESSION["Email"];
$pass = $_SESSION["pass"];




$sql ="SELECT * FROM menu";
$result = $conn->query($sql);
$found=array();
while($row = $result->fetch_assoc())
{
    $found[]=$row;
}

echo json_encode($found);

?>

