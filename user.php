<html>
<?php
session_start();
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
 */
$servername="127.0.0.1";
$username = "root";
$password = "";
$dbname = "duclub";
$conn = new mysqli($servername, $username, $password, $dbname);

$emaillerr = $passerr = "";
$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];
echo $email. "<br>";
echo $pass;

if($conn->connect_error)
{
    echo "Connection not successful\n" . "<br>";
    die("Connection failed: " .$conn->connect_error);
}
$sql = "SELECT * from user WHERE (Email = '$email' AND Password = '$pass') ";
$result = $conn->query($sql);
echo  "<br>" . "Log in successful";

while($row = $result->fetch_assoc())
{
    echo "<br>" . "<b>User name: </b>" . $row["User_Name"] . " <b>Email Id: </b>" . $row["Email"]." <b>Password: </b>" . $row["Password"]." <b>Account Number: </b>" . $row["Account_Number"]." <b>Account Status: </b>" . $row["Status"];
    $status = $row["Status"];
    if($status == 0)
        header('Location: showmenu.php');
    else if($status == 1)
        header('Location: admin.php');
    else if($status == 2)
        header('Location: manager.html');
    else echo "error";
}



$conn->close();
?>



</html>
