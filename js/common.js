$(document).ready(function() {
	// remove placeholder after click
	$('input, textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	$('.scroll').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
		}
		return false;
	});


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});

	
	//slick carousel
	$('.rev_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.rev_next',
		prevArrow: '.rev_prev',
		dots: true,
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	$('.prod1_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.prod1_next',
		prevArrow: '.prod1_prev'
	});
	$('.prod2_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.prod2_next',
		prevArrow: '.prod2_prev'
	});
	$('.prod3_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.prod3_next',
		prevArrow: '.prod3_prev'
	});
	
	

	/*
	//video player + button
	$('#mainVideo').click(function(){
		if (this.paused) {
			this.play();
			$('#videoButton').fadeOut('fast');
		} else {
			$('#videoButton').fadeIn('fast');
			this.pause();
		}
	});
	$('#videoButton').on('click', function(event) {
		event.preventDefault();
		$('#videoButton').fadeOut('fast');
		$('#mainVideo').get(0).play();
	});
	*/

	
	//validation
		var locationURL = window.location.search;
	if ( locationURL == "/index_ua.html" ) {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть вірний номер";
		var validationEmail = "Введіть вірний E-mail";
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "От 2 до 16 букв";
		var validationPhone = "Введите корректный номер";
		var validationEmail = "Введите корректный E-mail";
	}


	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#main1Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#main2Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#prod1Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#prod2Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#prod3Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#formProd1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#formProd2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#formProd3').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#stepForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#contactForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service1Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service2Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service3Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service4Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service5Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service6Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/