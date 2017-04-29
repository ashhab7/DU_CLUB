<?php
session_start();
?>
<html>
<head>
    <title>Dhaka University Club</title>
    <h1 style= "background-color:red; color:greenyellow;">  <center>Welcome to Dhaka University Club<center/> </h1>
    <h2> <center> Enter Email and Password to continue</center></h2>

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

            document.cookie = "email="+email;
            document.cookie = "pass="+pass;

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