<?php
// Запускаем работу с сессиями
session_start();
$_SESSION[]

if (!empty($_POST['name'])) {
  $_SESSION['name'] = $_POST['name'];
}
echo json_encode($_SESSION);
?>