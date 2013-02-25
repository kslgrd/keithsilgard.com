var api,
	actions,
	favs,
	query,
	import_total = 0,
	sleep = 1,
	tracks = [],
	playlist_form,
	feedback,
	progress_bar,
	submit_btn;
	
api = {
	create_playlist: function (name, description, tracks) {
		$.post(
			'/lastfm-favs-to-rdio/call.php?method=create_playlist',
			{
				'name': name,
				'description': description,
				'tracks': tracks
			},
			function (data) {
				if (data.status == 'ok') {
					actions.add_feedback('Your playlist was created! <a href="' + data.result.shortUrl + '">Go rock the heck out!</a>.');
				}
			}
		);
	},
	
	lastfm_favs: function () {
		$.getJSON('/lastfm-favs-to-rdio/call.php?method=lastfm_favs&limit=250', function (data) {
			actions.favs_loaded(data);
		});
	},
	
	search_for_track: function (query) {
		log("Searching for: " + query);
		$.getJSON('/lastfm-favs-to-rdio/call.php?method=search_for_track&track=' + query, function (data) {
			actions.search_complete(data);
		});
	}
};

actions = {
	init: function () {
		api.lastfm_favs();
	},
	
	favs_loaded: function (data) {
		favs = data;
		import_total = favs.length;
		actions.add_feedback(import_total + ' Last.fm loved tracks found!');
		actions.search_tracks();
	},
	
	search_tracks: function () {
		query = favs.shift();
		api.search_for_track(query);
	},
	
	search_complete: function (data) {
		
		if (data.status != 'ok') {
			// shit, probably hit an API limit
			setTimeout(function () {
				api.search_for_track(query);
			}, sleep * 1000);
			
			// wait a little longer to try again after each error:
			sleep *= 2;
			
		} else {
			sleep = 1;
		}
		
		if (data.result.results.length == 0) {
			actions.add_feedback("Unable to find " + query);
		} else {
			var track = data.result.results[0];
			tracks.push(track.key);
			actions.add_feedback('<a href="' + track.shortUrl + '">' + track.name + '</a> was found.');
		}

		actions.update_progress();

		if (favs.length == 0) {
			api.create_playlist(
				playlist_form.find('#playlist').val(),
				playlist_form.find('#description').val(),
				tracks
			);
			submit_btn.removeAttr('disabled').addClass('btn-success').html('Done!');
		} else {
			actions.search_tracks();
		}
	},
	
	update_progress: function () {
		var percentage = ((import_total - favs.length) / import_total * 100).toFixed();
		progress_bar.css('width', percentage + '%');
	},
	
	add_feedback: function (message) {
		feedback.append('<li>' + message + '</li>');
	}
};

$(function () {
	playlist_form = $('#create-playlist');
	feedback = $('#feedback');
	submit_btn = $('#submit-btn');
	progress_bar = $('.progress .bar');
	
	playlist_form.submit(function (e) {
		e.preventDefault();
		submit_btn.attr('disabled', true).removeClass('btn-primary').html("Workin' on it...");
		$('.progress').fadeIn('fast');
		actions.init();
	});

});