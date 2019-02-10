$(document).ready(function() {
	
	$('.next').click(function(e) {
		e.preventDefault();
		var	currentImage = $('.slide.curry');
		var	currentImageIndex = $('.slide.curry').index();
		var	nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.slide').eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.slide:last').index()+1)){
			$('.slide').eq(0).fadeIn(1000);
			$('.slide').eq(0).addClass('curry');
			$('.slide.curry').css('display','flex');
		} else {
			nextImage.fadeIn(1000);
			nextImage.addClass('curry');
			$('.slide.curry').css('display','flex');
		}
	})

	$('.prev').click(function (e) {
		e.preventDefault();
		var	currentImage = $('.slide.curry');
		var	currentImageIndex = $('.slide.curry').index();
		var	prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.slide').eq(prevImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		prevImage.fadeIn(1000);
		prevImage.addClass('curry');
		$('.slide.curry').css('display','flex')
	})

})