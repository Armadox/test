

<?php
    //CONNECTION DATA
   
 
    //CONNECTION TO DATABASE
    function databank($host, $user, $password, $dbName)
    {
    $data = json_decode(file_get_contents("php://input"));

    $productSku = $data->sku;
    $productName = $data->name;
    $productPrice = $data->price;
    $productAttribute = $data->attribute;
    $productAttribute_Value = $data->attribute_value; 
    $productHeight = $data->height;
    $productWidth = $data->width;
    $productLength = $data->length;
    $productWeight = $data->weight;

    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbName;
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);

    //AVAILABLE ATTRIBUTES
    $weighter = "Weight";
    $dimension = "Dimension";
    $size = "Size";


    /////////////////////////////////////////////////////////////////////////

    if($productAttribute == $size)
    {
        $productAttribute_Value = $productAttribute_Value."mb";
    }
    
    if($productAttribute == $dimension)
    {
        $productAttribute_Value = $productHeight."cm x ".$productWidth."cm x ".$productLength."cm";
    }

    if($productAttribute == $weighter)
    {
        $productAttribute_Value = $productWeight."kg";
    }

    $sql = "INSERT INTO products (sku, name, price, attribute, attribute_value) values ('$productSku','$productName','$productPrice','$productAttribute','$productAttribute_Value')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    }

    //INSERT THE PATH THAT SHOULD BE ALLOWED TO READ THIS
    header("Access-Control-Allow-Origin: *");
       



    //RUNNING FUNCTION THAT CONNECTS TO DATABASE
    databank("localhost", "root", "", "project");
?>