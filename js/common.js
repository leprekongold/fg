$(window).scroll(function() {

	var st = $(this).scrollTop();

	$(".main").css({
		"transform" :"translate( 0%, " + st/8 + "%"
	}); 

});