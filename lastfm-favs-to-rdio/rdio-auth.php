<?php
require 'bootstrap.php';
require 'config.php';
require 'Rdio.php';
$rdio = new Rdio($config['rdio']);
$auth_url = $rdio->begin_authentication();
header('Location: ' . $auth_url);
exit;