console.clear();

$(function() {
  var menu = $(".pc_menu_wrap").offset().top;
  $(window).scroll(function() {
    var window = $(this).scrollTop();
    if(menu <= window) {
      $(".pc_menu_wrap").addClass("fixed");
    }else{
      $(".pc_menu_wrap").removeClass("fixed");
    }
  })
});

function MainBannerSwiper__init() {
    // Swiper 초기화
    const swiper = new Swiper(
        ".banner_contents .visual_banner .banner_slides .swiper",
        {
            loop: true,
            autoplay: true,
            slidesPerView: 1,
            // If we need pagination
            pagination: {
                el: ".banner_contents .swiper-container .swiper-pagination",
                clickable: true
            },
            // Navigation arrows
            navigation: {
                nextEl: ".banner_slides .swiper-btn-group .swiper-button-next",
                prevEl: ".banner_slides .swiper-btn-group .swiper-button-prev"
            }
        }
    );

    // 정지 및 시작 버튼 클릭 이벤트 처리
    $(".swiper-btn-group-2 .swiper-button-pause, .swiper-btn-group-2 .swiper-button-start")
        .off('click')
        .on('click', function () {
            if ($(this).hasClass('swiper-button-pause')) {
                swiper.autoplay.stop();
                $(".swiper-btn-group-2 .swiper-button-pause").addClass('hidden');
                $(".swiper-btn-group-2 .swiper-button-start").removeClass('hidden');
            } else {
                swiper.autoplay.start();
                $(".swiper-btn-group-2 .swiper-button-pause").removeClass('hidden');
                $(".swiper-btn-group-2 .swiper-button-start").addClass('hidden');
            }
        });
}

MainBannerSwiper__init();


function RollingBannerNoticeSwiper__init() {
	const swiper = new Swiper(".notice-banner-cont .swiper", {
		loop: true,
		autoplay: true,
		slidesPerView: 1,
		direction: "vertical",
		// Navigation arrows
		navigation: {
			nextEl: ".notice-btn-group .notice-btn__next",
			prevEl: ".notice-btn-group .notice-btn__prev"
		}
	});
}

RollingBannerNoticeSwiper__init();

function RollingBannerTicketSwiper__init() {
	const swiper = new Swiper(".culture-banner-cont .swiper", {
		loop: true,
		autoplay: true,
		slidesPerView: 1,
		direction: "vertical",
		// Navigation arrows
		navigation: {
			nextEl: ".culture-btn-group .culture-btn__next",
			prevEl: ".culture-btn-group .culture-btn__prev"
		}
	});
}

RollingBannerTicketSwiper__init();

function Dreamtap__init() {
	$(function(){
  $('.dream_tab_box > div').hide();
  $('.dream_tab_list a').click(function () {
    $('.dream_tab_box > div').hide().filter(this.hash).fadeIn();
    $('.dream_tab_list a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
  });
}

Dreamtap__init();

function TvSwiperWrapSwiper__init() {
	const swiper = new Swiper('.content_achive .spec_con .sepc_con_leftbox .swiper', {	
		loop: true,
		slidesPerView: 1,
		// If we need pagination
		pagination: {
			el: '.content_achive .swiper-container .swiper-pagination',
			type : 'fraction'
		},

		// Navigation arrows
		navigation: {
			nextEl: '.spec_con .tv_swiper_wrap .swiper-button-next',
			prevEl: '.spec_con .tv_swiper_wrap .swiper-button-prev',
		},
	});
		
	$(".tv_swiper_wrap .swiper-button-pause, .tv_swiper_wrap .swiper-button-start")
        .off('click')
        .on('click', function () {
            if ($(this).hasClass('swiper-button-pause')) {
                swiper.autoplay.stop();
                $(".tv_swiper_wrap .swiper-button-pause").addClass('hidden');
                $(".tv_swiper_wrap .swiper-button-start").removeClass('hidden');
            } else {
                swiper.autoplay.start();
                $(".tv_swiper_wrap .swiper-button-pause").removeClass('hidden');
                $(".tv_swiper_wrap .swiper-button-start").addClass('hidden');
            }
        });

}

TvSwiperWrapSwiper__init();

function SNSwiperWrapSwiper__init() {
	const swiper = new Swiper(".content_sns .sns_slide .swiper", {
		loop: false,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: ".content_sns .sns_slide .swiper-pagination",
			type: "fraction"
		},

		// Navigation arrows
		navigation: {
			nextEl: ".content_sns .sns_slide .swiper-button-next",
			prevEl: ".content_sns .sns_slide .swiper-button-prev"
		},

		scrollbar: {
			el: ".swiper-scrollbar"
		}
	});
}

SNSwiperWrapSwiper__init();

function EventLeftBnr__init() {
	const swiper = new Swiper(".content_event .bnr_event_slide .left_bnr", {
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		pagination: {
			el: ".content_event .left_bnr .swiper-pagination",
			clickable: true
		}
	});
	$(".left_bnr .swiper-button-pause, .left_bnr .swiper-button-start")
		.off("click")
		.on("click", function () {
			if ($(this).hasClass("swiper-button-pause")) {
				swiper.autoplay.stop();
				$(".left_bnr .swiper-button-pause").addClass("hidden");
				$(".left_bnr .swiper-button-start").removeClass("hidden");
			} else {
				swiper.autoplay.start();
				$(".left_bnr .swiper-button-pause").removeClass("hidden");
				$(".left_bnr .swiper-button-start").addClass("hidden");
			}
		});
}

EventLeftBnr__init();

function EventRightBnr__init() {
	const swiper = new Swiper(".content_event .bnr_event_slide .right_bnr", {
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		// If we need pagination
		pagination: {
			el: ".content_event .right_bnr .swiper-pagination",
			clickable: true
		}
	});
	$(".right_bnr .swiper-button-pause, .right_bnr .swiper-button-start")
		.off("click")
		.on("click", function () {
			if ($(this).hasClass("swiper-button-pause")) {
				swiper.autoplay.stop();
				$(".right_bnr .swiper-button-pause").addClass("hidden");
				$(".right_bnr .swiper-button-start").removeClass("hidden");
			} else {
				swiper.autoplay.start();
				$(".right_bnr .swiper-button-pause").removeClass("hidden");
				$(".right_bnr .swiper-button-start").addClass("hidden");
			}
		});
}

EventRightBnr__init();