<html>
<?php
session_start();
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
*/

include 'database.php';

$emaillerr = $passerr = "";
$account_number = $_SESSION['Account_Number'];
$email = $_SESSION['Email'];
$pass = $_SESSION['pass'];


if(isset($_SESSION['pass']))
    echo $_SESSION['pass'];


if($conn->connect_error)
{
    echo "Connection not successful\n" . "<br>";
    die("Connection failed: " .$conn->connect_error);
}
$sql = "SELECT * from user WHERE (Email = '$email' AND Password = '$pass') ";
$result = $conn->query($sql);
if($result == true)
    echo  "<br>" . "Log in successful";

while($row = $result->fetch_assoc())
{
    echo "<br>" . "<b>User name: </b>" . $row["User_Name"] . " <b>Email Id: </b>" . $row["Email"]." <b>Password: </b>" . $row["Password"]." <b>Account Number: </b>" . $row["Account_Number"]." <b>Account Status: </b>" . $row["Status"];
    $status = $row["Status"];
    if($status == 0)
        header('Location: show_menu');
    else if($status == 1)
        header('Location: admin_home');
    else if($status == 2)
        header('Location: manager_home');
    else echo "error 444";
}

$conn->close();
?>


</html>
