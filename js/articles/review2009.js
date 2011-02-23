$(document).ready(function() {
	
	$('#top-artists').hide();
	
	$('#show-songs').click(function(e) {
		$('#top-artists').hide();
		$('#top-songs').show();
		$(this).removeClass('inactive');
		$('#show-artists').addClass('inactive');
		animateMeter();
		e.preventDefault();
	});
	
	$('#show-artists').click(function(e) {
		$('#top-songs').hide();
		$('#top-artists').show();
		$(this).removeClass('inactive');
		$('#show-songs').addClass('inactive');
		animateMeter();
		e.preventDefault();
	});
	
	function animateMeter() {
		$('.list meter').each(function() {
			$(this).css('width', '0px');
			var targetWidth = $(this).attr('value') * 100 + '%';
			$(this).animate({width: targetWidth}, 1500);
		});	
	}
	animateMeter();
	
	$('#top-songs li').click(function(){
		var target = $(this).attr('rel');
		$('#top-song-meta').children().addClass('hidden');
		$('#' + target).removeClass('hidden');
	});
	
	
	$('.gallery').each(function () {
		$(this).find('li a').lightBox({
			imageLoading: '/js/jquery/plugins/lightbox-0/images/lightbox-ico-loading.gif',
			imageBtnClose: '/js/jquery/plugins/lightbox-0/images/lightbox-btn-close.gif',
			imageBtnPrev: '/js/jquery/plugins/lightbox-0/images/lightbox-btn-prev.gif',
			imageBtnNext: '/js/jquery/plugins/lightbox-0/images/lightbox-btn-next.gif'
		});
	}); 
	
	//hide vacations:
	$('#destination-houston, #destination-vancouver, #destination-vegas, #destination-vancouver-2, #destination-vegas-2, #destination-varadero, #destination-houston-2').hide();
	//show active: 
	$('#' + $('#travel .tab-list a.active').attr('rel')).show();
	
	$('#travel .tab-list a').click(function() {
		var rel = $(this).attr('rel');
		if ($(this).hasClass('active')) {
			return false;
		}
		var current = $('#travel .tab-list a.active');
		current.removeClass('active');
		$('#' + current.attr('rel')).hide();
		$(this).addClass('active');
		$('#' + $(this).attr('rel')).show();
		return false;
	});
});