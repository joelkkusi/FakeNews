<?php

class Connection {
    private $host = "localhost";
    private $username = "fake";
    private $password = "news";
    private $dbname = "fakenews";
    
    protected function Connect()
    {
        $dns = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;
        $pdo = new PDO($dns, $this->username, $this->password);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
}
