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

$user_no = $_POST['user_no'];

$sql = "DELETE FROM `user` WHERE User_No = '$user_no'";
$result = $conn->query($sql);
if($result)
    echo "success";

?>

