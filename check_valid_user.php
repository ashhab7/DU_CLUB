<?php
session_start();
?>
<html>
<head>
    <title>Submission Form</title>
    <h1 style= "background-color:red; color:greenyellow;">  <center> Dhaka University Club<center/> </h1>
    <h2> <center> Enter Email and Password to continue</center></h2>



    <script type = "text/javascript">


        function finder(){

            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){

                if(this.readyState == 4 && this.status == 200)
                    console.log(this.responseText);
                if(this.responseText.match("1"))
                {
                    window.location="demo.php";
                }

                else
                    document.getElementById("showMessage").innerHTML = xhttp.responseText;



            };


            email = document.getElementById("Email").value;
            pass = document.getElementById("Pass").value;

            document.cookie = "email = "+email+";"+"pass = "+pass;

            xhttp.open("POST","finder.php",true);
            xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhttp.send("email="+email+"&pass="+pass);

        }

    </script>

</head>

<center>
    <body>

    Email:
    <input type="email" id="Email" required/>
    Password:
    <input type="password" id="Pass" required/>

    <br>
    <br>
    <br><input type="submit" onclick="finder()" name="button1" value="Log In">

    <p id = "showMessage" ></p>

    </body>
</center>
</html>





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


$emaillerr = $passerr = "";
$email = $_SESSION["email"];
$pass = $_SESSION["pass"];

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


$conn->close();
?>














