var Site = {
	
	/**
	 * Whether or not I want to use JS to force the page height for the fancy footer.
	 * @var bool
	 */
	should_go_fullscreen: true,
	
	/**
	 * Quick method to force fullscreen for the fancy footer.
	 * 
	 * @return void
	 */
	go_fullscreen: function () {
		if ($('#content').height() < $(window).height()) {
			$('#content').height($(window).height());
		}
	}
};

(function($) {
	//on load:
	$(function() {
		var $q = $('#footer-search #q');
		
		// if they hit back, clear the site specific junk from the form:
		$q.val($q.val().replace('site:keithsilgard.com ', ''));
		
		// hack to make Google search work now that Google is retarded:
		$('#footer-search form').submit(function () {
			var $this = $(this),
				query = 'site:keithsilgard.com ' + $q.val();
			// do this just in case the browser doesn't support Google's
			// weirdo AJAX junk, or they change back to something sane:
			$q.val(query);
			// they use the hash instead of a query string now. Weirdos. 
			$this.attr('action', $this.attr('action') + '#q=' + query);
		});
		
		// fullscreen junk!
		// this is so the site looks like it's 100% height, and the footer 
		// is a sneaky surprise:
		if (Site.should_go_fullscreen) Site.go_fullscreen();
		
	});	
	
})(jQuery);