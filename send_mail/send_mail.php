<?php

########### CONFIG ###############

$recipient = 'home@thomas-danielse.de';
$allowedOrigin = 'https://thomas-danielse.de';

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
    header('Access-Control-Allow-Headers: content-type');
}

function json_response($ok, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(['ok' => $ok]);
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'OPTIONS':
        send_cors_headers($allowedOrigin);
        http_response_code(204);
        exit;

    case 'POST':
        send_cors_headers($allowedOrigin);

        // Honeypot: bots fill hidden "website" field — accept silently, send nothing.
        if (!empty($_POST['website'])) {
            json_response(true, 200);
        }

        $name = sanitize_header_value($_POST['name'] ?? '');
        $email = sanitize_header_value($_POST['email'] ?? '');
        $message = (string) ($_POST['message'] ?? '');

        $subject = 'Contact From ' . $name;
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'Content-Type: text/plain; charset=UTF-8';

        $ok = mail($recipient, $subject, $message, $headers);
        json_response($ok, $ok ? 200 : 500);

    default:
        header('Allow: POST, OPTIONS', true, 405);
        exit;
}
