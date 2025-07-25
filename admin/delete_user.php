<?php
session_start();
if (!isset($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit();
}

require_once '../includes/db_connect.php';
require __DIR__ . '/../vendor/autoload.php';
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;

$user_id = $_GET['user_id'] ?? '';
if (!$user_id) {
    header('Location: users.php');
    exit();
}

// Lấy firebase_uid từ DB
$stmt = $pdo->prepare('SELECT firebase_uid FROM users WHERE user_id = ?');
$stmt->execute([$user_id]);
$row = $stmt->fetch();
if ($row && $row['firebase_uid']) {
    $factory = (new Factory)->withServiceAccount(__DIR__.'/../firebase_service_account.json');
    $auth = $factory->createAuth();
    try {
        $auth->deleteUser($row['firebase_uid']);
    } catch (Exception $e) {
        // Có thể log lỗi nếu cần
    }
}
// Xoá user trong DB
$stmt = $pdo->prepare('DELETE FROM users WHERE user_id = ?');
$stmt->execute([$user_id]);

header('Location: users.php');
exit(); 