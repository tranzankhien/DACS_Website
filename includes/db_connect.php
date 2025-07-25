<?php
$host = "localhost";
$dbname = "ticketbox";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Lỗi kết nối: " . $e->getMessage());
}

// Lưu ý: Để đồng bộ với Firebase, bảng users nên có cột firebase_uid (VARCHAR, UNIQUE)
// ALTER TABLE users ADD COLUMN firebase_uid VARCHAR(128) UNIQUE;
?>
