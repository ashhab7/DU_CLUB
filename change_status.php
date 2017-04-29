<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/19/2017
 * Time: 09:22
 */
session_start();


$servername="127.0.0.1";
$username = "root";
$password = "";
$dbname = "duclub";
$conn = new mysqli($servername, $username, $password, $dbname);

$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];

$item_no = $_POST['item_no'];
$Status = $_POST['Status'];


//echo $Status;

$sql ="UPDATE `menu` SET `Status`=$Status WHERE No = $item_no";
$result = $conn->query($sql);
echo $result;
?>

