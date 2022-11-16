<?php
//CORS
header("Access-Control-Allow-Origin: *");

//CONNECTION TO DATABASE
include 'db.php';


//TRANSFERING INPUTS TO MYSQL
class postInput extends database
{

    public function insertProduct($productSku, $productName, $productPrice, $productAttribute, $productAttribute_Value)
    {
        $sql = "INSERT INTO products (sku, name, price, attribute, attribute_value) values (?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$productSku, $productName, $productPrice, $productAttribute, $productAttribute_Value]);
    }
}

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

//AVAILABLE ATTRIBUTES////
$weighter = "Weight";
$dimension = "Dimension";
$size = "Size";
//////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ($productAttribute == $size) {
    $productAttribute_Value = $productAttribute_Value . "mb";
}

if ($productAttribute == $dimension) {
    $productAttribute_Value = $productHeight . "cm x " . $productWidth . "cm x " . $productLength . "cm";
}

if ($productAttribute == $weighter) {
    $productAttribute_Value = $productWeight . "kg";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////




$objDb = new postInput;
$conn = $objDb->insertProduct($productSku, $productName, $productPrice, $productAttribute, $productAttribute_Value);
?>