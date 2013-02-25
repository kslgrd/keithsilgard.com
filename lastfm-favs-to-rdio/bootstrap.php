<?php
define('LIBS', dirname(dirname(__FILE__)) . '/libs');
set_include_path(LIBS . PATH_SEPARATOR . get_include_path());

session_start();

require_once 'Zend/Loader/Autoloader.php';
$autoloader = Zend_Loader_Autoloader::getInstance();