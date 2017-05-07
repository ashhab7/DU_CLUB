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



$order_no = $_POST['order_no'];

$_SESSION["order_no"] = $order_no;
echo $_SESSION["order_no"];

?>

