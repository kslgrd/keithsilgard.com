$(function () {
	var $figures = $('figure');
	
	$figures.find('img + img').hide();
	
	$figures.find('img').css('cursor', 'pointer').click(function () {
		$(this).hide().siblings('img').show();
	});
});