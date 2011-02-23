var Site = window.Site || {};

(function($) {
	//on load:
	$(function() {
		$('button').click(function(){$(this).closest('form').submit();});
	});	
	
})(jQuery);