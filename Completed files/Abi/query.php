<?php
    require_once("database.php");
    $location = $_POST['location'];
    $weatherhistory  = '';

    // Select all for history
    $statement = "SELECT 'time', 'temperature', 'weather' FROM weatherdata WHERE 'Location' ='$location' limit 1";
    $records = mysqli_query($conn, $statement);
    if  (mysqli_num_rows($records) >0) {
        $n = mysqli_fetch_array($records);
        $weatherhistory  .= $n['time'];
        $weatherhistory  .= " ";
        $weatherhistory  .=  $n['temperature'];
        $weatherhistory  .= " ";
        $weatherhistory  .= "Celsius ";
        $weatherhistory  .= $n['weather'];
        echo $weatherhistory;
}
?>