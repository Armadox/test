<?php
//CONNECTION DATA
//CORS
header("Access-Control-Allow-Origin: *");

//CONNECTION TO DATABASE
include 'db.php';

//DELETING CHECKED ID'S
class delete extends database
{

    function deleteFunction()
    {
        $data = json_decode(file_get_contents("php://input"));
        $arrayOX = $data->number;

        foreach ($arrayOX as $key => $keyval) {
            $numberNow = $keyval;
            $stmt = $this->connect()->prepare("DELETE FROM products WHERE products.id=$numberNow");
            $stmt->execute();
        }
    }
}

$objDb = new delete;
$conn = $objDb->deleteFunction();

?>