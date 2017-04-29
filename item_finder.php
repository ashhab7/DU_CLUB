<?php
session_start();
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
 */
$servername="127.0.0.1";
$username = "du_club";
$password = "du_club";
$dbname = "duclub";
$conn = new mysqli($servername, $username, $password, $dbname);


$sql = "SELECT * from menu WHERE Email = '$email' ";
