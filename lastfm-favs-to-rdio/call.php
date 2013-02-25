<?php
require 'bootstrap.php';
require 'config.php';
require 'Rdio.php';
require 'lastfmapi/lastfmapi.php';

header('Content-type: application/json');

if (! isset($_GET['method']))
	die(json_encode(array('status' => 'error', 'message' => 'define a method, ya dingus')));

if (! function_exists($_GET['method']))
	die(json_encode(array('status' => 'error', 'message' => 'unknown method')));

// the world's laziest controller:
$data = call_user_func($_GET['method']);
die(json_encode($data));

/**
 * Get the Rdio API.
 *
 * @return Rdio
 */
function _get_rdio()
{
	global $config;
	return new Rdio($config['rdio']);
}

/**
 * Create the playlist with all the found tracks.
 *
 * @return array
 */
function create_playlist()
{
	$rdio = _get_rdio();
	return $rdio->createPlaylist(array(
		'name' => $_POST['name'], 
		'description' => $_POST['description'],
		'tracks' => implode(',', $_POST['tracks'])
	));
}

/**
 * Get all of the Last.fm favs
 *
 * @return array
 */
function lastfm_favs()
{
	global $config;
	
	$vars = array(
		'apiKey' => $config['lastfm']['api_key'],
		'secret' => $config['lastfm']['secret'],
		'username' => $_SESSION['lastfm_auth']['username'],
		'sessionKey' => $_SESSION['lastfm_auth']['sessionKey'],
		'subscriber' => $_SESSION['lastfm_auth']['subscriber']
	);
	$auth = new lastfmApiAuth('setsession', $vars);
	$api = new lastfmApi;
	$user = $api->getPackage($auth, 'user');
	$limit = isset($_GET['limit']) ? (int) $_GET['limit'] : 250;
	$tracks = $user->getLovedTracks(array('user' => $vars['username'], 'limit' => $limit));
	$processed = array();
	foreach ($tracks as $track) {
		$processed[] = $track['name'] . ' ' . $track['artist']['name'];
	}
	return $processed;
}

/**
 * Try to find a track on Rdio.
 *
 * @return array
 */
function search_for_track()
{
	$rdio = _get_rdio();
	return $rdio->search(array(
		'query' => $_GET['track'], 
		'types' => 'Track', 
		'count' => 1
	));
}
	