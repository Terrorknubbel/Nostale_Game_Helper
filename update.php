<?php
echo $_POST["id"];
echo $_POST["Basarwert"];

$id = $_POST["id"];
$basarwert = $_POST["Basarwert"];

if($id && $basarwert){
    $data = [
        'id' => $id,
        'basarwert' => $basarwert
    ];
    $pdo = new PDO('mysql:host=localhost;dbname=nosbasar', 'root', '');
    $sql = "UPDATE items SET Basarwert=:basarwert WHERE id=:id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($data);
   
}else{
    echo "Werte fehlen";
}

?>