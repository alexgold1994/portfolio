$(document).ready(function() {
	
	function heightDetect() {
		$(".main__head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$(".toggle_mnu").click(function () {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function () {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
});

$(window).on("load", function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".top_text h1").animated("fadeInDown");
	$(".top_text p").animated("fadeInUp");
	 
}); 