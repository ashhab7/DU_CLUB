
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 3/28/2017
 * Time: 11:01
 */
session_start();

include 'database.php';

$email = $_SESSION['Email'];
$pass = $_SESSION['pass'];
$emaillerr = $passerr = "";

if(isset($_SESSION['Email']) || isset($_SESSION['pass']))
{
    session_destroy() ;
    $_SESSION = array();
    echo "1";

}

?>
