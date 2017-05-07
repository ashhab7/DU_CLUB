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



$item_no = $_POST['item_no'];
$Status = $_POST['Status'];


//echo $Status;

$sql ="UPDATE `menu` SET `Status`=$Status WHERE No = $item_no";
$result = $conn->query($sql);
echo $result;
?>

