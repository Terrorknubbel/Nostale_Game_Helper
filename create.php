<?php
$name = $_POST["Name"];
$taler = $_POST["Taler"];
$basarwert = $_POST["Basarwert"];

if($name && $taler && $basarwert){
    $pdo = new PDO('mysql:host=localhost;dbname=nosbasar', 'root', '');
    
    $statement = $pdo->prepare("INSERT INTO items (Name, Taler, Basarwert) VALUES (?, ?, ?)");

    $statement->execute(array($name, $taler, $basarwert));   
}else{
    echo "Werte fehlen";
}

?>