<?php 
require_once 'Zend/Oauth.php';
/**
 * This borrows super heavily from https://github.com/rdio/rdio-php, so I'll just give it the same dang license.
 * I didn't want to dick around installing PECL, so I swapped in Zend's OAuth junk.
 *
 * Copyright (c) 2013 Keith Silgard
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
class Rdio
{
	const API_ENDPOINT = 'http://api.rdio.com/1/';
	
	protected $params;
	
	/**
	 * @param array $params An associative array with the following keys:
	 * 		- string callbackUrl
     * 		- string siteUrl
     * 		- string consumerKey
     * 		- string consumerSecret
	 */
	public function __construct($params)
	{
		$this->params = $params;
	}
	
	/**
	 * Get the OAuth object.
	 *
	 * @return Zend_OAuth_Consumer
	 */
	protected function _get_oath() 
	{
		$oauth = new Zend_Oauth_Consumer($this->params);
		return $oauth;
	}
	
	/**
	 * Kill the Rdio session.
	 *
	 * @return Rdio
	 */
	public function log_out() {
		unset($_SESSION['rdio_access_token']);
		return $this;
	}
	
	/**
	 * Is there an active access token?
	 *
	 * @return bool
	 */
	public function logged_in() {
		return isset($_SESSION['rdio_access_token']);
	}
	
	/**
	 * Make a call to the API.
	 * Any method you call against the Rdio object will be translated to an API call.
	 * $rdio->eatAPizza() would make a call to the Rdio API for the eatAPizza method.
	 * Params should be passed as an associative array:
	 * $rdio->eatAPizza(array('toppings' => 'cheese'))
	 *
	 * @param string $method 
	 * @param string $arguments 
	 * @return mixed
	 */
	public function __call($method, $arguments) {
		// build the request
		if (count($arguments) > 0) {
			$params = $arguments[0];
		} else {
			$params = array();
		}
		$params['method'] = $method;
		
		// make the request
		$token = unserialize($_SESSION['rdio_access_token']);
		$client = $token->getHttpClient($this->params);
		$client->setUri(self::API_ENDPOINT)	
			->setMethod(Zend_Http_Client::POST)
			->setHeaders(array('Content-Type' => 'application/x-www-form-urlencoded'))
			->setParameterPost($params);
		
		$response = $client->request();
		return json_decode($response->getBody(), false);    
	}
	
	/**
	 * Get the authentication URL.
	 *
	 * @return string
	 */
	public function begin_authentication() {
		// reset previous auth state
		$this->log_out();
	
		$oauth = $this->_get_oath();
		$token = $oauth->getRequestToken();
		
		// save the request token
		$_SESSION['rdio_token'] = serialize($token);
	
		parse_str($token->getResponse()->getBody(), $pieces);
			
		return $pieces['login_url'] . '?oauth_token=' . $pieces['oauth_token'];
	}
	
	/**
	 * Verify the OAuth access token.
	 *
	 * @param string $verifier 
	 * @return void
	 * @author Keith Silgard
	 */
	public function complete_authentication($params) {
		$oauth = $this->_get_oath();
		$token = $oauth->getAccessToken($params, unserialize($_SESSION['rdio_token']));
	
		// save the access token
		$_SESSION['rdio_access_token'] = serialize($token);
		unset($_SESSION['rdio_token']);
		
		return $token->isValid();
	}
	
}
