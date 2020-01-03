<?php
$to = "test@yandex.ru";
$phone = $_POST['phone'];
$uname = $_POST['uname'];
$name = $_POST['name'];
$size = $_POST['size'];
$price = $_POST['price'];
$color = $_POST['color'];


// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$uname."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Имя телефона:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Память телефона:</strong> ".$size."</p>\r\n";
$msg .= "<p><strong>Цвет телефона:</strong> ".$color."</p>\r\n";
$msg .= "<p><strong>Цена:</strong> ".$price."</p>\r\n";
$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>