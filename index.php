<?php
session_start();
?>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



    <script type="text/javascript" src="./DU_CLUB_files/jquery.js.download"></script>

    <script src="./DU_CLUB_files/bootstrap.js.download"></script>

    <link rel="stylesheet" type="text/css" href="./DU_CLUB_files/style_new.css">
    <link rel="stylesheet" type="text/css" href="./DU_CLUB_files/styledropdown_new.css">

    <h2><center>Welcome to Dhaka University Club</center></h2>
    <h2><center>Enter Email and Password to continue</center></h2>



    <script type = "text/javascript">


        function finder(){

            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){

                if(this.readyState == 4 && this.status == 200)
                    console.log(this.responseText);
                if(this.responseText.match("1"))
                {
                    window.location="user.php";
                }
                else
                    document.getElementById("showMessage").innerHTML = xhttp.responseText;



            };

            email = document.getElementById("Email").value;
            pass = document.getElementById("Pass").value;

            xhttp.open("POST","finder.php",true);
            xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhttp.send("email="+email+"&pass="+pass);

        }

    </script>
    <title>Dhaka University Club</title>
</head>

<center>
    <body background="./DU_CLUB_files/background.jpg">
    <h3>Email</h3><br>
    <input style="width: 30%" type="email" id="Email" placeholder="someone@something.com" required><br>
    <h3>Password</h3><br>
    <input style="width: 30%" type="password" id="Pass" placeholder="something tricky" required><br>
    <br>
    <br>
    <br><input style="width: 30%" type="submit" class="button" onclick="finder()" name="button1" value="Log In">

    <p id = "showMessage" ></p>
    <h4>User Email : m.ashhab614@gmail.com</h4>
    <h4>User Pass : 123456</h4>
    <h4>Manager Email : manager.manager@gmail.com</h4>
    <h4>Manager Pass : manager</h4>
    <h4>Admin Email : admin.admin@gmail.com</h4>
    <h4>Admin Pass : admin</h4>

    </body>
</center>
</html>