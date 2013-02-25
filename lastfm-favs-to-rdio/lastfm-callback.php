<?php
require 'bootstrap.php';
require 'config.php';
require 'lastfmapi/lastfmapi.php';
// I am not a huge fan of this API, but I'm also not a huge fan of writing my own, SO QUIT COMPLAINING:
$vars = array(
	'apiKey' => $config['lastfm']['api_key'],
	'secret' => $config['lastfm']['secret'],
	'token' => $_GET['token']
);
$auth = new lastfmApiAuth('getsession', $vars);
$_SESSION['lastfm_auth'] = array(
	'username' => $auth->username,
	'sessionKey' => $auth->sessionKey,
	'subscriber' => $auth->subscriber
);
header('Location: /lastfm-favs-to-rdio/playlist.php');