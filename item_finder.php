<?php
session_start();
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
 */

include 'database.php';


$sql = "SELECT * from menu WHERE Email = '$email' ";
