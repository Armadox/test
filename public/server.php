<?php

//CORS
header("Access-Control-Allow-Origin: *");

//CONNECTION TO DATABASE
include 'db.php';

//DISPLAYING MYSQL DATA
class displayData extends database
{

    public function display()
    {
        $sql = 'SELECT * FROM products ORDER BY attribute';
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $posts = $stmt->fetchAll();
        exit(json_encode($posts));

    }
}

$objDb = new displayData;
$conn = $objDb->display();


?>