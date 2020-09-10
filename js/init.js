(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $("section");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true) && !el.hasClass('already-visible')) {
      el.addClass("come-in");
    } 
  });
  
});
$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});
$(document).ready(function(){
	$('.loader').fadeOut("slow");
	setTimeout(function(){$('#wrapper').removeClass('hidden')}, 1000);
	$('[data-toggle="tooltip"]').tooltip();
	$('.navbar-toggler').on('click', function(){
		$('.animated-icon3').toggleClass('open');
	});
	$('#schools').carousel({
		interval: 3000
	});
	
	$('#subscribe_newsletter > .subscribe').click(function(){
		var email = $('#email_newsletter').val();
		if(email.trim()==''){
			$('#subscribe_newsletter').effect('shake');
		}
	});
});