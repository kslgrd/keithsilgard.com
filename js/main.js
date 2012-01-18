// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);

var Site = {
	
	/**
	 * Whether or not I want to use JS to force the page height for the fancy footer.
	 * @var bool
	 */
	should_go_fullscreen: true,
	
	/**
	 * @var bool
	 */
	display_baseline: function () {
		$('#content').addClass('baseline');
	},
	
	/**
	 * Quick method to force fullscreen for the fancy footer.
	 * 
	 * @return void
	 */
	go_fullscreen: function () {
		if ($('#content').height() < $(window).height()) {
			$('#content').css('minHeight', $(window).height());
		}
	}
};

/**
 * Check if the browser supports position fixed.
 * I don't know how well this works, it needs to be tested.
 */
Modernizr.addTest('positionfixed', function () {
    
	// hard coded check for iOS
	if(navigator.userAgent.match(/iPad|iPhone/i) !== null){
	    /*Check if device runs iOS 5 or higher*/
	    return navigator.userAgent.match(/[5-9]_[0-9]/) !== null;
	}

	var test  = document.createElement('div'),
      control = test.cloneNode(false),
         fake = false,
         root = document.body || (function () {
            fake = true;
            return document.documentElement.appendChild(document.createElement('body'));
      }());

   var oldCssText = root.style.cssText;
   root.style.cssText = 'padding:0;margin:0';
   test.style.cssText = 'position:fixed;top:42px';
   root.appendChild(test);
   root.appendChild(control);
   
   var ret = test.offsetTop !== control.offsetTop;
   
   root.removeChild(test);
   root.removeChild(control);
   root.style.cssText = oldCssText;
   
   if (fake) {
      document.documentElement.removeChild(root);
   }
   
   return ret;
});

(function($) {
	//on load:
	$(function() {
		
		// fullscreen junk!
		// this is so the site looks like it's 100% height, 
		// and the footer is a sneaky surprise:
		if (Site.should_go_fullscreen) Site.go_fullscreen();
		
	});	
	
})(jQuery);