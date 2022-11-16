<?php

class database
{
    private $host = 'localhost';
    private $dbName = 'project';
    private $user = 'root';
    private $password = '';

    public function connect()
    {
        $conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbName, $this->user, $this->password);
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $conn;
    }

}


?>