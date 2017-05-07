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
$email = $_SESSION["Email"];
$pass = $_SESSION["pass"];


echo $email;
echo $pass;

if($conn->connect_error)
{
    echo "Connection not successful\n" . "<br>";
    die("Connection failed: " .$conn->connect_error);
}
//echo "Connect successfully" . "<br>";

//$sql = sprintf('SELECT from user WHERE (Email = "%s" AND Password = "%s");',$email,$pass);
    $sql = "SELECT * from user WHERE (Email = '$email' AND Password = $pass) ";
    //$sql = "SELECT * FROM user";
    $result = $conn->query($sql);
        echo  "<br>" . "Log in successful";

        while($row = $result->fetch_assoc())
        {
            echo "<br>" . "<b>User name: </b>" . $row["User_Name"] . " <b>Email Id: </b>" . $row["Email"]." <b>Password: </b>" . $row["Password"]." <b>Account Number: </b>" . $row["Account_Number"];
        }



//$conn->close();
?>

<body onload="window.location = 'customer.php'";>
</body>

</html>