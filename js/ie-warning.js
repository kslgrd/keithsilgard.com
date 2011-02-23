$(document).ready(function() {
	//have to put this on click because IE sucks... should be on change ;D
	$('#i-know, label[for=i-know]').click(function() {
		$.get('/?hideIeWarning=1', function (data) {
			//alert(data);
			$('#ie-warning').slideUp('slow');
		});
	});
});