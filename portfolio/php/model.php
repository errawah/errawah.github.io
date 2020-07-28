<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Model extends ParentModel {
	private $obj_control;
	private $obj_database, $obj_error;
	private $email, $password;
	private $error, $error_code, $obj_filter;
	
	private $mail;

	public function __construct() {
	}

	public function sendEmail($to, $subject, $msg){
		// Import PHPMailer classes into the global namespace
		// These must be at the top of your script, not inside a function

		require 'PHPMailer/src/Exception.php';
		require 'PHPMailer/src/PHPMailer.php';
		require 'PHPMailer/src/SMTP.php';

		//Load composer's autoloader
		require '../vendor/autoload.php';

		$mail = new PHPMailer(true); // Passing `true` enables exceptions
		try {
			//Server settings
			$mail->SMTPOptions = array(
				'ssl' => array(
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			));

			// reading confidentianl credentials
			$confidential_contents = json_decode($this->readConfidential(), true);
			$username = $confidential_contents["hotmail"]["username"];
			$password = $confidential_contents["hotmail"]["password"];

			// $mail->SMTPDebug = 4;   // Enable verbose debug output
			$mail->SMTPDebug = SMTP::DEBUG_SERVER;
			$mail->isSMTP(); // Set mailer to use SMTP
			$mail->Host = 'smtp.live.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true; // Enable SMTP authentication
			$mail->Username = $username; // SMTP username
			$mail->Password = $password; // SMTP password
			// $mail->SMTPSecure = 'TLS/SSL'; // Enable TLS encryption, `ssl` also accepted
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
			$mail->Port = 587; // TCP port to connect to

			//Recipients
			$mail->setFrom('errawah@hotmail.com', 'Mailer');
			$mail->addAddress($to, 'Keshar Limbu');     // Add a recipient
			//$mail->addAddress('kasislimbu@gmail.com');               // Name is optional
			$mail->addReplyTo('errawah@hotmail.com', 'Information');
			//$mail->addCC('cc@example.com');
			//$mail->addBCC('bcc@example.com');

			//Attachments
			//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

			//Content
			// $mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = $subject;
			$mail->Body    = $msg;
			$mail->AltBody = $msg; // 'This is the body in plain text for non-HTML mail clients';

			$mail->send();
			echo 'Message has been sent';
		}catch (Exception $e) {
			echo 'Message could not be sent.<br>';
			echo 'Mailer Error: ' . $mail->ErrorInfo;
		}
	}
}
?>