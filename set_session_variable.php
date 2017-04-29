<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/19/2017
 * Time: 09:22
 */
session_start();

$servername="127.0.0.1";
$username = "du_club";
$password = "du_club";
$dbname = "duclub";
$conn = new mysqli($servername, $username, $password, $dbname);


$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];

$order_no = $_POST['order_no'];

$_SESSION["order_no"] = $order_no;
echo $_SESSION["order_no"];

?>

