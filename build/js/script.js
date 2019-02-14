$(document).ready(function() {
	
	if ($(this).width() < 1000) {
		$('.navBtn').show()
		$('.header').hide()
	} else {
		$('.navBtn').hide()
		$('.header').show()
	}

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

	$('.navBtn').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('navBtn--active');

		if ($(document).width() < 600) {
			$('.nav').toggleClass('nav--active');
			$('.darkening').toggleClass('darkening--active');
		} 
		if ($(document).width() >= 600) {
			$('.header').slideToggle(400, function() {
				if ($(this).is(':visible')) {
					$(this).css('display', 'flex');
				}
			});
		}

	});

})