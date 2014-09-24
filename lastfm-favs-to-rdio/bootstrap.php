<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
define('LIBS', dirname(dirname(__FILE__)) . '/libs');
set_include_path(LIBS . PATH_SEPARATOR . get_include_path());
session_start();
require_once 'Zend/Loader/Autoloader.php';
$autoloader = Zend_Loader_Autoloader::getInstance();