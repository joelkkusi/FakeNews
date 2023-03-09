<?php

class getNews extends Connection {
    public function getPost() {
        $sql = "SELECT * FROM posts";
        $stmt = $this->Connect()->query($sql);

        while($row = $stmt->fetch()) {
            echo $row['title'];
        }
    }
}