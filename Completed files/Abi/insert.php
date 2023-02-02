<?php
    // POST Connections to Mysql
    require_once("database.php");
    $time = date("Y-m-d H:i:s");

    $location = $_POST['location'];
    $temperature = $_POST['temp'];
    $weather = $_POST['weather'];
    // Insert new data
    $statement = "INSERT INTO `weatherdata`(`Location`, `Time`, `Temperature`, `Weather`) VALUES ('$location','$time','$temperature','$weather')";
    if ($conn->mysqli_query($statement ) === TRUE) {
        echo "Record updated successfully";
    }
?>