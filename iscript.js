$(function() {

	"use strict";

	$(".section-faq .questions .active .answer").slideDown();

	$(".section-faq .questions .single-question > div").on("click", function() {
		$(".section-faq .questions .single-question .answer").slideUp();
		if($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
		}
		else {
			$(".section-faq .questions .single-question").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next(".answer").slideDown();
		}
	});

});