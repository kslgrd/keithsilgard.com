---
layout: default
title: Last.fm Loved Tracks to Rdio playlist
description: Holy heck, I can't believe you made it this far...
scripts:
- /js/projects/lastfm-favs-to-rdio.js
---
<p>Holy heck, I can't believe you made it this far! You're a super trooper. Fill out the form, click "create", and a playlist will appear in Rdio <em>like magic</em>.</p>

<br>

<form action="#" method="get" accept-charset="utf-8" class="form-horizontal" id="create-playlist">
	
	<div class="control-group">
		<label class="control-label" for="playlist">Playlist Name</label>
		<div class="controls">
			<input type="text" name="playlist" id="playlist" value="Last.fm Favs" class="span4" onmouseup="this.select()">
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label" for="description">Description</label>
		<div class="controls">
			<textarea name="description" id="description" class="span4" onmouseup="this.select()">All of my loved tracks from Last.fm</textarea>
		</div>
	</div>
	
	<div class="control-group">
		<div class="controls">
			<button type="submit" id="submit-btn" class="btn btn-primary">Create Playlist</button>
		</div>
	</div>

</form>

<div class="progress" style="display: none;">
  <div class="bar" style="width: 0%;"></div>
</div>

<ul id="feedback"></ul>

<hr id="footnotes">

<ol>
	<li>I won't do anything creepy or annoying with your Rdio or Last.fm accounts. I'll just create a playlist, then forget all about you.</li>
</ol>