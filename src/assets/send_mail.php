<?php

########### CONFIG ###############

$recipient = 'home@thomas-danielse.de';
$fromAddress = 'home@thomas-danielse.de';
$allowedOrigin = 'https://thomas-danielse.de';

$maxNameLength = 100;
$maxEmailLength = 254;
$maxMessageLength = 5000;

// Soft limit: 5 requests per IP within 10 minutes (fail-open if temp unwritable)
$rateLimitRequests = 3;
$rateLimitWindow = 600;

########### CONFIG END ###########

/**
 * Strip CR/LF/TAB so user input cannot inject extra mail headers.
 */
function sanitize_header_value($value) {
    return str_replace(["\r", "\n", "\t"], '', (string) $value);
}

function send_cors_headers($origin) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

function json_response($ok, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: no-store');
    echo json_encode(['ok' => $ok]);
    exit;
}

function string_length($value) {
    return function_exists('mb_strlen')
        ? mb_strlen($value, 'UTF-8')
        : strlen($value);
}

/**
 * Soft file-based rate limit. If the temp file cannot be used, allow the request.
 */
function check_rate_limit($maxRequests, $windowSeconds) {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'contact_rate_' . hash('sha256', $ip);

    $now = time();
    $handle = @fopen($file, 'c+');
    if (!$handle) {
        return;
    }

    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        return;
    }

    $contents = stream_get_contents($handle);
    $timestamps = [];
    if ($contents !== false && $contents !== '') {
        $decoded = json_decode($contents, true);
        if (is_array($decoded)) {
            $timestamps = $decoded;
        }
    }

    $timestamps = array_values(array_filter(
        $timestamps,
        function ($timestamp) use ($now, $windowSeconds) {
            return is_int($timestamp) && $timestamp > ($now - $windowSeconds);
        }
    ));

    if (count($timestamps) >= $maxRequests) {
        flock($handle, LOCK_UN);
        fclose($handle);
        header('Retry-After: ' . $windowSeconds);
        json_response(false, 429);
    }

    $timestamps[] = $now;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($timestamps));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

switch ($_SERVER['REQUEST_METHOD'] ?? '') {
    case 'OPTIONS':
        send_cors_headers($allowedOrigin);
        http_response_code(204);
        exit;

    case 'POST':
        send_cors_headers($allowedOrigin);
        break;

    default:
        header('Allow: POST, OPTIONS', true, 405);
        json_response(false, 405);
}

check_rate_limit($rateLimitRequests, $rateLimitWindow);

// Honeypot: bots fill hidden "website" field — accept silently, send nothing.
if (!empty($_POST['website'])) {
    json_response(true, 200);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || string_length($name) > $maxNameLength) {
    json_response(false, 400);
}

if (
    $email === ''
    || string_length($email) > $maxEmailLength
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    json_response(false, 400);
}

if ($message === '' || string_length($message) > $maxMessageLength) {
    json_response(false, 400);
}

$email = sanitize_header_value($email);
$name = sanitize_header_value($name);

// From stays on domain; visitor address is only Reply-To.
$headers =
    'From: ' . $fromAddress . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'Content-Type: text/plain; charset=UTF-8';

$subject = 'Contact Form';
$body =
    "Name: " . $name . "\n" .
    "Email: " . $email . "\n\n" .
    "Message:\n" .
    $message;

$ok = mail($recipient, $subject, $body, $headers);
json_response($ok, $ok ? 200 : 500);
