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

$old_pass = &$_POST["old_pass"];
$new_pass = &$_POST["new_pass"];
$con_pass = &$_POST["con_pass"];

if($pass == $old_pass)
{
    if($new_pass == $con_pass)
    {
        if($new_pass != null)
        {
            $sql = "UPDATE `user` SET `Password`= '$new_pass' WHERE `Email` = '$email'";
            $result = $conn->query($sql);
            echo $result;
        }

        else
        {
            echo "Null value";
        }

    }
    else
        echo "password mismatched";
}

else
{
    echo "current password mismatched";
}

?>

