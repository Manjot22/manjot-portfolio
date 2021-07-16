<?php
if(isset($_POST["name"]) && !empty($_POST["email"])){
$toEmail = "msmanjotsingh99@gmail.com";
$mailHeaders = "From: " . $_POST["name"] . "". $_POST["email"] .">\r\n";
if(mail($toEmail, $_POST["message"], $mailHeaders)){
echo "<p class='success'>New Contact Mail Sent.</p>";
}else{echo "<p class='Error'>Problem in Sending Mail.</p>";}
}

?>