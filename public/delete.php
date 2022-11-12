

<?php
    //CONNECTION DATA
    

    //CONNECTION TO DATABASE
    function databank($host, $user, $password, $dbName)
    {
    $data = json_decode(file_get_contents("php://input"));

    $arrayOX = $data->number;

    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbName;
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);

    foreach ($arrayOX as $key => $keyval)
        {
            $numberNow = $keyval;
            $stmt = $pdo->prepare("DELETE FROM products WHERE products.id=$numberNow");
            $stmt->execute();
        }

    
        
    }

    

    //INSERT THE PATH THAT SHOULD BE ALLOWED TO READ THIS
    header("Access-Control-Allow-Origin: *");
       



    //RUNNING FUNCTION THAT CONNECTS TO DATABASE
    databank("localhost", "root", "", "project");
?>