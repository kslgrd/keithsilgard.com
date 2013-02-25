<?php
require 'config.php';
$auth_url = $config['lastfm']['auth_url'] . '?api_key=' . $config['lastfm']['api_key'] . '&cb=' . $config['lastfm']['callback'];
header('Location: ' . $auth_url);
exit;