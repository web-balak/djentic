<?php
    $name = $_POST["name"];
$email = $_POST["email"];
$number = $_POST["number"];
$message = $_POST["message"];

$email_from = 'gentic.shop@gmail.com';
$email_subject = 'New form submition';

$email_body = "User name: $name.\n".
                "User email: $email.\n".
                    "User number: $number.\n".
                        "User message: $message.\n";

$to = "gentic.shop@gmail.com";

$headers = "From: $email_from \r\n";
$headers .= "Reaply: $email \r\n";
      
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>
