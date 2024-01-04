<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST["userName"];
    $userMail = $_POST["userMail"];
    $userMessage = $_POST["userMessage"];

    $to = "starshova1309@gmail.com";

    $subject = "Нова заявка з сайту";

    $message = "Ім'я: $userName\n";
    $message .= "Пошта: $userMail\n";
    $message .= "Повідомлення: $userMessage\n";

    $headers = "From: $userMail\r\n";
    $headers .= "Reply-To: $userMail\r\n";

    mail($to, $subject, $message, $headers);
}
?>
