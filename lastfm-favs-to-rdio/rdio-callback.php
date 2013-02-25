<?php
require 'bootstrap.php';
require 'config.php';
require 'Rdio.php';
$rdio = new Rdio($config['rdio']);
$rdio->complete_authentication($_GET);
header('Location: /lastfm-favs-to-rdio/connect-lastfm.php');