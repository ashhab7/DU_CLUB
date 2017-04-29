<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/18/2017
 * Time: 15:31
 */

session_start();

$servername="127.0.0.1";
$username = "du_club";
$password = "du_club";
$dbname = "duclub";
$conn = new mysqli($servername, $username, $password, $dbname);


$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];

$sql ="SELECT * FROM orders WHERE Status = '0'";
$result = $conn->query($sql);

$found=array();
while($row = $result->fetch_assoc())
{
    $found[]=$row;
}

echo json_encode($found);

?>