<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/18/2017
 * Time: 15:31
 */


session_start();
include 'database.php';

$email = $_SESSION["Email"];
$pass = $_SESSION["pass"];


$add_email = $_POST['add_email'];
$add_pass = $_POST['add_pass'];
$add_user_name = $_POST['user_name'];
$add_account_number = $_POST['account_number'];
$add_phone_number = $_POST['phone_number'];
$add_address = $_POST['address'];
$temp = 0;

if(!filter_var($add_email, FILTER_VALIDATE_EMAIL))
{
    $temp = 1;
    echo "Invalid email format";
}


if($add_pass == null)
{
    $temp = 1;
    echo "required password";
}

if($add_address == null)
{
    $temp = 1;
    echo "required address";
}


if($add_user_name == null)
{
    $temp = 1;
    echo "required User Name";
}


if($add_phone_number == null)
{
    $temp = 1;
    echo "required Phone Number";
}


if($add_account_number == null)
{
    $temp = 1;
    echo "required Account Number";
}

if($temp == 0)
{

    $add_encrypted_pass = md5($add_pass);
    $sql = "INSERT INTO `user`(`User_Name`, `Password`, `Email`, `Account_Number`, `Status`, `Bill`, `Phone_Number`, `Address`) VALUES ('$add_user_name','$add_encrypted_pass','$add_email','$add_account_number','0','','$add_phone_number','$add_address')";
    $result1 = $conn->query($sql);
    if($result1)
    {
        echo "1";
    }



}
?>