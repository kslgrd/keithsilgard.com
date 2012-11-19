$(function () {
	var browser = '';

	if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
	    browser = 'Opera';
	} else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
	    browser = 'Internet Explorer';
	} else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
	    browser = 'Netscape';
	} else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
	    browser = 'Chrome';
	} else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
	    browser = 'Safari';
	    /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
	    browserVersion = new Number(RegExp.$1);
	} else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
	    browser = 'Firefox';
	} else {
		browser = 'Unknown';
	}
	
	$('.browser-name').html(browser);
});