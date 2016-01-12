$(document).on('ready', function(){
	
	// hover effects
	var tag;
	$('.elec').mouseover(function(){
		tag = '.elec .section-header';
		$(tag).addBackground();
		$(this).mouseout(function(){
			$(tag).removeBackground();
		});
	});

	$('.mech').mouseover(function(){
		tag = '.mech .section-header';
		$(tag).addBackground();
		$(this).mouseout(function(){
			$(tag).removeBackground();
		});
	});

	$('.soft').mouseover(function(){
		tag = '.soft .section-header';
		$(tag).addBackground();
		$(this).mouseout(function(){
			$(tag).removeBackground();
		});
	});

	//TODO: implement later
	// For image galleries
	// var driveTrain = new Array(3);
	// 	driveTrain[0] = '';
	// 	driveTrain[1] = '';
	// 	driveTrain[2] = '';

	// onclick effect
	var clicks = 0;
	$('.elec').click(function(target){
		clicks = $(this).clickIcon();
	});

	$('.mech').click(function(target){
		clicks = $(this).clickIcon();
	});

	$('.soft').click(function(target){
		clicks = $(this).clickIcon();
	});
	/* FUNCTIONS */

	// onlcick effects for the icon
	var clickedItem;
	var prevItem;
	(function($) {
	    $.fn.clickIcon = function() {
	        return this.each(function() {
	        	if(this.className.indexOf("elec") > -1) {
	        		clickedItem = '.elec-content';
	        		tag = '.elec .section-header'
	        	}
	        	if(this.className.indexOf("mech") > -1) {
	        		clickedItem = '.mech-content';
	        		tag = '.mech .section-header';
	        	} 
	        	if(this.className.indexOf("soft") > -1) {
	        		clickedItem = '.soft-content';
	        		tag = '.soft .section-header';
	        	}
	            if( clicks == 0) {
					$(clickedItem).slideToggle(1000,'linear');
					clicks++;
				} else {
					if(prevItem != clickedItem) {
						$(prevItem).hide(0,'linear');
					}
					$(clickedItem).slideToggle(1000,'linear');
					clicks=0;
				}
				prevItem = clickedItem;
				$('html,body').animate({scrollTop: $(this).offset().top - 25 }, 1500)
	        });
	    };
	}(jQuery));

	// changes text to white and adds a black box around the object
	(function($) {
	    $.fn.addBackground = function() {
	        return this.each(function() {
	            $(this).css("color","white")
				$(this).css("background-color","black");
				$(this).css("border-radius","10px");
	        });
	    };
	}(jQuery));

	// removes the changes from addBackground
	(function($) {
	    $.fn.removeBackground = function() {
	        return this.each(function() {
	            $(this).css("color","black")
				$(this).css("background-color","");
				$(this).css("border-radius","");
	        });
	    };
	}(jQuery));

});