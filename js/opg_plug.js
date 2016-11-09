// Horizontal Accrodion 
;
(function () {
	var triggerList = document.querySelectorAll(".team__triger");

	document.getElementById('section4').onclick = function (event) {
		event.preventDefault();
		var elem = event.target;
		if (elem.classList.contains('team__triger') == false) {
			for (var item of triggerList) {
				item.parentElement.classList.remove('team__item-open');
			}
			return;
		} else {
			if (elem.parentElement.classList.contains("team__item-open")) {
				elem.parentElement.classList.remove('team__item-open');
				return;
			}
			for (var item of triggerList) {
				item.parentElement.classList.remove('team__item-open');
			};
			elem.parentElement.classList.toggle("team__item-open");
		}
	}
}());
// Vertical Accrodion 
;
(function () {
	var triggerListAcco = document.querySelectorAll(".menu__acco-trigger_text");
	document.getElementById('section5').onclick = function (event) {

		event.preventDefault();
		var elem = event.target;
		console.log(elem);
		if (elem.classList.contains('menu__acco-trigger_text') == false) {
			for (var item of triggerListAcco) {
				item.parentElement.classList.remove('menu__item-acco_open');
				console.log(item);
			}
			return;
		} else {
			if (elem.parentElement.classList.contains("team__item-open")) {
				elem.parentElement.classList.remove('menu__item-acco_open');
				return;
			}
			for (var item of triggerListAcco) {
				item.parentElement.classList.remove('menu__item-acco_open');
			};
			elem.parentElement.classList.toggle("menu__item-acco_open");
		}
	}
}());
// Masked Input
$(function () {
	$("#phone").mask("+7(999) 999-9999");
});
// One Page Scroll
$( document ).ready(function() {
	var
		sections = $('.section'),
		display = $('.maincontent'),
		inscroll = false;
	sections.filter(':first-child').addClass('active');
	var scrollToSection = function (sectionEq) {
		var position = 0;
		if (!inscroll) {
			inscroll = true;
			position = (sections.eq(sectionEq).index() * -100) + '%';
			sections.eq(sectionEq).addClass('active')
				.siblings().removeClass('active');
			display.css({
				'transform': 'translate3d(0,' + position + ', 0)'
			});
			setTimeout(function () {
				inscroll = false;

				$('.fixed-menu__item').eq(sectionEq).addClass('active')
					.siblings().removeClass('active');
			}, 1000)
		}
	}

	// Основная Функция mousewheel
function wheel(e){
	console.log(e.detail > 0)
		e.preventDefault();
		var activeSection = sections.filter('.active'),
			screen = 0;
		if (!inscroll) {
			if (e.deltaY > 0 || e.detail > 0) { //скроллим вниз
				if (activeSection.next().length) {
					screen = activeSection.next().index();
				}
			}

			if (e.deltaY < 0 || e.detail < 0) { //спроллим вверх
				if (activeSection.prev().length) {
					screen = activeSection.prev().index()
				}
			}
			scrollToSection(screen);
		}
}

// Инициализация события mousewheel
if (window.addEventListener) // mozilla, safari, chrome
    window.addEventListener('DOMMouseScroll', wheel, false);
	
// IE, Opera.
window.onmousewheel = document.onmousewheel = wheel;
	
	

	$('.arrow__down').on('click', function (e) {
		
		e.preventDefault();
		scrollToSection(1);
	});

	$('.nav__link, .fixed-menu__link, .burger__slider-buy, .order__link')
		.on('click', function (e) {		
			e.preventDefault();
			scrollToSection(parseInt($(this).attr('href')));
		});
	// ловим скрол на яндекс карте
	window.onload = function () {
		mapScroll = document.querySelectorAll(".YMaps-tile-container img");
		$(mapScroll).on("mousewheel", function (e) {
			var activeSection = sections.filter('.active'),
				screen = 0;
			if (!inscroll) {
				if (e.originalEvent.deltaY < 0) { //спроллим вверх
					if (activeSection.prev().length) {
						screen = activeSection.prev().index();
					}
				}
				scrollToSection(screen);
			}
		})
	};

	// управление стрелками клавиатуры
	$(window).keydown(function (event) {
		console.log(event.which)
		var activeSection = sections.filter('.active'),
			screen = 0;
		if (!inscroll) {
			if (event.which == 40) { //скроллим вниз				
				if (activeSection.next().length) {
					screen = activeSection.next().index();
					scrollToSection(screen);
				}
			} else if (event.which == 38) { //спроллим вверх				
				if (activeSection.prev().length) {
					screen = activeSection.prev().index()
					scrollToSection(screen);
				}
			}
		}
	});

	$(".order__form-tag").keydown(function (event) {
		event.stopPropagation();
	});
});
//PopUp
$(function () {
	function openPopup(popup) {
		$(popup).css({
			left: 0
		})
		$(popup).animate({
			opacity: 1
		}, 200);
	}
	function closePopup(popup) {
		$(popup).animate({
			opacity: 0
		}, 300, function () {
			$(popup).css({
				left: -10000
			})
		});
	}
	$(".review__button, .popup, .popup__close").on("click", function (event) {
		event.preventDefault();
		var $this = $(this),
			popUp = $(".popup")
		if ($this.hasClass("review__button")) {
			$(popUp).addClass("popup-active");
			openPopup(popUp);
		} else if ($this.hasClass("popup") || $this.hasClass("popup__close")) {
			$(popUp).removeClass("popup-active");
			closePopup(popUp);
		}
	})

	$(".order__form-tag").submit(function (event) {
		event.preventDefault();
		var formPopup = $(".modal__form");
		var data = $("form").serializeArray();
console.log(data);
		$.ajax({
			url: "../mail.php",
			method: "POST", //метод отправки даннных			
			data: data

		}).done(function (data) {
			console.log(data);
			$(".modal__form").addClass("modal__form-open");
			openPopup(formPopup);
		})
	});



	$(".modal__form,.modal__form-container .btn").on("click", function (event) {		
		var $this = $(this),
			formPopup = $(".modal__form");
		if ($this.hasClass("modal__form") || $this.hasClass("modal__form-close")) {
			$('.order__form-tag')[0].reset();
			$(".modal__form").removeClass("modal__form-open");
			closePopup(formPopup);
		}
	})

	$(".popup, .popup__close, .modal__form, .modal__form-container").on('mousewheel', function (e) {
		e.stopPropagation();
	})
	$(".popup__content").on('click', function (e) {
		e.stopPropagation();
	})

});
// slider
$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		direction: "horizontal",
		start: function (slider) {
			$('body').removeClass('loading');
		}
	});
});
