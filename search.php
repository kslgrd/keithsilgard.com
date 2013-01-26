<?php
// why the hell does Google use #q instead of ?q now?:
$url = 'https://www.google.ca/search?q=site:keithsilgard.com ' . $_GET['q'];
header('HTTP/1.1 301 Moved Permanently'); 
header('location:' . $url);