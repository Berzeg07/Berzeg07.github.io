<?php
$to = "powerclass17@gmail.com";
$phone = $_POST['phone'];
$uname = $_POST['uname'];



$checkbox_1 = $_POST['checkbox'];
$checkbox_2 = $_POST['checkbox2'];

$kkalklient = $_POST['kkalklient'];
$tarif = $_POST['tarif'];
$food = $_POST['food'];
$days = $_POST['days'];
$tarif_price = $_POST['tarif_price'];
$tarif_calory = $_POST['tarif_kalory'];

$how_much = $_POST['how_much'];
$how_much_day = $_POST['how_much_day'];
$daytest = $_POST['daytest'];

$days3 = $_POST['js3days'];
$days5 = $_POST['js5days'];


$daydostavki = $_POST['daydostavki'];
$timedostavki = $_POST['timedostavki'];

$city = $_POST['city'];
$ylica = $_POST['ylica'];
$house = $_POST['house'];
$podezd = $_POST['podezd'];
$domofon = $_POST['domofon'];
$etaj = $_POST['etaj'];
$numberkv = $_POST['numberkv'];
$what_day = $_POST['whatday'];
$timepackage = $_POST['timepackage'];

$celjizni = $_POST['cel'];


$source = $_POST['source'];
$term = $_POST['term'];

// Формирование заголовка письма
$subject  = $_POST['theme'];
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Достигнута цель:</h2>".$subject."</p>\r\n";;

if (!empty($phone)){
	$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
}
if (!empty($uname)){
	$msg .= "<p><strong>Имя:</strong> ".$uname."</p>\r\n";
}


if (!empty($checkbox_1)){
	// $msg .= "<p><strong>Выбрана радио кнопка:</strong> ".$checkbox_1."</p>\r\n";
}
if (!empty($checkbox_2)){
	$msg .= "<p><strong>Отмечен чекбокс:</strong> ".$checkbox_2."</p>\r\n";
}

if (!empty($what_day)){
	$msg .= "<p><strong>День первой доставки:</strong> ".$what_day."</p>\r\n";
}
if (!empty($timepackage)){
	$msg .= "<p><strong>Время первой доставки:</strong> ".$timepackage."</p>\r\n";
}
if (!empty($checkbox_1)){
	$msg .= "<p><strong>Отмечен чекбокс:</strong> ".$checkbox_1."</p>\r\n";
}
if (!empty($daytest)){
	$msg .= "<p><strong>Пробный день:</strong> ".$daytest."</p>\r\n";
}

if (!empty($days3)){
	$msg .= "<p><strong>Количество приемов:</strong> ".$days3."</p>\r\n";
}
if (!empty($days5)){
	$msg .= "<p><strong>Количество приемов:</strong> ".$days5."</p>\r\n";
}




if (!empty($kkalklient)){
	$msg .= "<p><strong>Каллории клиента:</strong> ".$kkalklient."</p>\r\n";
}
if (!empty($tarif)){
	$msg .= "<p><strong>Тариф:</strong> ".$tarif."</p>\r\n";
}
if (!empty($tarif_price)){
	$msg .= "<p><strong>Стоимость:</strong> ".$tarif_price."</p>\r\n";
}
if (!empty($tarif_calory)){
	$msg .= "<p><strong>Кол-во калорий в выбранном тарифе:</strong> ".$tarif_calory."</p>\r\n";
}
if (!empty($how_much)){
	$msg .= "<p><strong>Кол-во приемов пищи:</strong> ".$how_much."</p>\r\n";
}
if (!empty($how_much_day)){
	$msg .= "<p><strong>Кол-во дней приема:</strong> ".$how_much_day."</p>\r\n";
}
if (!empty($food)){
	$msg .= "<p><strong>Еды в день:</strong> ".$food."</p>\r\n";
}
if (!empty($days)){
	$msg .= "<p><strong>Дней в неделю:</strong> ".$days."</p>\r\n";
}


if (!empty($celjizni)){
	$msg .= "<p><strong>Выбранная цель:</strong> ".$celjizni."</p>\r\n";
}
if (!empty($daydostavki)){
	$msg .= "<p><strong>День доставки:</strong> ".$daydostavki."</p>\r\n";
}
if (!empty($timedostavki)){
	$msg .= "<p><strong>Время доставки:</strong> ".$timedostavki."</p>\r\n";
}



if (!empty($city)){
	$msg .= "<p><strong>Город:</strong> ".$city."</p>\r\n";
}
if (!empty($ylica)){
	$msg .= "<p><strong>Улица:</strong> ".$ylica."</p>\r\n";
}
if (!empty($house)){
	$msg .= "<p><strong>Дом:</strong> ".$house."</p>\r\n";
}
if (!empty($podezd)){
	$msg .= "<p><strong>Подъезд:</strong> ".$podezd."</p>\r\n";
}
if (!empty($domofon)){
	$msg .= "<p><strong>Домофон:</strong> ".$domofon."</p>\r\n";
}
if (!empty($etaj)){
	$msg .= "<p><strong>Этаж:</strong> ".$etaj."</p>\r\n";
}
if (!empty($numberkv)){
	$msg .= "<p><strong>Номер квартиры/офиса:</strong> ".$numberkv."</p>\r\n";
}


if (!empty($source)){
	$msg .= "<p><strong>Источник:</strong> ".$source."</p>\r\n";
}
if (!empty($term)){
	$msg .= "<p><strong>Ключевое слово\фраза:</strong> ".$term."</p>\r\n";
}




$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>