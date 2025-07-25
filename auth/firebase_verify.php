<?php
require __DIR__ . '/../vendor/autoload.php';
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;
session_start();

header('Content-Type: application/json');

$factory = (new Factory)->withServiceAccount(__DIR__.'/../firebase_service_account.json');
$auth = $factory->createAuth();

$data = json_decode(file_get_contents('php://input'), true);
$idTokenString = $data['idToken'] ?? '';

if (!$idTokenString) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Thiếu idToken']);
    exit;
}

try {
    $verifiedIdToken = $auth->verifyIdToken($idTokenString);
    $claims = $verifiedIdToken->claims;
    $uid = $claims['sub'] ?? '';
    $email = $claims['email'] ?? '';
    // Kết nối DB
    require_once '../includes/db_connect.php';
    // Kiểm tra user trong DB
    $stmt = $pdo->prepare('SELECT * FROM users WHERE firebase_uid = ?');
    $stmt->execute([$uid]);
    $user = $stmt->fetch();
    if (!$user) {
        // Nếu chưa có, tạo mới user
        // Sinh user_id: PKA + 4 số ngẫu nhiên, không trùng lặp
        do {
            $rand = str_pad(strval(rand(0, 9999)), 4, '0', STR_PAD_LEFT);
            $new_user_id = 'PKA' . $rand;
            $check = $pdo->prepare('SELECT 1 FROM users WHERE user_id = ?');
            $check->execute([$new_user_id]);
        } while ($check->fetch());
        // Lấy fullname là phần trước dấu '@' của email
        $fullname = explode('@', $email)[0];
        $stmt = $pdo->prepare('INSERT INTO users (user_id, firebase_uid, email, fullname) VALUES (?, ?, ?, ?)');
        $stmt->execute([$new_user_id, $uid, $email, $fullname]);
        $user_id = $new_user_id;
    } else {
        $user_id = $user['user_id'];
    }
    // Tạo session
    $_SESSION['user_id'] = $user_id;
    $_SESSION['fullname'] = $user['fullname'] ?? $email;
    echo json_encode(['status' => 'success', 'user_id' => $user_id, 'fullname' => $_SESSION['fullname']]);
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
} 