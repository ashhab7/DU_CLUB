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


$item_name = $_POST['item_name'];
$cost = $_POST['cost'];


if($item_name!= null && $cost != null)
{

    $sql = "INSERT INTO `menu`(`No`, `Item`, `Cost`, `Status`) VALUES ('','$item_name','$cost','0')";
    $result1 = $conn->query($sql);
    if($result1){
        echo "success";
    }
}

else if($item_name == null)
{
    echo "required item name";
}

else if($cost == null)
{
    echo "required cost";
}

?>