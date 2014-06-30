<?php
// $host="kilometri.ro"; // Host name
// 
// $username="kilometr"; // Mysql username
// 
// $password="v[MyK23m-r%I"; // Mysql password
// 
// $db_name="kilometr_brasovtour"; // Database name
// 
// 
// 
// 
// 
// 
// 
 // $con = new mysqli($host, $username, $password) or die('Error Db-Conectction');
 // $select_db1 = mysqli_select_db($con,$db_name)or die("Eroare selectare dataBase");


if(isset($_POST['what'])){
	$what = $_POST['what'];
	echo $what;
}
?>
