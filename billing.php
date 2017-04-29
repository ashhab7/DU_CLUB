
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 4/25/2017
 * Time: 19:18
 */

session_start();


$servername="127.0.0.1";
$username = "root";
$password = "";
$dbname = "duclub";
$conn = new mysqli($servername, $username, $password, $dbname);


$email = $_COOKIE["email"];
$pass = $_COOKIE["pass"];
//echo $_GET['arr'];

$result = json_decode($_POST['arr']);
$bill=$_POST["arr"];
$total = $_POST["total"];
$length = count($result);

$account=$_SESSION['Account_Number'];

$sql = "INSERT INTO `orders` ( `Account_Number`, `Bill`,`Total`) VALUES ( '$account', '$bill' ,'$total');";


$result1 = $conn->query($sql);

$sql1 = "SELECT LAST_INSERT_ID() as last;";

$result2 = $conn->query($sql1);
$result3 = $result2->fetch_assoc();;


$_SESSION['last']=$result3['last'];

echo $result3['last'];



/*$item_name =  $result['0']->item_name;
$item_no =  $result['0']->item_no;
$item_cost =  $result['0']->item_cost;


echo $item_no," ",$item_name," ",$item_cost;*/


?>
