<?php

    //CONNECTION TO DATABASE
    function databank($host, $user, $password, $dbName)
    {
        
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbName;
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);

    $sql = 'SELECT * FROM products ORDER BY attribute';
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $posts = $stmt->fetchAll();


    //OUTPUTTING JSON DATA
    exit(json_encode($posts)); 
    
    }


    //INSERT THE PATH THAT SHOULD BE ALLOWED TO READ THIS
    header("Access-Control-Allow-Origin: *");
       

    //RUNNING FUNCTION THAT CONNECTS TO DATABASE
    databank("localhost", "root", "", "project");
?>