<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/18/2017
 * Time: 15:31
 */


session_start();

$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];

echo $email. "<br>";
echo $pass;

?>