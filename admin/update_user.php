<?php
session_start();
require_once "../includes/db_connect.php";
require __DIR__ . '/../vendor/autoload.php';
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;

if (!isset($_SESSION['admin_id'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_POST['user_id'] ?? '';
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $verified = isset($_POST['verified']) ? date('Y-m-d H:i:s') : null;

    // Lấy firebase_uid
    $stmt = $pdo->prepare('SELECT firebase_uid FROM users WHERE user_id = ?');
    $stmt->execute([$user_id]);
    $row = $stmt->fetch();
    if ($row && $row['firebase_uid']) {
        $factory = (new Factory)->withServiceAccount(__DIR__.'/../firebase_service_account.json');
        $auth = $factory->createAuth();
        try {
            $auth->updateUser($row['firebase_uid'], ['email' => $email]);
        } catch (Exception $e) {
            // Có thể log lỗi nếu cần
        }
    }

    $stmt = $pdo->prepare("UPDATE users SET fullname = ?, email = ?, email_verified_at = ? WHERE user_id = ?");
    $stmt->execute([$fullname, $email, $verified, $user_id]);

    $_SESSION['success'] = "Cập nhật thành công.";
    header("Location: users.php");
    exit();
}
?>
