
<?php

$to  = 'admin@master-css.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = '
	<div style="width:640px;height:360px; background: #f9b43b; background-image: url(http://fmakareev-resume.ru/assets/mr-burger/email/BG__section-2.png); background-repeat: no-repeat;padding:20px">
		<div style="width:640px;height:360px;background: #fff;;color: #2f3234;">
			<div style="float:left;height:100px;padding:0 15px;width:610px;margin-top: 10px;text-aline:center;font-size:40px;font-weight:bold;">
				<div style="width:33%;height:100px;float:left">
					<img src="http://fmakareev-resume.ru/assets/mr-burger/email/logo.png" alt="">
				</div>
				<div style="width:33%;height:100px;float:left">
					<img src="http://fmakareev-resume.ru/assets/mr-burger/email/title.png" alt="">
				</div>
				<div style="width:33%;height:100px;float:left"></div>
			</div>
			
			<div style="float:left; width:290px;height: 125px; padding:0 15px">
				<div style="float:left;margin-bottom: 10px;">
					<div style="float:left;">
						<div style="width:130px;height:25px;line-height: 25px;">Имя</div>
						<div style="width:125px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['fio'].' </div>
					</div>

					<div style="float:left;margin-left: 26px;">
						<div style="width:130px;height:25px;line-height: 25px;">Телефон</div>
						<div style="width:125px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['phone'].' </div>
					</div>
				</div>
				<div style="float:left;">
					<div>
						<div style="width:290px;height:25px;line-height: 25px;">Улица</div>
						<div style="width:285px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['address_street'].' </div>
					</div>
				</div>
			</div>
			<div style="float:left;width:290px;height:125px;padding:0 15px">
				<div style="float:left;">
					<div style="width:290px;height:25px;line-height: 25px;">Комментарий</div>
					<div style="width:272px;min-height:78px;border: 1px solid black;border-radius: 3px;padding:5px;"> '.$_POST['comment'].' </div>  
				</div>
			</div>
			<div style="float:left;height:60px;padding:0 15px;width:610px;margin-top: 10px;">
				<div style="float:left;width:105px;height:55px;">
					<div style="width:105px;height:25px;line-height: 25px;">Дом</div>
					<div style="width:100px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['house_number'].' </div>
				</div>
				<div style="float:left;width:105px;height:55px;margin-left:20px;">
					<div style="width:105px;height:25px;line-height: 25px;">Корпус</div>
					<div style="width:100px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['housing'].' </div>
				</div>
				<div style="float:left;width:105px;height:55px;margin-left:20px;">
					<div style="width:105px;height:25px;line-height: 25px;">Квартира</div>
					<div style="width:100px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['apartment_number'].' </div>
				</div>
				<div style="float:left;width:105px;height:55px;margin-left:20px;">
					<div style="width:105px;height:25px;line-height: 25px;">Этаж</div>
					<div style="width:100px;height:25px; border: 1px solid black;border-radius: 3px;line-height: 25px;padding-left:5px;"> '.$_POST['floor'].' </div>
				</div>
			</div>
		</div>
	</div>
'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 

// Отправляем
mail($to, $subject, $message, $headers);
?>
