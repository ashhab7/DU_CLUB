
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
 */
session_start();

include 'database.php';

$email = $_POST['email'];
$pass = $_POST['pass'];
$emaillerr = $passerr = "";

$temp_pass = md5($pass);
$pass = $temp_pass;

if($conn->connect_error)
{
   // echo "Connection not successful\n" . "<br>";
    die("Connection failed: " .$conn->connect_error);
}
    $sql = "SELECT * from user WHERE (Email = '".$email."' AND Password = '".$pass."');" ;

    //$sql = "SELECT * FROM user";


    $result = $conn->query($sql);
    if($result->num_rows === 0)
    {
        echo "Incorrect Mail Id or Password!!Please check again";
    }
    else
    {
        $row = $result->fetch_assoc();
        $_SESSION['Account_Number']=$row['Account_Number'];
        $_SESSION['Email'] = $row['Email'];
        $_SESSION['Status'] = $row['Status'];
        $_SESSION['pass'] = $row['Password'];
        echo  "1";
    }


$conn->close();
?>
