<?php

$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = '';
$dbName = "map1";

// Opens a connection to a MySQL server
$connection = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName); 
if (!$connection) {
die('Not connected : Ah shit ' . mysqli_error());
}

//Set the active MySQL database
$db_selected = mysqli_select_db($connection, $dbName );
if (!$db_selected) {
 die ('Can\'t use db : ' . mysqli_error());
}

?>