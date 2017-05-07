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

$acc_bill = &$_POST["total"];

        $sql = "UPDATE `user` SET `Bill`= '$acc_bill' WHERE `Email` = '$email'";
        $result = $conn->query($sql);
        echo $result;

?>

