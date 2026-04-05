<?php

header('Content-Type: application/json');

$fullName  = trim(htmlspecialchars($_POST['fullName'] ?? '', ENT_QUOTES, 'UTF-8'));
$email      = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$userSubject   = trim(htmlspecialchars($_POST['subject'] ?? '', ENT_QUOTES, 'UTF-8'));
$message    = trim(htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8'));
$honeypot   = trim($_POST['honeypot'] ?? '');

$errors = [];


if (!empty($honeypot)) {
    $errors['honeypot'] = 'Spam detected.';
}

if (!$fullName) {
    $errors['fullName'] = 'Full Name is required.';
}

if (!$email) {
    $errors['email'] = 'Valid email is required.';
}

if (!$userSubject) {
    $errors['subject'] = 'Subject is required.';
}

if (!$message) {
    $errors['message'] = 'Message is required.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// ---------- Change the to value to client email -----------
$to      = 'rinoiod@gmail.com';
$subject = $userSubject;
$body    = "Name: $fullName\nEmail: $email\nMessage: $message";
// Change this to your own domain
$headers = "From: runwaysix.com\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => "Message Received — You're on our radar, we'll be in touch soon."]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
}
