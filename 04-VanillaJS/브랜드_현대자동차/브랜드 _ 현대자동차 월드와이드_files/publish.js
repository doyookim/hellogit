/*
 * publish/common.js
 * 2019.09.24  JungSujin		header, footer renewal
*/


 /*
스크립트 본창 스크롤막기
//모바일웹에서 레이어를 띄우면 본창 스크롤 안되게 하는 방법.
$("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});

//풀어줄 때
$("body").css({ overflow: '' }).unbind('touchmove');
 */

function ResponsiveImages() {
  var winW = window.innerWidth;
  if (winW > 740) {
    $("body").removeClass("mobile");
    $("body").addClass("pc");
    $("meta[name='viewport']").remove();
    $("head").append('<meta name="viewport" content="width=1240, user-scalable=yes">');
  }
  if (winW <= 740) {
    $("body").addClass("mobile");
    $("body").removeClass("pc");
    $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">');

  }
  $("div, p, img, span").each(function () {
    //bgColor, text-color, align, bgImage
    if ($(this).is("[data-bgColor]")) $(this).css("background-color", $(this).attr("data-bgColor"));
    if ($(this).is("[data-color]")) $(this).css("color", $(this).attr("data-color"));
    if ($(this).is("[data-text-align]")) $(this).css("text-align", $(this).attr("data-text-align"));

    if ($(this).is("[data-bg]") && winW > 740) {
      $(this).css({
        "background-image": "url('" + $(this).attr("data-bg") + "')"
      });
    } else if ($(this).is("[data-mobile-bg]") && winW < 740) {
      $(this).css({
        "background-image": "url('" + $(this).attr("data-mobile-bg") + "')"
      });
    }

  });
  $("img").each(function () {
    if (winW > 740 && $(this).attr("data-media-pc") != $(this).attr("src")) {
      $(this).attr("src", $(this).attr("data-media-pc"));
    }
    if (winW <= 740 && $(this).attr("data-media-mobile") != $(this).attr("src")) {
      $(this).attr("src", $(this).attr("data-media-mobile"));
    }
  });
  if (winW > 740 && $("body").hasClass("mobile")) {
    $("body").removeClass("mobile");
    $("body").addClass("pc");
  }
  if (winW <= 740 && $("body").hasClass("pc")) {
    $("body").addClass("mobile");
    $("body").removeClass("pc");

  }
  // $(".gnbWrap .scrollBox").css("height", $(window).height() - 55);
  // $(".gnbWrap .subMenu").css("max-height", $(window).height() - 55);

  // s: 191122 add : component option
  $("[data-style-pc]").each(function(){
    if(winW > 740 && $(this).attr("data-style-pc") != $(this).attr("style") ){
      $(this).attr("style", $(this).attr("data-style-pc"));
    }
    if(winW <= 740 && $(this).attr("data-style-mobile") != $(this).attr("style") ){
      $(this).attr("style", $(this).attr("data-style-mobile"));
    }
  });
// e: 191122 add : component option
}

function _isMobile() {
  // if we want a more complete list use this: http://detectmobilebrowsers.com/
  // str.test() is more efficent than str.match()
  // remember str.test is case sensitive
  var isMobile = (/iphone|ipod|android|blackberry|fennec/).test(navigator.userAgent.toLowerCase());
  return isMobile;
}
var oldTop;
function gnb(dep1, dep2, dep3, dep4, dep5) {
  var $dim = $(".gnbDim");
  var $scrollBox = $(".gnbWrap .scrollBox");
  var $dep1_a = $(".gnbArea .dep1Wrap .dep1_a");

  gnbReset();
  $(".gnbSearchMobile").append($(".gnbSearchBtn").html());
  //S: 1dep menu - PC : 191017 modify
  $dep1_a.on('mouseenter', function (e) {
    if ($("body").hasClass("pc")) {

      var $gnbSubArea = $(".gnbSubArea");
      var $depTarget = $(this).closest(".dep1");
      var topBarHeight = $(".gnbWrap").height();
      $(".gnbSearchBtn, .gnbLanguageBtn").removeClass("on");
      $(".gnbWrapFull").removeClass("openSub");
      $(".gnbSearchArea, .gnbLanguageArea").hide();
      $(".gnbUtilWrap").attr("class", "gnbUtilWrap");
	  $(".dimmed").attr("class", "dimmed");//210728 add
      $(".gnbWrapFull").css({
        "overflow": "hidden"
      });
      $(".dep1_a").removeClass("on");
      $(this).addClass("on");
      $gnbSubArea.hide();
      if($(this).siblings(".gnbSubArea").length > 0){
        $depTarget.find(".gnbSubArea").show();
        $(".gnbWrapFull").addClass("openSub");
      }
      var gnbHeight = 0;
      $(this).closest(".dep1").find(".depSubWrap, .dep2Wrap").each(function () {
        if (gnbHeight < $(this).outerHeight() + topBarHeight) {
          gnbHeight = $(this).outerHeight() + topBarHeight;
        }
      });
      $(".gnbWrapFull").css("min-height", gnbHeight);
    }
  });
  $dep1_a.on('mouseout', function (e) {
    if ($("body").hasClass("pc")) {
      $(".dep1_a").removeClass("on");
    }
  });
  //E: 1dep menu - PC : 191017 modify
  //1dep menu - Mobile
  $dep1_a.on('click', function (e) {
    if ($("body").hasClass("mobile")) {
      $(this).addClass("on");
    }
  });

  $(".gnbArea .depSub .depSub_a").on('click', function (e) {
    if ($("body").hasClass("mobile") && !$(this).hasClass("dep4_a")) {
      var $depTarget = $(this).closest(".depSub");
      if ($(this).hasClass("arr")) {
        e.preventDefault();
        if (!$(this).hasClass("on")) {
          var $target = $(this).parent().parent().find("> .depSub");
          $target.find("> .depSub_a").removeClass("on");
          $target.find(".depSubWrap").stop().slideUp(300);
          $(this).addClass("on");
          $depTarget.find("> .depSubWrap").stop().slideDown(300);
        } else {
          $(this).parent().find(".depSub_a").removeClass("on");
          $(this).parent().find(".depSubWrap").stop().slideUp(300);
        }
      }
    }
  });
  $(".gnbWrapFull .btnGnbClose").on('click', function (e) {
    e.preventDefault();
    //pc type
    if ($("body").hasClass("pc")) {
      $(".gnbSubArea").hide();
      $(".gnbWrapFull").attr("class", "gnbWrapFull").removeAttr("style");
      $(".gnbLanguageBtn").removeClass("on");
      $(".gnbSearchBtn").removeClass("on");
      $(".gnbSearchArea, .gnbLanguageArea").hide();
      $(".gnbUtilWrap").attr("class", "gnbUtilWrap");
	  $(".dimmed").attr("class", "dimmed");//210728 add
      $(".dep4Wrap").hide();
      gnbReset();
    }
	// s: 210611 add
	 if ($("body").hasClass("mobile")) {
		$dim.stop().fadeOut(300);
        $(".gnbSearchMobile").removeClass("on");
        $(".gnbSearchArea").stop().slideUp(300);
    }
	// e: 210611 add
  });

  $(".depSub_a.btnBack").on('click', function(){
    $(".dep1_a").removeClass("on");
  });

  $(".btnNextShow").on('click', function(){
    $(this).parent().toggleClass("on");
     var $boxParentSib = $(this).parent().siblings(".boxToggleShow"),
        $boxSib = $(this).siblings(".boxToggleShow");
    if($boxParentSib.length > 0){
      $boxParentSib.slideToggle(300);
    }else if($boxSib.length > 0){
      $boxSib.slideToggle(300);
    }
  });
  /* [M-00134] 국가선택 레이어 노출 제거
  $(".btnGnbLanguage").on('click', function(e){
      e.preventDefault();
      $(".gnbSearchBtn").removeClass("on");
      $(".dep1_a").removeClass("on");
      gnbReset();
      $(".gnbArea").find(".depSub_a").removeClass("on");
      $(".gnbSubArea").hide();
      $(".gnbWrapFull").attr("class", "gnbWrapFull").removeAttr("style");
      if (!$(this).parent().hasClass("on")) {
          $(this).parent().addClass("on");
          setTimeout(function () {
              $(".gnbLanguageArea").show();
          }, 150)
          $(".gnbSearchArea").hide();
          $(".gnbUtilWrap").attr("class", "gnbUtilWrap language");
      } else {
          $(this).parent().removeClass("on");
          $(".gnbLanguageArea").hide();
          $(".gnbUtilWrap").attr("class", "gnbUtilWrap");
      }
  });
  */


  $(".btnGnbSearch").on('click', function (e) {
    e.preventDefault();
    //pc type
    if ($("body").hasClass("pc")) {
      $(".gnbLanguageBtn").removeClass("on");
      $(".dep1_a").removeClass("on");
      gnbReset();
      $(".gnbArea").find(".depSub_a").removeClass("on");
      $(".gnbSubArea").hide();
      $(".gnbWrapFull").attr("class", "gnbWrapFull").removeAttr("style");
	  $(".dimmed").attr("class", "dimmed").removeAttr("style");//210728 add
      if (!$(this).parent().hasClass("on")) {
        $(this).parent().addClass("on");
        setTimeout(function () {
          $(".gnbSearchArea").show();
        }, 150)
        $(".gnbLanguageArea").hide();
        $(".gnbUtilWrap").attr("class", "gnbUtilWrap search");
		$(".dimmed").attr("class", "dimmed open");//210728 add
      } else {
        $(this).parent().removeClass("on");
        $(".gnbSearchArea").hide();
        $(".gnbUtilWrap").attr("class", "gnbUtilWrap");
		$(".dimmed").attr("class", "dimmed");//210728 add
      }
    }
    if ($("body").hasClass("mobile")) {
      $(".gnbLanguageBtn").removeClass("on");
      $(".gnbGap").hide();
      $(".gnbWrapFull").attr("class", "gnbWrapFull").removeAttr("style");
      $(".btnMobileMenu.on").click();
      $(".gnbWrap .pageTitle .tit.on").click();
      if (!$(this).parent().hasClass("on")) {
        $(".btnMobileMenu.on").click();
        $dim.stop().fadeIn(300);
        $(this).parent().addClass("on");
        $(".gnbSearchArea").stop().slideDown(300);
        $(".gnbLanguageArea").hide();
        $(".gnbUtilWrap").attr("class", "gnbUtilWrap search");
      } else {
        $dim.stop().fadeOut(300);
        $(this).parent().removeClass("on");
        $(".gnbSearchArea").stop().slideUp(300);
        $(".gnbUtilWrap").attr("class", "gnbUtilWrap");
      }
    }
  });
  /*mobile Gnb*/
  $(".btnMobileMenu").on('click', function (e) {
    e.preventDefault();
    // 20180920
    gnbReset();

    var scrollTop = 0;
    $(".gnbSearchMobile.on .btnGnbSearch").click();
    $(".gnbWrap .pageTitle .tit.on").click();
    $dim.stop().fadeOut(300);
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");

      //M-00134 GNB개편 s- GNB에 없는 페이지일 경우 Find a car 탭선택되도록 수정
      $scrollBox.show();
      //M-00134 GNB개편 e
      setTimeout(function () {
        $scrollBox.css("right", 0);
      }, 10)
      $dim.stop().fadeIn(300);
    } else {
      $(this).removeClass("on");
      $scrollBox.css("right", "-100%");
      setTimeout(function () {
        $scrollBox.hide();
      }, 300)
      $dim.stop().fadeOut(300);
      $scrollBox.find(".gnbLanguageBtn").removeClass('on'); //200722 add
    }
  });
  $(".gnbDim").on('click', function (e) {
    e.preventDefault();
    $(".btnMobileMenu").click();
  });
  /* [M-00134] e: 180821 */

  // s: 200722 Language add
  $(".btnLanguage").on('click', function (e) {
    e.preventDefault();
    var this_ = $(this).parent();

    if ($('.gnbSearchBtn').hasClass('on')) {
        $('.gnbSearchBtn').removeClass('on');
        $('.gnbSearchArea').hide();
        $('.gnbUtilWrap').removeClass('search');
    }
    if ($('.gnbSubArea').show()) {
        $('.gnbSubArea').hide();
        $(".gnbWrapFull").attr("class", "gnbWrapFull").removeAttr("style");
		$(".dimmed").attr("class", "dimmed").removeAttr("style");//210728 add
    }
    if ($(this_).hasClass('on')) {
        $(this_).removeClass('on');
    } else {
        $(this_).addClass('on');
    }
  });
  // e: 200722 Language add

  //20180413 quickCountry add Start
  $(window).scroll(function () {
    var scTop = $(window).scrollTop();
    if (!$(".quickArea").hasClass("popup")) {
      if (scTop < oldTop || scTop > $(document).height() - $(window).height() - 55) {
        $(".quickArea").addClass("open");
      }
    }
    oldTop = scTop;

    if (scTop > $(document).height() - $(window).height() - $(".footerWrap").height()) {
      $('.quickCountry').css("bottom", -1 * ($(document).height() - $(window).height() - $(".footerWrap").height() - scTop)); // 20180413 add 국가 선택 플로팅 푸터 위에
      $(".btnContentTop").addClass("ab").css("top", $(document).height() - $(".footerWrap").height() - 60);
    } else {
      $('.quickCountry').css({
        'bottom': 0
      }); // 20180413 add
      $(".btnContentTop").removeClass("ab").css("top", "auto");
    }
    if (scTop == 0) {
      $('.quickCountry').hide(); // 20180416 추가
      $(".btnContentTop").hide();
      $('.quickCountry').removeClass('on'); // 20180413 국가 선택 플로팅 숨김
    } else {
      $('.quickCountry').show(); // 20180416 추가
      $(".btnContentTop").show();
    }
  });
  // 20180413 quickCountry add End

  if ($(window).scrollTop() == 0) {
    $(".btnContentTop").hide();
  } else {
    $(".btnContentTop").show();
  }
  $(".btnContentTop").bind("click", function () {
    $("body,html").animate({
      scrollTop: 0
    }, 300)
  });


  $(".footerDimBg").bind("click", function () {
    $(".quickArea .quick").removeClass("on");
    $(".quickArea .share").removeClass("on");
    $(".shareList").hide();
    $(".quickMenu").hide();
    $(".footerDimBg").fadeOut();
  });

}
function gnbReset() {
// s: 191031-v3
  var $dep1_a = $(".gnbArea .dep1Wrap .dep1_a");
  $(".depSub_a, .dep1_a").removeClass("on");
  if (dep1 != null) {
    // $(".gnbArea .dep1Wrap .dep1_a").addClass("on");
    $dep1_a.eq(dep1).addClass("now"); // on > now : 191017 modify
    $dep1_a.eq(dep1).addClass("first"); //181001_modify

    $(".gnbArea .depSubWrap").show();

    if($dep1_a.length > 0){
      setTimeout(function () {
        var left = $dep1_a.eq(dep1).position().left - 10; //181001_modify
        var width = $dep1_a.eq(dep1).width() + 20; //181001_modify
        $(".gnbGap").stop().show().css({
          "left": left,
          "width": width
        });
      }, 300);
    }
  } else {
    $(".gnbGap").hide();

  }
// e: 191031-v3

  // s:  main renewal - added 1 to the 2dep eq value according to the markup changes : 191017 modify
  if (dep2 != null) {
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .depSub_a").addClass("on");
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find("> .dep2Wrap").show();
  }
  if (dep3 != null) {
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .dep3Wrap").show();
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .dep3Wrap > .depSub").eq(dep3).find(" > .depSub_a").addClass("now"); //190620 edit - on > now로 수정. 현재 페이지 표시 분리
  }
  if (dep4 != null) {
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .dep3Wrap > .depSub").eq(dep3).find(" > .dep4Wrap").show();
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .dep3Wrap > .depSub").eq(dep3).find(" > .dep4Wrap > .depSub").eq(dep4).find(" > .depSub_a").addClass("now"); //190612 edit - on > now로 수정. 현재 페이지 표시 분리
  }
  if (dep5 != null) {
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .dep3Wrap > .depSub").eq(dep3).find(" > .dep4Wrap > .depSub").eq(dep4).find(" > .dep5Wrap").show();
    $(".gnbArea .dep1Wrap .dep1").eq(dep1).find(".dep2Wrap > .depSub").eq(dep2+1).find(" > .dep3Wrap > .depSub").eq(dep3).find(" > .dep4Wrap > .depSub").eq(dep4).find(" > .dep5Wrap > .depSub").eq(dep5).find(" > .depSub_a").addClass("on");
  }
  // e: main renewal : 191017 modify
}

function yourLocationGnb() {
  var $dim = $(".gnbWrap .scrollBox:before");
  var $scrollBox = $(".gnbWrap .scrollBox");
  $(".btnMobileMenu, .gnbDim").on('click', function (e) {
    e.preventDefault();
    var scrollTop = 0;
    $(".gnbSearchMobile.on .btnGnbSearch").click();
    $(".gnbWrap .pageTitle .tit.on").click();
    $dim.stop().fadeOut(300);
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      $scrollBox.show();
      setTimeout(function () {
        $scrollBox.css("right", 0);
      }, 10)
      $dim.stop().fadeIn(300);
      $scrollBox.scrollTop(scrollTop)
    } else {
      $(this).removeClass("on");
      $scrollBox.css("right", "-100%");
      setTimeout(function () {
        $scrollBox.hide();
      }, 300);
      $dim.stop().fadeOut(300);

    }
  });
}
$(function () {
  $("body").addClass("pc");
  ResponsiveImages();
  $(window).resize(function () {
    ResponsiveImages();
  });
  $("label").on("keypress", function (e) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      $(this).click();
    }
  });
  $("label").each(function (e) {
    if ($(this).prev().attr("type") == "radio" || $(this).prev().attr("type") == "checkbox") {
      $(this).attr("tabindex", "0");
    }
  });

  /*voteMenuTarget*/
  if ($(".voteMenu").length > 0) {
    var voteMenuTarget = $(".voteMenu");
    voteMenuTarget.each(function () {
      var _target = $(this);
      var voteMenu = new Swiper(_target.find(".voteMenuSlide"), {
        nextButton: _target.find(".btn_next"),
        prevButton: _target.find(".btn_prev"),
        pagination: _target.find(".swiper-pagination"),
        paginationElement: "button",
        paginationClickable: true,
        breakpoints: {
          // when window width is <= 740
          20000: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 32,
            onProgress: function (swiper) {
              if (swiper.slides.length <= 4) {
                _target.addClass("hideBtn");
              } else {
                _target.removeClass("hideBtn");
              }
            }
          },
          // when window width is <= 740
          740: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 10,
            onProgress: function (swiper) {
              if (swiper.slides.length <= 2) {
                _target.addClass("hideBtn");
              } else {
                _target.removeClass("hideBtn");
              }
            }
          }
        }
      });
    });

  }

  /*imgView4 slideWrap - 2016-12-21 추가 .cardView3 삭제됨 */
  if ($(".imgView4.slideType.slideWrap").length > 0) {
    var imgView4SlideTarget = $(".imgView4.slideType.slideWrap");
    imgView4SlideTarget.each(function () {
      var _target = $(this);
      setTimeout(function () {
        var imgView4Slide = new Swiper(_target, {
          nextButton: _target.find(".btn_next"),
          prevButton: _target.find(".btn_prev"),
          pagination: _target.find(".swiper-pagination"),
          paginationElement: "button",
          paginationClickable: true,
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 0,
          breakpoints: {
            // when window width is <= 740
            20000: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 32,
              onProgress: function (swiper) {
                if (swiper.slides.length < 5) {
                  swiper.container.addClass("hideBtn");
                  swiper.paginationContainer.addClass("hide");
                } else {
                  swiper.container.removeClass("hideBtn");
                  swiper.paginationContainer.removeClass("hide");
                }
              }
            },
            // when window width is <= 740
            740: {
              slidesPerGroup: 1,
              slidesPerView: 1,
              spaceBetween: 0,
              onProgress: function (swiper) {
                swiper.paginationContainer.removeClass("hide");
                if (swiper.slides.length == 1) {
                  swiper.container.addClass("hideBtn");
                } else {
                  swiper.container.removeClass("hideBtn");
                }
                //s: 190515 edit
                var pageNum = swiper.container.find(".pageNum");
                (function setPageNum (){
                  if(pageNum.length > 0){
                    var sliderH = swiper.slides.find("img").height();
                    pageNum[0].style.top = sliderH - pageNum.height() + "px";
                    swiper.prevButton[0].style.top = sliderH/2 + "px";
                    swiper.nextButton[0].style.top = sliderH/2 + "px";
                  }
                })();
                if(swiper.slides.length > 8){
                  swiper.container.addClass("heavy-slider");
                  pageNum.html("<strong>"+(swiper.snapIndex+1)+"</strong> / "+ swiper.slides.length);
                  //이미지 높이에 맞춰 화살표, 넘버링 높이값 셋팅
                  $(document).on('resize',function(){
                    setPageNum();
                  });
                }
                //e: 190515 edit
              }
            }
          }
        });

      }, 500)
    });
  }

  /* s: Article component - Gallery slider
        200403 modify
  */
	if ($(".cmpnt-gallery .slideWrap").length > 0) {
		var cmpntGallerySlider = $(".cmpnt-gallery .slideWrap");
		cmpntGallerySlider.each(function () {
			var interleaveOffset = 0.5,
					speed = 600;
			var _target = $(this);
			var cmpntGallerySwiper = new Swiper(_target, {
				nextButton: _target.find("button.next"),
				prevButton: _target.find("button.prev"),
				watchSlidesProgress: true,
        keyboardControl: true,
        loop: true,
				speed: speed,
				breakpoints: {
					20000: {
						slidesPerView: 2,
            slidesPerGroup: 1,
						onInit: function(swiper) {
              var realSlide = swiper.container.find(".swiper-slide:not(.swiper-slide-duplicate)");
							if(realSlide.length > 2){
								swiper.container.addClass("has-control")
							}
						},
						onProgress: function(swiper) {
							for (var i = 0; i < swiper.slides.length; i++) {
							  swiper.slides[i].querySelector("div").style.transform =
							    "translate3d(" + 0 + "px, 0, 0)";
							}
						},
            onTransitionEnd: function(swiper){
              endCommonFun(swiper);
            }
					},
					740: {
						slidesPerView: 1,
						slidesPerGroup: 1,
						onTouchStart: function(swiper) {
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = "";
							}
						},
						onTransitionStart: function(swiper) {
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector("div").style.transition =
									speed + "ms";
							}
						},
            onTransitionEnd: function(swiper){
              endCommonFun(swiper)
            }
					}
				}
      });
      function endCommonFun (swiper){
        var pageNum = swiper.container.find(".pageNum"),
            realSlide = swiper.container.find(".swiper-slide:not(.swiper-slide-duplicate)"),
            activeNum = Number(swiper.container.find(".swiper-slide-active").data("swiper-slide-index")) + 1 ;
        pageNum.html(activeNum+" / "+ realSlide.length);

        var downBtn = swiper.container.find(".btnDown") || undefined;
        if(downBtn){
          downBtn.attr("href", "/wsvc/ww/download.file.do?id="+ swiper.container.find(".swiper-slide-active img").attr("src"));
        }
      }
      // $(window).on('resize', function(){
      //   setTimeout(function(){
      //     if($(this).width() > 740){
      //       cmpntGallerySwiper.slideTo('0', speed, false)
      //     }
      //   });
      // });
		});
  }
  // e : Article component - Gallery slider : 200403 modify

  /*navigationTabWrap*/
  if ($(".navigationTabWrap").length > 0) {
    var $naviWrap = $(".navigationTabWrap");
    var $gnbWrap = $(".gnbWrapFull");
    var resizeTime = setTimeout(function () {
      naviPos();
      $(".topVisual .visual img").load(function () {
        naviPos();
      });
    }, 500);

    function naviPos() {
      if ($("body").hasClass("pc")) {
        var topgap = 70;
      } else {
        var topgap = 55;
      }
      var contTop = $(".contTop").outerHeight() + topgap;
      if (contTop < 200) {
        naviPos();
      } else {
        if ($('.topVisualArea').length) {
          $naviWrap.css({
            "top": contTop,
            "position": "absolute",
            "left": 0
          });
          $(".contTop").css({
            "margin-bottom": $naviWrap.height()
          });
        }
      }



    }
    $(window).resize(function () {
      clearTimeout(resizeTime);
      resizeTime = setTimeout(function () {
        naviPos();
      }, 100)
    });
    $(window).scroll(function () {
      var scTop = $(window).scrollTop();
      var contTop = $(".contTop").outerHeight();
      var $navigationTabContent = $naviWrap.find(".tabBtn");

      if ($('.topVisualArea').length) {
        if (scTop >= contTop) {
          $naviWrap.addClass("fixed");
          $gnbWrap.addClass("ab");
        } else {
          $naviWrap.removeClass("fixed");
          $gnbWrap.removeClass("ab");
        }
      } else {
          /* s: 220106 */
          if (!$('.contentWrap > div').hasClass("background")) {
              /* s: 220113 */
              if(!$('.contentWrap .article-stage + .text-image').next('.anchor-navigator')){
                if (scTop >= contTop + $('.contWrap').outerHeight()) {
                  $naviWrap.addClass("fixed");
                  $gnbWrap.addClass("ab");
                } else {
                  $naviWrap.removeClass("fixed");
                  $gnbWrap.removeClass("ab");
                }
              } else{
                if (scTop >= contTop + $('.contentWrap .article-stage').outerHeight() + $('.contentWrap .text-image').outerHeight()) {
                  $naviWrap.addClass("fixed");
                  $gnbWrap.addClass("ab");
                } else {
                  $naviWrap.removeClass("fixed");
                  $gnbWrap.removeClass("ab");
                }
              }
              /* e: 220113 */
          } else {
            if (scTop >= contTop + $('.contentWrap .background').outerHeight()) {
              $naviWrap.addClass("fixed");
              $gnbWrap.addClass("ab");
            } else {
              $naviWrap.removeClass("fixed");
              $gnbWrap.removeClass("ab");
            }
          }
          /* e: 220106 */
        }

      if ($naviWrap.length > 0 && $navigationTabContent.length > 0) {
        if (scTop >= contTop) {
          $navigationTabContent.each(function (i) {
            if (scTop >= $("#" + $(this).attr("data-focus")).offset().top - $naviWrap.height()) {
              $naviWrap.find(".tab").removeClass("on").eq(i).addClass("on");
            }
          });
        } else {
          $naviWrap.find(".tab").removeClass("on")
        }
      }
    });
    $(document).on('click', ".navigationTabWrap .tab button", function (e) {
      var idx = $(this).attr("data-focus");
      if (idx) {
        e.preventDefault();
        var conScTop = $("#" + idx).offset().top - $naviWrap.height() + 1;
        $("body,html").animate({
          scrollTop: conScTop
        }, 300);
      }
    });

    function naviHide() {
      $(".navigationTabWrap.openClose .tab").show();
      var showHide = true;
      $(".navigationTabWrap.openClose .tab").each(function (e) {
        var $target = $(this).closest(".navigationTabWrap");
        if (showHide) {
          if ($(this).position().top > 0) {
            $(this).hide();
            showHide = false;
          } else {
            $(this).show();
          }
        } else {
          showHide = false;
          $(this).hide();
        }

      });
    }

    setTimeout(function () {
      naviHide();
      if ($(".navigationTabWrap .tabListArea .tab.on").length > 0) {
        $(".navigationTabWrap").scrollLeft($(".navigationTabWrap .tabListArea .tab.on").offset().left - 15);
      }

    }, 100);
    $(window).resize(function () {
      naviHide();
    });
    $(".navigationTabWrap .btnRight.openClose").on('click', function (e) {
      e.preventDefault();
      var $target = $(this).closest(".navigationTabWrap");
      var tabheight = 0;
      if (!$(this).hasClass("on")) {
        $target.addClass("open");
        $target.find(".tab").show();
        $(this).addClass("on");
        tabheight = $target.find(".tabList").outerHeight();
        $target.find(".tabListArea").attr("tabindex", 0).focus();
      } else {
        $target.removeClass("open");
        naviHide();
        $(this).removeClass("on");
        tabheight = 70;
      }
      $target.animate({
        height: tabheight
      }, 300);
    });
  }

  /*togListWrap*/
  $(document).on('click', ".togListWrap .btnOpenClose, .togListWrap .togBtn", function (e) {
    e.preventDefault();
    var $toggleTarget = $(this).closest(".togListWrap");
    var $listTarget = $(this).closest(".togList");
    var $naviWrap = $(".navigationTabWrap");
    var _this = $(this);


    if (!$toggleTarget.hasClass("small")) {
      if (!$listTarget.hasClass("on")) {
        $toggleTarget.find(".togList").removeClass("on");
        $toggleTarget.find(".togCont").slideUp(300);
        $listTarget.addClass("on");
        $listTarget.find(".togCont").slideDown(300, function () {
          var contTop = _this.closest(".togList").offset().top - $naviWrap.height();
          $("body,html").delay(200).animate({
            scrollTop: contTop
          }, 300)
        });
      } else {
        $toggleTarget.find(".togList").removeClass("on");
        $toggleTarget.find(".togCont").slideUp(300);
        $toggleTarget.find(".btnWrap").removeClass('on');
        $toggleTarget.find(".btnWrap").find('.btn').removeClass('gray').text('Expand all');
      }
    } else {
      if (!$listTarget.hasClass("on")) {
        $listTarget.addClass("on");
        $listTarget.find(".togCont").slideDown(300);
      } else {
        $listTarget.removeClass("on");
        $listTarget.find(".togCont").slideUp(300);
      }
    }
  });

  $(document).on('click', '.togListWrap .btnWrap .btn', function (e) {
    e.preventDefault();
    if (!$(this).closest('.btnWrap').hasClass('on')) {
      $('.togListWrap .btnWrap').addClass('on');
      $('.togListWrap .btnWrap').find('.btn').addClass('gray').text('Collapse all');
      $('.togList').addClass("on");
      $('.togList').find(".togCont").slideDown(300);
    } else {
      $('.togListWrap .btnWrap').removeClass('on');
      $('.togListWrap .btnWrap').find('.btn').removeClass('gray').text('Expand all');
      $('.togList').removeClass("on");
      $('.togList').find(".togCont").slideUp(300);
    }
  });
  /*sitemap*/

  $(document).on('click', ".siteMapWrap .btnOpenClose", function (e) {
    e.preventDefault();
    var $toggleTarget = $(this).closest(".siteMapWrap");
    var $listTarget = $(this).closest(".siteMapList ");
    var $naviWrap = $(".navigationTabWrap");
   var $gnbWrap = $(".gnbWrapFull");//201013 add
    var _this = $(this);
    if ($toggleTarget.hasClass("only")) {
      if (!$listTarget.hasClass("on")) {
        $toggleTarget.find(".siteMapList").removeClass("on");
        $toggleTarget.find(".siteMapCont").slideUp(300);
        $listTarget.addClass("on");
       // s : 201027 modify
       $listTarget.find(".siteMapCont").slideDown(300, function () {
           var winW = window.innerWidth;
           var contTop = _this.closest(".siteMapList").offset().top - $gnbWrap.height();
           var contTopW = _this.closest(".siteMapList").offset().top;
           if (winW <= 740) {
               $("body,html").delay(200).animate({
                   scrollTop: contTop
               }, 300)
           }
           if (winW > 740) {
               $("body,html").delay(200).animate({
                   scrollTop: contTopW
               }, 300)
           }
       });
       // e : 201027 modify
      } else {
        $toggleTarget.find(".siteMapList").removeClass("on");
        $toggleTarget.find(".siteMapCont").slideUp(300);
      }
    } else {
      if (!$listTarget.hasClass("on")) {
        $listTarget.addClass("on");
        $listTarget.find(".siteMapCont").slideDown(300, function () {
          var contTop = _this.closest(".siteMapList").offset().top;
          $("body,html").animate({
            scrollTop: contTop
          }, 300)
        });
      } else {
        $listTarget.removeClass("on");
        $listTarget.find(".siteMapCont").slideUp(300);
      }
    }
  });

  /*bottomSlideMenu*/
  if ($(".bottomSlideMenu .btnOpenClose").length > 0) {
    $(".bottomSlideMenu .btnOpenClose").on('click', function (e) {
      e.preventDefault();
      if (!$(this).hasClass("on")) {
        $(this).addClass("on");
        $(this).closest(".grid").find(".bottomMenuArea").slideDown(300);
      } else {
        $(this).removeClass("on");
        $(this).closest(".grid").find(".bottomMenuArea").slideUp(300);
      }
    });
  }
  /*tabWrap*/
  if ($(".tabWrap .tabArea button").length > 0) {
    $(document).on('click', '.tabWrap .tabArea button', function (e) {
      e.preventDefault();
      var $target = $(this).closest(".tabWrap");
      var idx = $(this).closest(".tab").index();
      var activeTxt = $(this).text();
      $target.find(".tabActive span").text(activeTxt);
      $target.find(".tabArea .tab").removeClass("on").eq(idx).addClass("on");
      $target.find(".tabArea").removeClass("open");
      var slideChk = false;
      $target.find("li").each(function () {
        var _thisId = $(this).attr("data-parsys-id");
        if ($("#" + _thisId).find(".slideWrap").length > 0) {
          slideChk = true
        }
      });
      var _thisId = $(this).parent().attr("data-parsys-id");
      $target.find("li").each(function (i) {
        if (slideChk) {
          $("#" + $(this).attr("data-parsys-id")).css({
            "visibility": "hidden",
            "overflow": "hidden",
            "height": "0",
            "display": "block"
          });
          $("#" + _thisId).css({
            "visibility": "visible",
            "overflow": "visible",
            "height": "auto",
            "display": "block"
          });
        } else {
          $("#" + $(this).attr("data-parsys-id")).hide();
          $("#" + _thisId).show();
        }
      });
      $target.find(".tabArea .tab button").removeAttr("title");
      $(this).attr("title", "now page");
      var _target = $("#" + _thisId);
      setTimeout(function () {
        _target.find(".swiper-pagination").css("top", _target.find(".swiper-slide-active img").height() - 25);
        if (_target.find('.gridRow .grid').length >= 2) {
          _target.find(".swiper-pagination").css("top", (_target.find(".swiper-slide-active img").height() * 2) - 25);
        }
      }, 100)


    });
    setTimeout(function () {
      $(".tabWrap .tabArea .on").find("button").trigger("click");
    }, 500)
  }
  $(document).on('click', '.tabWrap .tabActive', function (e) {
    e.preventDefault();
    var $target = $(this).closest(".tabWrap");
    if (!$target.find(".tabArea").hasClass("open")) {
      $target.find(".tabArea").addClass("open");
    } else {
      $target.find(".tabArea").removeClass("open");
    }
  });
  if ($(".galleryTabWrap").length > 0) {
    setTimeout(function () {
      $(".galleryTabWrap").each(function () {
        $(this).find(".tabWrap .tabArea button").eq(0).click();
      });
    }, 500)
  }

  /*searchWrap*/
  if ($(".searchWrap .inputText").length > 0) {
    $(document).on("keydown", ".autoSearchList .link", function (e) {
      if (e.keyCode == 40) {
        e.preventDefault();
        var idx = $(this).closest(".searchWrap").find(".autoSearchList .link.on").parent().index() + 1;
        if (idx < $(this).closest(".searchWrap").find(".autoSearchList .link").length) {
          $(this).closest(".searchWrap").find(".autoSearchList .link").eq(idx).focus();
        } else {
          $(this).closest(".searchWrap").find(".autoSearchList").hide();
          $(".searchWrap .inputText").focus();
        }
      }
      if (e.keyCode == 38) {
        e.preventDefault();
        var idx = $(this).closest(".searchWrap").find(".autoSearchList .link.on").parent().index() - 1;
        if (idx >= 0) {
          $(this).closest(".searchWrap").find(".autoSearchList .link").eq(idx).focus();
        } else {
          $(this).closest(".searchWrap").find(".autoSearchList").hide();
          $(".searchWrap .inputText").focus();
        }
      }
    });
    $(document).on('focus', ".autoSearchList .link", function (e) {
      $(this).closest(".searchWrap").find(".autoSearchList").addClass("on");
      $(this).addClass("on");
    });
    $(document).on('blur', ".autoSearchList .link", function (e) {
      $(this).closest(".searchWrap").find(".autoSearchList").removeClass("on");
      $(this).removeClass("on");
    });
    $(".searchWrap").focusout(function (e) {
      var _this = $(this);
      setTimeout(function () {
        if (!_this.find(".autoSearchList").hasClass("on")) {
          _this.find(".autoSearchList").hide();
        }
      }, 100)
    });
  }
  /*sliderWrap*/
  if ($(".slideArea1").length > 0) {
    var slideAreaTarget1 = $(".slideArea1");
    slideAreaTarget1.each(function () {
      var _target = $(this);

      if (!_target.hasClass('numbering')) {
        var slideArea1 = new Swiper(_target, {
          nextButton: _target.find(".btn_next"),
          prevButton: _target.find(".btn_prev"),
          pagination: _target.find(".swiper-pagination"),
          paginationElement: "button",
          paginationClickable: true,
          loop: true,
          onProgress: function (swiper) {
            setTimeout(function () {
              _target.find(swiper.paginationContainer).css("top", _target.find(".swiper-slide-active img").height() - 25);

              if (_target.find('.gridRow .grid').length >= 2) {
                _target.find(swiper.paginationContainer).css("top", (_target.find(".swiper-slide-active img").height() * 2) - 25);
              }
            }, 100)
          }
        });
      } else {
        var slideArea1 = new Swiper(_target, {
          nextButton: _target.find(".btn_next"),
          prevButton: _target.find(".btn_prev"),
          pagination: _target.find(".swiper-pagination"),
          paginationElement: "button",
          paginationType: "bullets",
          paginationClickable: true,
          loop: true,
          onProgress: function (swiper) {
            setTimeout(function () {
              _target.find(swiper.paginationContainer).css("top", _target.find(".swiper-slide-active img").height() - 25);
            }, 100)
          },
          paginationBulletRender: function (swiper, index, className) {
            var prevIdx = index + 1;
            var idx = (prevIdx < 10 ? '0' : '') + prevIdx
            return '<span class="' + className + ' swiper-number"><em>' + idx + '</em></span>';

          }
        });
      }
    });
  }

  if ($(".slideInfo").length > 0) {
    var slideAreaTarget2 = $(".slideInfo");
    var slideInfo2 = new Swiper(".slideInfo", {
      nextButton: slideAreaTarget2.find(".btn_next"),
      prevButton: slideAreaTarget2.find(".btn_prev"),
      pagination: slideAreaTarget2.find(".swiper-pagination"),
      paginationElement: "button",
      paginationClickable: true,
      loop: true,
      onProgress: function (swiper) {
        setTimeout(function () {
          slideAreaTarget2.css("height", $(swiper.container).find(".swiper-slide-active .info").outerHeight());
        }, 100)
      }
    });
  }

  /*main keyvisual slide*/
  if ($(".slideAuto").length > 0) {
    var slideAutoTarget = $(".slideAuto");
    var slideAutoTime = null;
    slideAutoTarget.each(function () {
      var _target = $(this);
      var slideAuto = new Swiper(_target, {
        nextButton: _target.find(".btn_next"),
        prevButton: _target.find(".btn_prev"),
        pagination: _target.find(".swiper-pagination"),
        paginationElement: "button",
        paginationClickable: true,
        autoplay: 6000,
        loop: true,
        onProgress: function (swiper) {}
      });

      _target.find(".swiper-pagination").on("DOMNodeInserted  DOMNodeRemoved",
        function () {
          if (_target.find(".swiper-pagination button.btnPlayStop").length == 0) {
            slideAutoBtn();
          }
        }
      );

      setTimeout(function () {
        slideAutoBtn()
      }, 1000)
      /*           $(window).resize(function(){
                 	clearTimeout(slideAutoTime);
                 	slideAutoTime = setTimeout(function(){
                 		slideAutoBtn();
                 	},100);
                 }) */
      function slideAutoBtn() {
        var maxMainWidth = $(".topVisualArea .topVisual").width();
        if (maxMainWidth <= 1180) {
          maxMainWidth = 1180;
        }
        $(".mainTopVisualArea .btn_prev").css({
          "margin-left": -(maxMainWidth / 2)
        });
        $(".mainTopVisualArea .btn_next").css({
          "margin-right": -(maxMainWidth / 2)
        });

        if (_target.find(".btnPlayStop").length < 1) { //2017.3.27 for IE added by KJ.Lee
          _target.find(".swiper-pagination").append('<button class="btnPlayStop">stop</button>');
        }
        _target.find(".btnPlayStop").off('click');
        _target.find(".btnPlayStop").on('click', function () {
          if (!$(this).hasClass("play")) {
            $(this).addClass("play")
            slideAuto.stopAutoplay();
          } else {
            $(this).removeClass("play")
            slideAuto.startAutoplay();
          }

        });
      }

    });
  }

  if ($(".slideInfo2").length > 0) {

    var slideAreaTarget3 = $(".slideInfo2");
    slideAreaTarget3.each(function () {
      var _target = $(this);
      var slideAuto = new Swiper(_target, {
        nextButton: _target.find(".btn_next"),
        prevButton: _target.find(".btn_prev"),
        pagination: _target.find(".swiper-pagination"),
        paginationElement: "button",
        paginationClickable: true,
        loop: true
      });
    });
  }

  if ($(".slideInfoFixText").length > 0) {
    var slideAreaTarget4 = $(".slideInfoFixText");
    var slideInfoFixText = new Swiper(slideAreaTarget4, {
      nextButton: slideAreaTarget4.find(".btn_next"),
      prevButton: slideAreaTarget4.find(".btn_prev"),
      pagination: slideAreaTarget4.find(".swiper-pagination"),
      paginationElement: "button",
      paginationClickable: true,
      loop: true,
      onInit: function () {
        if ($(window).width() < 740) {
          slideAreaTarget4.height(slideAreaTarget4.find(".info").outerHeight());
        }
      }
    });
    $(window).resize(function () {
      if ($(window).width() < 740) {
        slideAreaTarget4.height(slideAreaTarget4.find(".info").outerHeight());
      }
    });
  }

  if ($(".galleryTy2").length > 0) {
    var galleryTarget2 = $(".galleryTy2");
    galleryTarget2.each(function () {
      var _target = $(this);
      var gallery2 = new Swiper(_target.find(".galleryTy2-slide"), {
        nextButton: _target.find(".btn_next"),
        prevButton: _target.find(".btn_prev"),
        pagination: _target.find(".swiper-pagination"),
        paginationElement: "button",
        paginationClickable: true,
        loop: true
      });
    });
  }

  if (browser.name == "msie" && Number(browser.version) <= 10) {
    $("body").addClass("msie9");
  }

  /*helpBox*/
  if ($(".btnHelp").length > 0) {
    $(".btnHelp").on('click', function (e) {
      e.preventDefault();
      var $target = $(this).closest(".filterItem");
      if (!$(this).hasClass("on")) {
        $(".btnHelp").removeClass("on");
        $(".helpBox").hide();
        $(this).addClass("on");
        $target.find(".helpBox").show();
      } else {
        $(".btnHelp").removeClass("on");
        $(".helpBox").hide();
        $(".btnHelp").blur();
        $(".btnHelp").mouseleave();
      }
    });
    $(".btnHelpClose").on('click', function (e) {
      e.preventDefault();
      $(".btnHelp").removeClass("on");
      $(".helpBox").hide();
      $(".btnHelp").blur();
    });
  }

  /*btnMachFilter*/
  if ($(".btnMachFilter").length > 0) {
    $(".btnMachFilter").on('click', function (e) {
      e.preventDefault();
      if (!$(this).hasClass("on")) {
        $(this).addClass("on");
        $(".machFilterArea").stop().slideDown(200);
      } else {
        $(this).removeClass("on");
        $(".machFilterArea").stop().slideUp(200);
      }
      var lineHiehgt = 0;
      $(".filterItem.line1").each(function () {
        if ($(this).height() > lineHiehgt) {
          lineHiehgt = $(this).outerHeight();
        }
      });
      $(".filterItem.line1").css({
        "height": lineHiehgt
      });
    });
    $(".machFilterArea .btn.search").on("keydown", function (e) {
      if (e.keyCode == 9 && $("body").hasClass("pc")) {
        $(".btnMachFilter").click();
      }
    });
    $(".btnMachFilterClose").on('click', function (e) {
      e.preventDefault();
      $(".btnMachFilter").focus().removeClass("on");
      $(".machFilterArea").stop().slideUp(200);
    });

  }
  $(".datepickerItem .inputText").each(function () {
    $(this).datepicker({
      showOn: "button",
      buttonImage: "/content/dam/hyundai/ww/en/images/common/static/btn_cal.png",
      buttonImageOnly: true,
      buttonText: "Select date",
      dateFormat: "yy-mm-dd"
    });
  });
  if ($(".lineChk").length > 0) {
    $(".lineChk").each(function () {
      if ($(this).height() > 30) {
        $(this).height(56)
      }
    });
  }

  /* listViewType */
  if ($(".listViewType").length > 0) {
    if ($('.listViewType .grid').hasClass('on')) {
      $('.brdList').removeClass('gridMode');
    } else {
      $('.brdList').addClass('gridMode');
    }
    $('.listViewType button').on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('grid')) {
        $('.brdList').removeClass('gridMode');
        $('.listViewType .list').removeClass('on');
        $(this).addClass('on');
      } else {
        $('.brdList').addClass('gridMode');
        $('.listViewType .grid').removeClass('on');
        $(this).addClass('on');
      }
    });
  }

  // calendar
  $(document).on('click', '.calendarWrap .calendarControl .date', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('open')) {
      $(this).addClass('open');
      $(this).closest('.calendarControl').find('.calOption').stop().fadeIn(300);
    } else {
      $(this).removeClass('open');
      $(this).closest('.calendarControl').find('.calOption').stop().fadeOut(300);
    }

  });

  $(document).on("click", '.calendarWrap .btnOptionClose', function (e) {
    e.preventDefault();

    $('.calendarWrap .calendarControl .date').removeClass('open');
    $('.calendarControl').find('.calOption').stop().fadeOut(300);
  });
  $(document).on("click", '.calendarWrap .calToday', function (e) {
    e.preventDefault();
    $('.calendarWrap .today .btnCalMore').trigger("click");
  });

  $(document).on("click", '.calendarWrap .btnCalMore', function (e) {
    e.preventDefault();
    var $lineArea = $(this).closest(".calBodyArea");
    var $moreContent = $(this).closest("li").find(".calMoreContent");

    if (!$(this).closest('li').hasClass("on")) {
      $(".calendarWrap .calBodyArea > li").removeClass("on");
      $(this).closest('li').addClass("on");
      $(".calendarWrap .calMoreContent").hide();
      $moreContent.show();
      $(".calendarWrap .calBodyArea").css({
        height: $lineArea.find(' > li').outerHeight()
      });
      $lineArea.css({
        height: $lineArea.find(' > li').outerHeight() + $moreContent.outerHeight()
      });
      $moreContent.css({
        top: $(this).closest("li").outerHeight()
      });
    } else {
      $(this).closest('li').removeClass("on");
      $lineArea.css({
        height: $lineArea.find(' > li').outerHeight()
      });
      setTimeout(function () {
        $moreContent.hide();
      }, 200)
    }
  });

  $(window).resize(function (e) {
    e.preventDefault();
    var winW = window.innerWidth;
    var $lineItem = $('.calendarWrap .calBodyArea > li');
    var $moreContent = $(".btnCalMore").closest("li").find(".calMoreContent");

    $lineItem.css({
      height: $lineItem.outerWidth()
    });
    $moreContent.css({
      top: $lineItem.outerWidth()
    });

    if (winW > 740) {
      $('.calendarWrap .calBodyArea').each(function () {
        var target = $(this);

        if (target.find('li').hasClass('on')) {
          target.css({
            height: $lineItem.outerHeight() + $moreContent.outerHeight()
          });
        } else {
          target.css({
            height: $lineItem.outerHeight()
          });
        }
      });
    } else {
      $('.calendarWrap .calBodyArea').each(function () {
        var target = $(this);

        if (target.find('li').hasClass('on')) {
          target.css({
            height: $lineItem.outerWidth() + $moreContent.outerHeight()
          });
        } else {
          target.css({
            height: $lineItem.outerWidth()
          });
        }
      });
    }

  }).resize();

  $(".calendarWrap .btnMoreClose").on('click', function (e) {
    e.preventDefault();
    var $lineArea = $(this).closest(".calBodyArea");
    var $moreContent = $(this).closest("li").find(".calMoreContent");
    $(".calendarWrap .calBodyArea > li").removeClass("on");
    $lineArea.css({
      height: $lineArea.find(' > li').not('.on').outerHeight()
    });
    setTimeout(function () {
      $moreContent.hide();
    }, 200)
  });


  if ($('.tableType').length == 0) {
    $(".utillFont").hide();
  }

  if ($('.utillFont').length > 0) {
    var fontSize = 0;
    var $target = $(".utillFont");
    $target.find(".fsBig").bind("click", function (e) {
      e.preventDefault();
      if (fontSize < 3) {
        fontSize = fontSize + 1
      } else {
        fontSize = 3
      }

      $(".tableType").attr("class", "tableType fzbig" + fontSize);
    });
    $target.find(".fsSmall").bind("click", function (e) {
      e.preventDefault();
      if (fontSize > 0) {
        fontSize = fontSize - 1
      } else {
        fontSize = 0
      }
      $(".tableType").attr("class", "tableType fzbig" + fontSize);
    });
  }



  /* MAIN TOP BANNER */
  if ($('.mainTopBanner').length > 0) {
    $('.mainTopBanner .btnBannerClose').on('click', function (e) {
      e.preventDefault();

      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        $(".bannerArea").slideDown(200);
        $(".visitcountry").hide();
      } else {
        $(this).removeClass('on');
        $(".bannerArea").slideUp(200);
        $(".visitcountry").show();
        // M-000073 - 2017.07.11 Main 화면의 GBN 클릭시 아래로 덮히게 수정
        $("body").removeClass("topBanner");
      }
    });
    $('.visitcountry').on('click', function (e) {
      e.preventDefault();
      $(".mainTopBanner .btnBannerClose").addClass('on');
      $(".bannerArea").slideDown(200);
      $(".visitcountry").hide();
    });

  }

  // COUNTRY SWITCH quickArea
  if($(".quickArea").hasClass("on")){
    $("body").addClass("quickArea-on");
  }
  $(".quickArea [class*='icon_close_01']").on("click", function(){
    $(this).closest(".quickArea").removeClass("on");
    $("body").removeClass("quickArea-on");
  });

  //

	// s : 210426 gnb article keyword & article bottom keyword wrapper
	if ($(".topicWrapper").length > 0) {
		var topicWrapper = $(".topicWrapper"),
				topicContainer = topicWrapper.find('.topicContainer'),
				subheaderSlideSwiper = topicWrapper.find('.swiper-wrapper'),
				slideView = topicWrapper.find('.swiper-container'),
				submainKeywordSlide = topicWrapper.find('.swiper-slide'),
				winW = window.innerWidth;

		// set swiper-container's width after DOM has loaded
		adjustTopicLayoutWidth();

		// set the swiper slide after whole page has loaded
		window.addEventListener('load', function() {

			// set swiper-slide's width because of functioning swiping right
			var targetWidth = 0;
			for(i=1;i<=submainKeywordSlide.length;i++){
					targetWidth = targetWidth + submainKeywordSlide.eq(i-1).innerWidth();
			};
			subheaderSlideSwiper.width(targetWidth);

			// set swiper
			topicWrapper.each(function () {
				var _target = $(this).find('.swiper-container'),
					KeywordBar = new Swiper(_target, {
					slidesPerView: 'auto',
					spaceBetween: 0,
					simulateTouch: true,
					touchRatio: 1
				});
			});

			//set swiper-container's width whole page has loaded
			adjustTopicLayoutWidth();
		});
		
		//change swiper-container's width based on window size
		window.addEventListener("resize", function(){
			var targetWidth = 0;
			winW = window.innerWidth;
			for(i=1;i<=submainKeywordSlide.length;i++){
					targetWidth = targetWidth + submainKeywordSlide.eq(i-1).innerWidth();
			};
			subheaderSlideSwiper.width(targetWidth);
			adjustTopicLayoutWidth();
		});

		function adjustTopicLayoutWidth(){
			if(winW <= 740){
				slideView.width($(window).width());
			}else{
				slideView.width(topicContainer.width());
			};
		};
	};
	// e : 210426 gnb article keyword & article bottom keyword wrapper
});

// s: 200403 modify : Multi Image Component
(function multiImgCmpnt(){
  var $multiCmpnt = document.querySelectorAll(".wrap-cols-multiW.align-cross"),
      pcCheck = window.innerWidth > 740;
      moCheck = window.innerWidth <= 740;
      cmpntFiltered = [];
  //하드코딩한 컴포넌트는 제외하고 리스트업
  for(i=0; i<$multiCmpnt.length; i++){
    var hardCodingChk = $multiCmpnt[i].parentNode.parentNode;
    if(hardCodingChk.className !== "rich-text-script" && hardCodingChk.parentNode.className !== "rich-text-script"){
      cmpntFiltered.push($multiCmpnt[i])
    }
  }
  // 이미지 겹치는 영역 있는지 계산하여 텍스트 영역 패딩값 삽입
  for(i=0; i< cmpntFiltered.length; i++){
    var $imgArea = cmpntFiltered[i].querySelectorAll(".imgArea");
		if(pcCheck){
			txtPaddingSet($imgArea);
		}
		imageHalfSet($imgArea);
  }

  var rtime;
  var timeout = false;
  var delta = 200;
  window.addEventListener("resize", function(){
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeEvent, delta);
    }
  });
  function resizeEvent(){
    if(new Date() - rtime < delta){
      setTimeout(resizeEvent, delta);
    }else{
      timeout = false;
      pcCheck = window.innerWidth > 740;
      console.log("resize end")
      for(i=0; i< cmpntFiltered.length; i++){
        var $imgArea = cmpntFiltered[i].querySelectorAll(".imgArea"),
            desc = cmpntFiltered[i].querySelectorAll(".imgArea .desc");
        if(pcCheck){
          txtPaddingSet($imgArea);
        }else if(!pcCheck && desc.length > 0){
          desc[0].style.cssText = "";
          desc[1].style.cssText = "";
        }
      }
    }
  }

	function txtPaddingSet(el){
		var firstCol = el[0],
    lastCol = el[1],
    parent = el[0].parentNode,
		lastColMR = Number(window.getComputedStyle(lastCol)["margin-right"].split("px")[0]),
    firstColMR = Number(window.getComputedStyle(firstCol)["margin-right"].split("px")[0]),
    chkRight = parent.className.indexOf("right") > 0,
		contentsAreaWidth = parent.clientWidth,
		contentsWidth;
		if(firstCol.querySelector(".desc")){
			if(!chkRight){
				contentsWidth = firstCol.clientWidth + lastCol.clientWidth + lastColMR;
				firstCol.querySelector(".desc").style.paddingRight = contentsWidth - contentsAreaWidth + "px";
			}else if(chkRight && lastColMR < 0){
        contentsWidth = firstCol.clientWidth + lastCol.clientWidth + firstColMR;
				firstCol.querySelector(".desc").style.paddingLeft = -lastColMR + 12 +"px";
			}
		}
	}

	function imageHalfSet(el){
		var firstCol = el[0],
				lastCol = el[1],
				firstColWidth =  Number(firstCol.className.match(/\d+/)[0]),
				lastColWidth = Number(lastCol.className.match(/\d+/)[0]);
		if(firstColWidth < lastColWidth && firstCol.className.indexOf("half") < 0){
			firstCol.className += " half";
		}else if(firstColWidth > lastColWidth && lastCol.className.indexOf("half") < 0){
			lastCol.className += " half";
		}
	}
})();
// e: 200403 modify : Multi Image Component

//browser detect
var browser = (function () {
  var s = navigator.userAgent.toLowerCase();
  var match = /(webkit)[ \/](\w.]+)/.exec(s) ||
    /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) ||
    /(msie) ([\w.]+)/.exec(s) ||
    !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) || [];
  return {
    name: match[1] || "",
    version: match[2] || "0"
  };
}());

// 레이어 팝업
function gfnOpenLayer(popupContent, e) {
  e.preventDefault();
  window.focusBtn = e.currentTarget;

  var settings = {
    opacity: 0
  }

  var eventPosition = e.pageY;

  popupContent = $(popupContent);

  popupContent.css(settings);
  popupContent.show();

  popupContent.stop().animate({
    opacity: 1
  }, {
    duration: 400,
    complete: function () {
      popupContent.css({
        transform: 'initial'
      });
    }
  });
  //popupContent.find('.layerPopArea').css({top : eventPosition});
  popupContent.attr('tabIndex', -1).focus();

  // 레이어 닫기
  popupContent.find('.btnLayerClose').off('click.closeEvent').on('click.closeEvent', function (e) {
    e.preventDefault();

    $(this).closest(popupContent).hide();

    if (window.focusBtn) {
      window.focusBtn.focus();
    }
  });
}

// 동적 얼럿창
function gfnAlert(alertType, subject, message, goUrl) {
  var htmlMarkup = '';

  switch (alertType) {
    case 'type1':

      htmlMarkup += '<div class="layerPop alert">',
        htmlMarkup += '<div class="dim"></div>',
        htmlMarkup += '<div class="layerPopArea">',
        htmlMarkup += '<div class="popCont">',
        htmlMarkup += '<strong class="headTit">' + subject + '</strong>',
        htmlMarkup += '<div class="conArea">' + message + '</div>',
        htmlMarkup += '<div class="btnWrap">',
        htmlMarkup += '<a href="#" class="btn">'+Granite.I18n.get('OK')+'</a>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>', htmlMarkup += '<button class="btnLayerClose">레이어 팝업 닫기</button>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>';

      break;

    case 'type2':

      htmlMarkup += '<div class="layerPop alert">',
        htmlMarkup += '<div class="dim"></div>',
        htmlMarkup += '<div class="layerPopArea">',
        htmlMarkup += '<div class="popCont">',
        htmlMarkup += '<em class="icoNoti1"></em>',
        htmlMarkup += '<strong class="headTit">' + subject + '</strong>',
        htmlMarkup += '<div class="conArea tac">' + message + '</div>',
        htmlMarkup += '<div class="btnWrap">',
        htmlMarkup += '<a href="#" class="btn">'+Granite.I18n.get('OK')+'</a>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>', htmlMarkup += '<button class="btnLayerClose">레이어 팝업 닫기</button>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>';

      break;

    case 'type3':

      htmlMarkup += '<div class="layerPop alert">',
        htmlMarkup += '<div class="dim"></div>',
        htmlMarkup += '<div class="layerPopArea">',
        htmlMarkup += '<div class="popCont">',
        htmlMarkup += '<div class="conArea">' + message + '</div>',
        htmlMarkup += '<div class="btnWrap">',
        htmlMarkup += '<a href="#" class="btn">'+Granite.I18n.get('OK')+'</a>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>', htmlMarkup += '<button class="btnLayerClose">레이어 팝업 닫기</button>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>';

      break;

      /* 2017-1-20 추가 : s */
    case 'type4':

      htmlMarkup += '<div class="layerPop alert">',
        htmlMarkup += '<div class="dim"></div>',
        htmlMarkup += '<div class="layerPopArea">',
        htmlMarkup += '<div class="popCont">',
        htmlMarkup += '<em class="icoNoti"></em>',
        htmlMarkup += '<strong class="headTit">' + subject + '</strong>',
        htmlMarkup += '<div class="conArea tac">' + message + '</div>',
        htmlMarkup += '<div class="btnWrap">',
        htmlMarkup += '<a href="#" class="btn">'+Granite.I18n.get('OK')+'</a>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>',
        htmlMarkup += '<button class="btnLayerClose">레이어 팝업 닫기</button>',
        htmlMarkup += '</div>',
        htmlMarkup += '</div>';

      break;
      /* 2017-1-20 추가 : e */
  }

  $('body').append(htmlMarkup);
  var popupContent = $('.layerPop.alert');

  var settings = {
    opacity: 0
  }

  if (goUrl != 'undefined' || goUrl != '') {
    popupContent.find('.btnWrap .btn').attr('href', goUrl);
  }

  popupContent.css(settings);

  popupContent.show();

  popupContent.stop().animate({
    opacity: 1
  }, {
    duration: 400,
    complete: function () {
      popupContent.css({
        transform: 'initial'
      });
    }
  });

  popupContent.attr('tabIndex', -1).focus();

  // 레이어 닫기

  popupContent.find('.btnWrap .btn').off('click.closeEvent').on('click.closeEvent', function (e) {
    if ($(this).attr('href') != goUrl || $(this).attr('href') == '#') {

      e.preventDefault();
      $(this).closest(popupContent).hide();
      $('body').find('.layerPop.alert').remove();

      if (window.focusBtn) {
        window.focusBtn.focus();
      }
    }
  });
  popupContent.find('.btnLayerClose').off('click.closeEvent').on('click.closeEvent', function (e) {
    e.preventDefault();
    $(this).closest(popupContent).hide();
    $('body').find('.layerPop.alert').remove();

    if (window.focusBtn) {
      window.focusBtn.focus();
    }
  });

}

function over_img(img, n) {

  var hover = "_" + n;
  if (img.hasClass("on") == false && img.find("img").length > 0) {
    menuimg = img.find("img");
    if (n == "on") {
      menuimg_src = menuimg.attr("src").replace("_off.", "_on.");
    } else {
      menuimg_src = menuimg.attr("src").replace("_on.", "_off.");
    }
    menuimg.attr("src", menuimg_src);
  }
}


// 로딩 시작
function loadingStart() {

  var htmlMarkup = '';
  htmlMarkup += '<div class="layerPop loading">',
    htmlMarkup += '<div class="dim"></div>',
    htmlMarkup += '<div id="loading"></div>',
    htmlMarkup += '</div>',
    htmlMarkup += '</div>';


  $('body').append(htmlMarkup);
  var popupContent = $('.layerPop.loading');

  var settings = {
    opacity: 0
  }

  popupContent.css(settings);
  popupContent.show();
  popupContent.stop().animate({
    opacity: 1
  }, {
    duration: 400,
    complete: function () {
      popupContent.css({
        transform: 'initial'
      });
    }
  });

  popupContent.attr('tabIndex', -1).focus();

}
// 로딩 시작
function loadingEnd() {
  var popupContent = $('.layerPop.loading');
  popupContent.stop().animate({
    opacity: 0
  }, {
    duration: 400,
    complete: function () {
      popupContent.remove();
    }
  });

}

//M-00033 쿠키 가져오기
function getCookie(name) {
  var cookieName = name + "=";
  var x = 0;

  while (x <= document.cookie.length) {
    var y = (x + cookieName.length);

    if (document.cookie.substring(x, y) == cookieName) {
      if ((lastChrCookie = document.cookie.indexOf(";", y)) == -1) {
        lastChrCookie = document.cookie.length;
        return decodeURI(document.cookie.substring(y, lastChrCookie));
      }
    }

    x = document.cookie.indexOf(" ", x) + 1;

    if (x == 0) {
      break;
    }
  }

  return "";
}

//M-00033 쿠키 저장하기
function setCookie(name, value, expireDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expireDays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + escape(value) + ";" + expires + ";path=/";
  hideLayer();
}

//M-00033 Popup Open
function showLayer(e) {
  $('#' + e).show();
  $("html").append("<div class='overlay'></div>");
  $("html").addClass("fixed");
}

//M-00033 Popup Close
function hideLayer() {
  $(".layerPop").hide();
  $(".overlay").remove();
  $("html").removeClass("fixed");
}

// s: 191204 modify
$(function(){
  //S: article tab component : 200212 modify
  var $cmpntMediaTab = $(".cmpnt-media-tab");
  $cmpntMediaTab.each(function(i, el){
		$(el).find(".tab:first-child, .cont-tab:first-child").addClass("on");
    $(el).find(".tab button").on("click", function(){
      var $contTabs = $(el).find(".cont-tab");
				$(el).find(".tab.on, .cont-tab.on").removeClass("on");
        $(this).parent(".tab").addClass("on");
        $contTabs.eq(this.dataset.index).addClass("on")
    });
  });
  //E: article tab component : 200212 modify

  //S: layer pop
  var $layerPop = $("[data-js*='layerPop']"),
      $closeBtn = $("[data-js*='layerPopClose']"),
      activeClass = "on";
  $layerPop.addClass(activeClass);
  $closeBtn.on("click", function(){
    $(this).parents($layerPop).removeClass(activeClass);
  });
  //E: layer pop
});
// e: 191204 modify

//HWW KO SITE
var languageCode ="en";
if(typeof langCode != 'undefined' && langCode.split("_").length >0){
    var langCodeArr = langCode.split("_");
    languageCode = langCodeArr[0];
}

/* s : 210506 add */
$(function(){
    if($(".news-list h3.subTit4").length > 0){
        $(".news-list h3.subTit4").each(function(index){
            $(this).dotdotdot({
                wrap : 'word'
            });
        });
    }
});
/* e : 210506 add */

//show more
$(function() {
 $('.btn-more').on('click', function(){
     var winW = window.innerWidth;
     var $naviHeight = $('.gnbWrapFull ').height();

     if (winW > 740) {
         $('html, body').animate({ scrollTop:$(".more-cont").offset().top},500);
     }
     if (winW <= 740) {
         $('html, body').animate({ scrollTop:$(".more-cont").offset().top - $naviHeight},500);
     }
 });
});
//e:201005 add

/* s : 211117 newsroom search tab year */
$(function(){
	if ($(".searchYearTab").length > 0) {
		var searchYearTab = $(".searchYearTab"),
			searchYearContainer = searchYearTab.find('.searchYearContainer')
			subheaderSlideSwiper = searchYearTab.find('.swiper-wrapper'),
			slideView = searchYearTab.find('.swiper-container'),
			submainKeywordSlide = searchYearTab.find('.swiper-slide'),
			winW = window.innerWidth;

		// set swiper-container's width after DOM has loaded
		adjustsearchYearLayoutWidth();

		// set the swiper slide after whole page has loaded
		window.addEventListener('load', function() {
			// set swiper-slide's width because of functioning swiping right
			var targetWidth = 0;
			for(i=1;i<=submainKeywordSlide.length;i++){
					targetWidth = targetWidth + submainKeywordSlide.eq(i-1).innerWidth();
			};
			subheaderSlideSwiper.width(targetWidth);

			// set swiper
			searchYearTab.each(function () {
				var _target = $(this).find('.swiper-container'),
					SearchYearSwiper = new Swiper(_target, {
					simulateTouch: true,
					touchRatio: 1, 
					nextButton: _target.parent(".searchYearContainer").find(".year-btn_next"),
	          		prevButton: _target.parent(".searchYearContainer").find(".year-btn_prev"),
					breakpoints: {
						// when window width is <= 740
						20000: {
							slidesPerView: 10,
							slidesPerGroup: 10,
						},
						// when window width is >= 740
						740: {
							slidesPerView: 5,
							slidesPerGroup: 5,
						}
					}
				});
			});

			//set swiper-container's width whole page has loaded
			adjustsearchYearLayoutWidth();
		});
		
		//change swiper-container's width based on window size
		window.addEventListener("resize", function(){
			var targetWidth = 0;
			winW = window.innerWidth;
			for(i=1;i<=submainKeywordSlide.length;i++){
				targetWidth = targetWidth + submainKeywordSlide.eq(i-1).innerWidth();
			};
			subheaderSlideSwiper.width(targetWidth);
			adjustsearchYearLayoutWidth();
		});

		function adjustsearchYearLayoutWidth(){
			if(winW <= 740){
				slideView.width($(window).width());
			}else{
				slideView.width(searchYearContainer.width());
			};
		};
	};
});
/* //e : 211117 newsroom search tab year */
var ComUtils = {
		callAjax : function (url, param) {
		    var result;  
			$.ajax({
				type:'post',
				async:false,
				url:url,
				data:param,
				dataType:'json',
		        success: function(response) {
		        	result = response;
					return response;
		        },
				error:function(response) {
		        	result = response;
					return response;
				}
			});
			return result;
		}
		, callAsncAjax : function (url, param, callBack) {
		    var result;  
			$.ajax({
				type:'post',
				async:true,
				url:url,
				data:param,
				dataType:'json',
		        success: function(response) {
		        	if (!ComUtils.isEmpty(callBack)) {
			        	callBack(response);
		        	}
		        },
				error:function(response) {
		        	if (!ComUtils.isEmpty(callBack)) {
			        	callBack(response);
		        	}
				}
			});
		}
		, callAsncAjaxMultipart : function (form, url, param, callBack) {
		    var result;  
			$(form).ajaxSubmit({
				type:'post',
				async:true,
				url:url,
				data:param,
				dataType:'json',
		        success: function(response) {
		        	if (!ComUtils.isEmpty(callBack)) {
			        	callBack(response);
		        	}
		        },
				error:function(response) {
		        	if (!ComUtils.isEmpty(callBack)) {
			        	callBack(response);
		        	}
				}
			});
		}
		, isEmpty : function(arg){
			try {
				if (arg == null || arg == undefined || (arg + "") == "" || arg == "null") return true;
				else return false;
			} catch (e) {
				return true;
			}
		}
		, nvl : function(arg, defaultStr){
			if (ComUtils.isEmpty(arg)) {
				if (ComUtils.isEmpty(defaultStr)) {
					return "";
				} else {
					return defaultStr;
				}
			} else {
				return arg;
			}
		}
		//pageNavi는, blue-moves-old-list 컴포넌트의 요건에 맞게 수정된 것임
    	, pageNavi : function(pageNo, totalCount, rowCount, pageCount, func) {
            var func = ComUtils.nvl(func, "movePage");
            var totalPage = Math.ceil(totalCount/rowCount);
            var startPage = (Math.ceil(pageNo/pageCount) - 1) * pageCount + 1;

            var pageHtml = "";

            // << btnFirst
            if (startPage != 1) {
            	pageHtml += "<button class='btnPaging btnFirst' onClick='" + func + "(" + (startPage - pageCount) + "); return false;'>first</button>";
            } else { 
            	pageHtml += "<button class='btnPaging btnFirst disabled'>first</button>";
            }
            
            // < btnPrev
            if (pageNo != 1) {
            	pageHtml += "<button class='btnPaging btnPrev' onClick='" + func + "(" + (pageNo - 1) + "); return false;'>prev</button>";
            } else {
            	pageHtml += "<button class='btnPaging btnPrev disabled'>prev</button>";
            }

            pageHtml += "<div class='number'>";
            // 1 2 3 [4] 5 6 7 number
            if(totalPage > 0){
	            for (var i=startPage; i<startPage+pageCount; i++) {
	                if (totalPage < i) break;
	                if (i == pageNo) {
	                    pageHtml += "<button class='on'>" + i + "</button>";
	                } else {
	                	pageHtml += "<button onClick='" + func + "(" + i + "); return false;'>" + i + "</button>";
	                }
	                
	                if (i == totalPage) 
	                    break;
	            }	
            }else{
            	 pageHtml += "<a class='on'>1</a>";
            }
            pageHtml += "</div>";
            
            // > btnNext
            if (pageNo < totalPage)
                pageHtml += "<button class='btnPaging btnNext' onClick='javascript:" + func +"(" + (pageNo + 1) + "); return false;'>next</button>";
            else
                pageHtml += "<span class='btnPaging btnNext disabled'>next</span>";
            
            // >> btnLast
            if (startPage + pageCount - 1 < totalPage)
                pageHtml += "<button class='btnPaging btnLast' onClick='javascript:" + func + "(" + (startPage + pageCount) + "); return false;'>last</button>";
            else
                pageHtml += "<button class='btnPaging btnLast disabled'>last</button>";
    
            return pageHtml;
        } 
/*    	
        <div class="paging">
		    <a href="#" class="btnPaging btnFirst">first</a>
		    <a href="#" class="btnPaging btnPrev">prev</a>
	    	<div class="number">
		        <a href="#" class="on">1</a>
		        <a href="#">2</a>
		        <a href="#">3</a>
		        <a href="#">4</a>
		        <a href="#">5</a>
	    	</div>
		    <a href="#" class="btnPaging btnNext">next</a>
		    <a href="#" class="btnPaging btnLast">last</a>
        </div>
*/    
    	, pageNaviNews : function(pageNo, totalCount, rowCount, pageCount, func) {
    		if($('body').hasClass('mobile')) {
    			pageCount = 5;
    		}
            var func = ComUtils.nvl(func, "movePage");
            var totalPage = Math.ceil(totalCount/rowCount);
            var startPage = (Math.ceil(pageNo/pageCount) - 1) * pageCount + 1;

            var pageHtml = "";

            // << btnFirst
            if (startPage != 1) {
            	pageHtml += "<button class='btnPaging btnFirst' onClick='" + func + "(" + (1) + "); return false;'>first</button>";
            } else { 
            	pageHtml += "<button class='btnPaging btnFirst disabled'>first</button>";
            }
            
            // < btnPrev
            if (pageNo - pageCount > 0) {
            	pageHtml += "<button class='btnPaging btnPrev' onClick='" + func + "(" + (pageNo - pageCount) + "); return false;'>prev</button>";
            } else {
            	pageHtml += "<button class='btnPaging btnPrev disabled'>prev</button>";
            }

            pageHtml += "<div class='number'>";
            // 1 2 3 [4] 5 6 7 number
            if(totalPage > 0){
	            for (var i=startPage; i<startPage+pageCount; i++) {
	                if (totalPage < i) break;
	                if (i == pageNo) {
	                    pageHtml += "<button class='on'>" + i + "</button>";
	                } else {
	                	pageHtml += "<button onClick='" + func + "(" + i + "); return false;'>" + i + "</button>";
	                }
	                
	                if (i == totalPage) 
	                    break;
	            }	
            }else{
            	 pageHtml += "<a class='on'>1</a>";
            }
            pageHtml += "</div>";
            
            // > btnNext
            if (pageNo + pageCount - 1 < totalPage)
                pageHtml += "<button class='btnPaging btnNext' onClick='javascript:" + func +"(" + (pageNo + pageCount) + "); return false;'>next</button>";
            else
                pageHtml += "<span class='btnPaging btnNext disabled'>next</span>";
            
            // >> btnLast
            if (pageNo < totalPage)
                pageHtml += "<button class='btnPaging btnLast' onClick='javascript:" + func + "(" + (totalPage) + "); return false;'>last</button>";
            else
                pageHtml += "<button class='btnPaging btnLast disabled'>last</button>";
    
            return pageHtml;
        } 
    	, dateTimeFormatDefault : function(sDate) {
    		return ComUtils.dateFormat(ComUtils.toDate(sDate), 'yyyy.MM.dd hh:mm:ss') 
        }
    	, dateTimeFormatDefaultOption : function(sDate, commnet) {
    		if(sDate == null || sDate == undefined || sDate == '' ){
    			return commnet;
    		}
    		return ComUtils.dateFormat(ComUtils.toDate(sDate), 'yyyy.MM.dd hh:mm:ss') 
        }
    	, dateFormatDefault : function(sDate) {
    		return ComUtils.dateFormat(ComUtils.toDate(sDate), 'yyyy.MM.dd') 
        }
    	, dateFormat : function(x, y) {
    		if(ComUtils.isEmpty(x) || ComUtils.isEmpty(y)){
    			return x;
    		}
            var z = {
                M: x.getMonth() + 1,
                d: x.getDate(),
                h: x.getHours(),
                m: x.getMinutes(),
                s: x.getSeconds()
            };
            y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
                return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
            });

            return y.replace(/(y+)/g, function(v) {
                return x.getFullYear().toString().slice(-v.length)
            });
        }

    	, toDate : function(str) {
    		if(ComUtils.isEmpty(str)){
    			return str;
    		}
            var year = str.substring(0, 4);
            var month = str.substring(4, 6);
            var day = str.substring(6, 8);
            var hour = str.substring(8, 10);
            var minute = str.substring(10, 12);
            var second = str.substring(12, 14);
            var date = new Date(year, month-1, day, hour, minute, second);
            return date;
        }
        , getFormData : function (form) { 
            var rtnJson = {}; 
            if (form.substr(0, 1) != "#") {
                form = "#" + form;
            }

            $(form).find("input, select, textarea").each(function(i, item) { 
                rtnJson[ComUtils.nvl($(item).attr("id"), $(item).attr("name"))] = ComUtils.getValue(item); 
            }); 
            return rtnJson; 
        }
    	, setFormData : function (form, data) { 
            if (form.substr(0, 1) != "#") {
                form = "#" + form;
            }

            $(form).find("input[type=text], select, textarea").each(function(i, item) { 
                ComUtils.setValue($(item).attr("id"), ComUtils.nvl(data[$(item).attr("id")], ""));
            }); 
        }
        , setValue : function (id, value) {
            value = ComUtils.nvl(value);
            var item; 
            if (typeof id == "string") { 
                if (id.substr(0, 1) == "#") {
                    item = $(id); 
                } else { 
                    item = $("#" + id); 
                } 

                // 존재하지 않는 경우 이름으로 찾기 
                if (item.length <= 0) { 
                    item = $("input[name="+id+"]"); 
                    // $(':radio[name="radioSwitch"]:checked').val(); 
                } 
            } else { 
                item = id; 
            } 

            if ($(item).length > 0) { 
                var typ = ComUtils.getType(item); 
                if (typ == "text" || typ == "hidden" || typ == "password" || typ == "textarea") { 
                    $(item).val(value); 
                } else if (typ == "select-one") { 
                    $(item).val(value); 
                } else if (typ == "checkbox") { 
                    $(item).prop('checked', !ComUtils.isEmpty(value)); 
                } else { 
                    $(item).val(value); 
                } 
            } 
        } 
        , getValue : function (id) { 
            var item; 
            if (typeof id == "string") { 
                if (id.substr(0, 1) == "#") { 
                    item = $(id); 
                } else { 
                    item = $("#" + id); 
                } 

                // 존재하지 않는 경우 이름으로 찾기 
                if (item.length <= 0) { 
                    item = $("input[name="+id+"]"); 
                    // $(':radio[name="radioSwitch"]:checked').val(); 
                } 
            } else { 
                item = id; 
            } 

            var typ = ComUtils.getType(item); 
            var rtnValue = ""; 
            if (typ == "text" || typ == "hidden" || typ == "password") { 
                rtnValue = $(item).val().trim(); 
            } else if (typ == "select-one") { 
                rtnValue = $(item)[0].value; 
                // rtnValue = $("#" + $(item).attr("id") + " > option:selected").val(); 
            } else if (typ == "radio") { 
                rtnValue = $(':radio[name="'+$(item).attr("name")+'"]:checked').val(); 
            } else if (typ == "checkbox") { 
                if ($(item).is(":checked")) { 
                    rtnValue = $(item).val(); 
                } 
            } else { 
                rtnValue = $(item).val(); 
            } 
            // console.log($(item).attr("id") + " => " +  $(item).prop('tagName') + " " + $(item)[0].type + "  " + rtnValue); 
            return ComUtils.nvl(rtnValue); 
        } 
        // get type of the specified object 
        , getType : function (item) { 
            try { 
                return $(item)[0].type; 
            } catch (e) { 
                ComUtils.log(item); 
            } 
        } 
    	, getArrayString : function(arr) {
    		var str = "";
        	if (!this.isEmpty (arr)) {
	        	for (var i=0; i<arr.length; i++) {
	        		if (i==0) {
	        			str = arr[i];
	        		} else {
	        			str = str + "," + arr[i];
	        		}
	        	}
        	}
        	return str;
        }
        , clearForm : function (id) { 
            $(id + " :input").each(function(i, item) { 
                if (ComUtils.getType(this) != "button") { 
                    ComUtils.setValue($(this), ""); 
                } 
            }); 
        }
        , setSelectOption : function (id, codeList, defCode, c_code, v_code) {
            c_code = ComUtils.nvl(c_code, "code"); 
            v_code = ComUtils.nvl(v_code, "displayName"); 
            var obj; 
            if (typeof id == "string") { 
                if (id.substr(0, 1) == "#") { 
                    obj = $(id); 
                } else { 
                    obj = $("#" + id); 
                } 

                // 존재하지 않는 경우 이름으로 찾기 
                if (obj.length <= 0) { 
                    obj = $("input[name="+id+"]"); 
                    // $(':radio[name="radioSwitch"]:checked').val(); 
                } 
            } else { 
                obj = id; 
            } 
            defCode = ComUtils.nvl(defCode); 
            //-------------------------- 
            $(obj).empty(); 
            $(obj).append("<option value=''></option>"); 
            for (var i in codeList) { 
                //item = codeList[i]; 
                // ie 일때 . 브라우져가 type 을 단순 Object 로 받는 현상이 있음. 
                // [2012.10.21:전영우] 해당 객체의 object 가  undefined 인 경우 동작이 안되도록 함. 
                var itemDtl = JSON.stringify(codeList[i]); 
                if( typeof itemDtl != 'undefined' ){ 
                    var item = JSON.parse( itemDtl ); 
                    if (defCode == item.CD) { 
                        $(obj).append("<option value='"+item[c_code]+"' selected='selected'>"+item[v_code]+"</option>"); 
                    } else { 
                        $(obj).append("<option value='"+item[c_code]+"'>"+item[v_code]+"</option>"); 
                    } 
                } 
            } 
        }
    	, getSelectText : function (id) {
            if (id.substr(0, 1) != "#") { 
                id = "#" + id;
            } 

            return $(id + " option:selected").text();
    	}
    	, getClientInfo : function () {
    		var req = new XMLHttpRequest();
            req.open("GET", "", true);
            req.send(null);

            var country = this.nvl(req.getResponseHeader("TrueCountry"));
            var city = this.nvl(req.getResponseHeader("TrueCity"));
            var ip = this.nvl(req.getResponseHeader("True-Client-IP"));
            
            var info = {};
            info.country = country;
            info.city = city;
            info.ip = ip;
            
            return info;
    	}
    	, ltrimzero : function (str) {
    		return str.replace(/(^0+)/, "");
    	}
    	, capitalizeFirstLetter : function (str) {
    		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    	}
    	, makeMonthToString : function (month) {
    		var monthArr = ["JAN", "FEB" ,"MAR" ,"APR", "MAY" ,"JUN" ,"JUL" ,"AUG" ,"SEP" ,"OCT" ,"NOV" ,"DEC"];
    		var str = "";
    		switch (month) {
    		    case '01':
    		    	str = monthArr[0];
    		        break;
    		    case '02':
    		    	str = monthArr[1];
    		        break;
    		    case '03':
    		    	str = monthArr[2];
    		        break;
    		    case '04':
    		    	str = monthArr[3];
    		        break;
    		    case '05':
    		    	str = monthArr[4];
    		        break;
    		    case '06':
    		    	str = monthArr[5];
    		        break;
    		    case '07':
    		    	str = monthArr[6];
    		        break;
    		    case '08':
    		    	str = monthArr[7];
    		        break;
    		    case '09':
    		    	str = monthArr[8];
    		        break;
    		    case '10':
    		    	str = monthArr[9];
    		        break;
    		    case '11':
    		    	str = monthArr[10];
    		        break;
    		    case '12':
    		    	str = monthArr[11];
    		        break;
    		}
    		return str;
    	}
    	, decodeXSSProtectedHTML : function(input){
    		if(!ComUtils.isEmpty(input)){
    			input = ComUtils.nvl(input).toString().replace(/&amp;#/gi, "&#");
	            var e = document.createElement('div');
	            e.innerHTML = input;
	            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    		}else{
    			return "";
    		}
        }, decodeXSSProtectedUnicode : function(input){
    		input = ComUtils.nvl(input).toString().replace(/&amp;#/gi, "&#");
    		input = input.replace(/&lt;br\s*[\/]?&gt;/gi, "<br/>");
    		// 2017.04.19 Dolhead : " " 를 &nbsp;로 변경되도록 수정
    		// 2017.05.31 Dolhead : "  " 를 " &nbsp;" 로 변경되도록 수정 (M-00049)
    		input = input.split("  ").join(" &nbsp;");
    		return input;
        }, isValidEmail : function(emailValue){
       	    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
       	    if(filter.test(emailValue)){        
       	        return true;
       	    }else{
       	        return false;
       	    }     
        }, isValidDomain : function(domainValue){
           	var filter = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/;
           	if(filter.test(domainValue)) {
           		return true;
           	} else {
           		return false;
           	}
        }, isValidPhoneNumber : function(phoneValue){
        	var isValid = true;
           	var phoneArr = phoneValue.split('\n');
           	for(var i=0; i<phoneArr.length; i++){
           		var filter = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
           		var value = phoneArr[i];
	           	if(!filter.test(value)) {
	           		isValid = false;
	           		break;
	           	} 
        	}
        	return isValid;
        }, isValidAttachFileName : function(fileNameValue){		//M-00105 2018.01.08 파일업로드시 파일명을 확인하고 공격처럼 보이는 파일명일경우 체크 
        	var isValid = true;
        	
        	//script check
        	var filter = /<[a-zA-Z\s\=\"]+>/g;
           	if( filter.test(fileNameValue) ) {
           		isValid = false;
           	} 
           	filter = /eval\(/g;
           	if( filter.test(fileNameValue) ) {
           		isValid = false;
           	}
           	filter = /expression\(/g;
           	if( filter.test(fileNameValue) ) {
           		isValid = false;
           	}
           	filter = /javascript\:/g;
           	if( filter.test(fileNameValue) ) {
           		isValid = false;
           	}
           	filter = /vbscript\:/g;
           	if( filter.test(fileNameValue) ) {
           		isValid = false;
           	}
           	filter = /onload\(/g;
           	if( filter.test(fileNameValue) ) {
           		isValid = false;
           	}
           	
           	return isValid;
		}
        
       
        
};

//form 데이터를 JSON Object로변환
jQuery.fn.serializeObject = function() {
    var obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
            var arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function() {
                    obj[this.name] = this.value;
                });
            }//if ( arr ) {
        }
    } catch (e) {
        alert(e.message);
    } finally {
    }
 
    return obj;
};


/*
function escapeHTML(val) {
    return String(val)
			.replace(/&/g,"&amp;")
			.replace(/</g,"&lt;")
			.replace(/>/g,"&gt;")
			.replace(/"/g,"&quot;")
			.replace(/'/g,"&#x27;")
			.replace(/%/g,"&#x25;")
			.replace(/\\/g,"&#x5C;")
		    ;
}

function escapeJavaScript(val) {
    return String(val)
			.replace(/\\/g,"\\x5C;")
			.replace(/</g,"\\x3C")
			.replace(/>/g,"\\x3E")
			.replace(/"/g,"\\x22")
			.replace(/'/g,"\\x27")
			.replace(/%/g,"\\x25")
			.replace(/&/g,"\\x26")
	    	;
}
*/
$(function(){

	// Network
	if($('.networkMap').length >= 0){
		// setup
		function setup(){
			$('.mapCheckMode').find('input:checkbox').each(function(){
				if($(this).is(':checked')){
					var idxCheck = $(this).attr('id').split('mapCheck0')[1];

					$('.networkMap .mapWrap .chk' + idxCheck).find('button').addClass('on');
					$('.networkMap .mapWrap span.chk' + idxCheck).addClass('on');

					$('.networkListWrap .networkList').eq(idxCheck-1).addClass('on');

					// both 일 경우
					if($('.networkMap .mapWrap .map').hasClass('both')){
						$('.networkMap .mapWrap .both').find('button').addClass('on');
					}
					else{
						$('.networkMap .mapWrap .chk' + idxCheck).find('.tooltip span').addClass('on');
					}
				}
			});

			$('.networkListWrap .networkList').find('.gridRow, .grid').removeAttr('style');
		}

		setup();
		bindEvent();

		function bindEvent(){
			// mapCheckMode
			$('.mapCheckMode input:checkbox').on('change', function(){

				var idxCheck = $(this).attr('id').split('mapCheck0')[1];
				setup();
				$('.networkMap .mapWrap .map').removeClass('on');
				$('.mapSelectWrap .selectCountry option').eq(0).attr("selected","selected").trigger("change");
				$('.mapSelectWrap .selectCenter option').eq(0).attr("selected","selected").trigger("change");



				if($(this).is(':checked')){
					$('.networkMap .mapWrap .chk' + idxCheck).find('button').addClass('on');
					$('.networkMap .mapWrap span.chk' + idxCheck).addClass('on');
					$('.networkListWrap .networkList').eq(idxCheck-1).addClass('on');
					// both 일 경우
					if($('.networkMap .mapWrap .map').hasClass('both')){
						$('.networkMap .mapWrap .both').find('button').addClass('on');
					}
					else{
						$('.networkMap .mapWrap .chk' + idxCheck).find('.tooltip span').addClass('on');
					}
				}
				else{
					$('.networkMap .mapWrap .chk' + idxCheck).find('button').removeClass('on');
					$('.networkMap .mapWrap span.chk' + idxCheck).removeClass('on');
					$('.networkListWrap .networkList').eq(idxCheck-1).removeClass('on');

					// both 일 경우
					if($('.networkMap .mapWrap .map').hasClass('both') && $('.mapCheckMode input:checkbox:checked').length <= 0){
						$('.networkMap .mapWrap .both').find('button').removeClass('on');
					}
					else{
						$('.networkMap .mapWrap .chk' + idxCheck).find('.tooltip span').removeClass('on');
					}
				}
				$(".mapSelectWrap .selectCountry .chk1, .mapSelectWrap .selectCountry .chk2").hide();
				$(".mapSelectWrap .selectCountry option").removeAttr("selected");
				$(".mapSelectWrap .selectCountry option:eq(0)").attr("selected", "selected");
				$('.mapCheckMode input:checked').each(function(){
					var val = $(this).val()
					$(".mapSelectWrap .selectCountry option.chk"+val).show();
				})

			});

			// 지도 클릭
			$('.mapWrap button').on('click', function(e){
				e.preventDefault();

				if(!$(this).closest('.map').hasClass('on')){
					$('.mapWrap').find('.map').removeClass('on');
					$(this).closest('.map').addClass('on');
					var topPosition = $(this).next('.tooltip').outerWidth() / 2 - 13;
					$(this).next('.tooltip').css('left',-topPosition);
				}
				else{
					$(this).closest('.map').removeClass('on');
				}
				var idx = $(this).closest(".map").attr("id")
				$('.mapSelectWrap .selectCountry option[value="'+idx+'"]').attr("selected","selected").trigger("change");
				setup();
			});
			$('.mapSelectWrap .selectCountry').on('change', function(e){
				e.preventDefault();
				var idx = $(this).val();
				$('.mapSelectWrap .selectCenter .centerItem').remove();
// 2017.02.10 마크업 구조 수정으로 인산 대응 수정
				$(".mapWrap #"+idx+" .tooltip span").each(function(){
					if($(this).hasClass("on")){
						var tit = $(this).text();
						var id = $(this).attr("id");
						if(id == undefined){
							id = $(this).closest(".map").attr("id");
						}
						$('.mapSelectWrap .selectCenter').append("<option class='centerItem' value='"+id+"'>"+tit+"</option>");
					}
				});

				/*  2017.01.23 component화 하여 모두 span에서 가져오기로 변경 ********************************************************************
				 if($(".mapWrap #"+idx+" .tooltip").hasClass("wide")){
				 $(".mapWrap #"+idx+" .tooltip span").each(function(){
				 var tit = $(this).text();
				 var id = $(this).attr("id");
				 $('.mapSelectWrap .selectCenter').append("<option class='centerItem' value='"+id+"'>"+tit+"</option>");
				 });
				 }else{
				 $(".mapWrap #"+idx+" .tooltip ").each(function(){
				 var tit = $(this).text();
				 $('.mapSelectWrap .selectCenter').append("<option class='centerItem' value='"+idx+"'>"+tit+"</option>");
				 })
				 }
				 ********************************************************************************************************************** */

			});
			$('.mapSelectWrap .selectCenter').on('change', function(e){
				e.preventDefault();
				var country = $(this).val();
				$('.networkListWrap .networkList').find('.' + country).show().siblings().hide();
				$('.networkListWrap .networkList').find('.' + country).closest('.networkList').addClass('on').siblings().removeClass('on');
			});


			//지도 내용 클릭
			$('.mapWrap .tooltip button').on('click', function(e){
				e.preventDefault();

				if($(this).parent('span').length){
					var country = $(this).parent('span').attr('id');
				}
				else{
					var country = $(this).closest('.map').attr('id');
				}

				$('.networkListWrap .networkList').find('.' + country).show().siblings().hide();
				$('.networkListWrap .networkList').find('.' + country).closest('.networkList').addClass('on').siblings().removeClass('on');
				$('.mapSelectWrap .selectCenter option[value="'+country+'"]').attr("selected","selected").trigger("change");
				$("body,html").animate({scrollTop : $('.networkListWrap').offset().top},300);

			});
		}
	}

	//History
	var $historyWrap = $(".historyWrap");
	var $historyCont = $(".historyCont");
	$(window).scroll(function(){
		var scTop = $(window).scrollTop();
		var contTop = $(".contTop").outerHeight();
		var $naviWrap = $(".navigationTabWrap");		
		if($historyCont.length > 1){
			if(scTop >= contTop + $('.contentWrap .background').outerHeight()) { //220111
				$historyWrap.addClass("fixed");     
			}else{
				$historyWrap.removeClass("fixed");
			}			
			if(scTop >= contTop + $('.contentWrap .background').outerHeight()) { //220111
				$historyCont.each(function(i){
					if(scTop >= $(this).offset().top-$naviWrap.height()-100){
						$historyCont.removeClass("on").eq(i).addClass("on");
					}
				})
			}else{
				$historyCont.removeClass("on").eq(0).addClass("on");
			}
			if(scTop+$(window).height() >= $(".historyCont").eq($(".historyCont").length-1).offset().top+$(window).height()){
				$historyWrap.removeClass("fixed");
			}
		}
	});	

	$historyCont.removeClass("on").eq(0).addClass("on");
	/* 220119
	if($historyWrap.length > 0){
		$(window).resize(function(){
			var leftPos = ($(document).width()/2) - $historyWrap.find(".imgArea").width()
			$historyWrap.find(".imgArea").css("left",leftPos)
		}).resize()
	}
	//220119 */
		


	//Vehicle History
	if($('.carHistoryList').length > 0){
		var $carHistory = $('.carHistoryList');
		var $carHistoryCont = $carHistory.find('.lineArea');
		var $naviWrap = $(".navigationTabWrap");
		var $naviListArea = $naviWrap.find('.tabListArea');
		var $naviList = $naviListArea.find('li');

		$(window).scroll(function(){
			var scTop = $(window).scrollTop();
			var contTop = $(".contTop").outerHeight();
			var $carHistory = $('.carHistoryList');
			var $carHistoryCont = $carHistory.find('.lineArea');
			var $naviWrap = $(".navigationTabWrap");
			var $naviListArea = $naviWrap.find('.tabListArea');
			var $naviList = $naviListArea.find('li');

			if($carHistory.length > 0){
				if(scTop >= contTop){
					$carHistoryCont.each(function(i){
						if(scTop >= $(this).offset().top-$naviWrap.height()-100){
							$carHistoryCont.removeClass("on").eq(i).addClass("on");
							$naviList.removeClass('on');
							$naviList.eq(i).addClass('on');
						}
					});
				}
				else{
					$carHistoryCont.removeClass("on");
					$naviList.removeClass('on').eq(0).addClass('on');
				}
			}
		});

		$naviList.find('> a').on('click', function(e){
			e.preventDefault();
			var idx = $(this).attr("data-focus");

			if(idx == 'all'){
				$("body,html").stop().animate({scrollTop : $('.topVisualArea').offset().top + $('.topVisualArea').outerHeight() / 2.5},300);
			}
			else{
				var conScTop = $("#"+idx).offset().top-$naviWrap.height()+1;
				$("body,html").stop().animate({scrollTop : conScTop},300);
			}
		});
	}


	//Award
	$(".btnAwardMore").click(function(e){
		e.preventDefault();
		var $lineArea = $(this).closest(".lineArea");
		var $moreContent = $(this).closest(".item").find(".awardMoreContent");
		var naviHeight = 0;
		if($(".navigationTabWrap").length > 0){
			naviHeight = $(".navigationTabWrap").height();
		}
		if(!$(this).hasClass("on")){
			$(".btnAwardMore").removeClass("on");
			$(this).addClass("on");
			$(".awardMoreContent").hide();
			$moreContent.show();
			$(".awardList .lineArea").css({height : 215});
			$lineArea.css({height : 215 + $moreContent.outerHeight() + 40});
		}else{
			$(this).removeClass("on");
			$lineArea.css({height : 215});
			setTimeout(function(){
				$moreContent.hide();
			},200)
		}
		var _this = $(this);
		setTimeout(function(){
			$("body,html").stop().animate({scrollTop : _this.closest(".item").offset().top-naviHeight},500);
		},300)


	})
	$(".btnMoreClose").click(function(e){
		e.preventDefault();
		var $lineArea = $(this).closest(".lineArea");
		var $moreContent = $(this).closest(".item").find(".awardMoreContent");
		$(".btnAwardMore").removeClass("on");
		$lineArea.css({height : 215});
		setTimeout(function(){
			$moreContent.hide();
		},200)
	})

});
$(function(){
	setData("");
	$(".countryList").each(function(){
		$(this).find("> .item").each(function(i){
			var web = Math.floor(i/3);
			var mobile = Math.floor(i/2);
			$(this).attr({"data-media-webline" : "web"+web, "data-media-mobileline" : "mobile"+mobile});
		})
	})
	$('.worldwideMap .imgMap area').on('click', function(e){
        e.preventDefault();
        var name = $(this).attr('class').split(' on')[0];
        var $targetArea = $('.worldwideMap .imgMap area');
        
        if(!$(this).hasClass('on')){
            $targetArea.removeClass("on");
            $(this).addClass('on');
            $('.countryArea').hide();
            $('.countryWrap').addClass("showCon");
            $('.countryArea#' + name).show();
            $('.countryArea#' + name + " .item").show(); //hide() when print search result list
            setData("");
            $('.worldwideMap .imgMap .imgMapActive img').removeClass('on');
            $('.worldwideMap .imgMap .imgMapActive img.'+name).addClass('on');
            $('.worldwideCont .tabWrap .tab').removeClass('on');
            $('.worldwideCont .tabWrap .tab button.' + name).closest('li').addClass('on');
            $('.worldwideCont .tabWrap .tabActive span').text(name);
            
            $("body,html").animate({scrollTop : $('.countryArea#' + name).offset().top},500);
        }else{
            $('.countryWrap').removeClass("showCon");
            $(this).removeClass('on');
            $('.countryArea').hide();
            $('.worldwideCont .tabWrap .tab').removeClass('on');
            $('.worldwideMap .imgMap .imgMapActive img').removeClass('on');
        }
		//$("body,html").animate({scrollTop : $('.countryArea#' + name).offset().top},500);
	});
    $('.worldwideMap .imgMap area').on('mouseenter', function(e){
        var name = $(this).attr('class').split(' on')[0];		
        $('.worldwideMap .imgMap .imgMapActive img').hide();
        $('.worldwideMap .imgMap .imgMapActive img.'+name).show();
	})
	$('.worldwideMap .imgMap').on('mouseleave', function(e){
		$('.worldwideMap .imgMap .imgMapActive img').hide();
		$('.worldwideMap .imgMap .imgMapActive img.on').show();
	})

	$('.worldwideCont .tabWrap .tab button').on('click', function(e){
		e.preventDefault();
		var name = $(this).attr('class').split('link ')[1];

		$('.countryArea').hide();
		$('.countryArea#' + name).show();
		$('.countryWrap').addClass("showCon");

		$('.worldwideMap .imgMap .imgMapActive img').removeClass('on');
		$('.worldwideMap .imgMap .imgMapActive img.'+name).addClass('on');
		$('.worldwideMap .imgMap area').removeClass('on');
		$('.worldwideMap .imgMap area.' + name).addClass('on');
	});

	$(window).on('resize', function(){
		var winW = window.innerWidth;
		var phrases;

		if(winW > 740 && $("body").hasClass("pc")){
			phrases = $('.countryWrap').next('.countryLink').clone();

			$('.countryWrap').next('.countryLink').remove();
			$('.worldwideMap').prepend(phrases);
		}
		else{
			phrases = $('.worldwideMap').find('.countryLink').clone();

			$('.worldwideMap').find('.countryLink').remove();
			$('.countryWrap').after(phrases);
		}
	}).resize();


	$(".countryList .item .countryName button").click(function(e){
		e.preventDefault();
		var countryid = $(this).closest(".countryArea").attr("id");
		var $countryListItem = $(".countryList .item");
		if($("body").hasClass("pc")){
			var countryListRow = $(this).closest(".item").data("media-webline");
			var $countryListRowItem = $(this).closest(".countryList").find(".item[data-media-webline = '"+countryListRow+"']");
		}else{
			var countryListRow = $(this).closest(".item").data("media-mobileline");
			var $countryListRowItem = $(this).closest(".countryList").find(".item[data-media-mobileline = '"+countryListRow+"']");
		}
		var $moreContent = $(this).closest(".item").find(".countryCont");
		var _thisHeight = $(this).closest(".countryName").outerHeight();
		if(!$(this).closest('.countryName').hasClass("on")){
			$(".countryName").removeClass("on");
			$(this).closest('.countryName').addClass("on");
			$(".countryCont").hide();
			$moreContent.show();
			$countryListItem .css({height : 'auto'});
			$countryListRowItem.css({height : _thisHeight + $moreContent.outerHeight() + 40});
			var startTop = $(this).position().top+_thisHeight;
			$moreContent.css({top:startTop});
			$('.worldwideMap .imgMap area').removeClass("on");
			$('.worldwideMap .imgMap area.'+countryid).addClass("on")
			$('.worldwideMap .imgMap .imgMapActive img').removeClass('on');
			$('.worldwideMap .imgMap .imgMapActive img.'+countryid).addClass('on');
			$('.worldwideCont .tabWrap .tab button.' + countryid).closest('li').addClass('on');
			//$('.worldwideCont .tabWrap .tabActive span').text(countryid);


		}else{
			$(this).closest('.countryName').removeClass("on");
			$countryListItem .css({height : 'auto'});
			$moreContent.hide();
		}
		$("body,html").animate({scrollTop : $(this).closest(".item").offset().top-100},500);

	});
	var	resizeworldwideTime;
	$(window).resize(function(){
		clearTimeout(resizeworldwideTime);
		resizeworldwideTime = setTimeout(function(){
			var startTop = 0;
			var $activeItem = $(".countryName.on");
			var $moreContent = $activeItem.closest(".item").find(".countryCont");
			var $countryListItem = $(".countryList .item");
			if($("body").hasClass("pc")){
				var countryListRow = $activeItem.closest(".item").data("media-webline");
				var $countryListRowItem = $activeItem.closest(".countryList").find(".item[data-media-webline = '"+countryListRow+"']");
			}else{
				var countryListRow = $activeItem.closest(".item").data("media-mobileline");
				var $countryListRowItem = $activeItem.closest(".countryList").find(".item[data-media-mobileline = '"+countryListRow+"']");
			}
			$countryListItem .css({height : 'auto'});
			$countryListRowItem.css({height : $activeItem.outerHeight() + $moreContent.outerHeight() + 40});
			startTop = $activeItem.outerHeight();
			if($activeItem.position()) startTop += $activeItem.position().top;
			$moreContent.css({top:startTop});
		},10)


	});


	$(".btnClose").click(function(e){
		e.preventDefault();
		var $countryList = $(this).closest(".countryList");
		var $moreContent = $(this).closest(".item").find(".countryCont");
		var $countryListItem = $(".countryList .item");
		$(".countryName").removeClass("on");
		$countryListItem.css({height : 'auto'});
		$moreContent.hide();
	});

	//search keyword added by KJ.Lee
	$("#btnSearchCountry").bind("click", function(e){
		var $target = $(this).closest(".searchBar");
		var srchWord = $.trim($target.find(".searchWrap .inputText").val());
		if(srchWord.length < 2){
			gfnAlert('type4', Granite.I18n.get('Search Message'), Granite.I18n.get("please fill out more than 2 charecters!"));
			return false;
		}
		var nResult = 0;
		if(srchWord){
			$('.worldwideMap .imgMap .imgMapActive img').removeClass('on');
			$(".countryArea").hide();
			$(".countryName").each(function(){
				if($(this).attr("data-item").toLowerCase().indexOf(srchWord.toLowerCase()) > -1){
					nResult++;
					if($(this).parents(".countryArea").hide()) $(this).parents(".countryArea").show();
					$(this).closest(".item").show();
				}
				else{
					$(this).closest(".item").hide();
				}
			});
			setData(":visible");
			if(nResult < 1){
				gfnAlert('type4', Granite.I18n.get('Search Result') , Granite.I18n.get('Sorry. there are no result data.'));
			}
		}
	});
	
	//Enter Key event add agagin! 03.23 KJ.Lee please don't remove this!!!!!
	$("#inputSearchCountry").keyup(function(e){
		if(e.keyCode == 13){
			var $target = $(this).closest(".searchBar");
			var srchWord = $.trim($target.find(".searchWrap .inputText").val());
			if(srchWord.length < 2){
				gfnAlert('type4', Granite.I18n.get('Search Message'), Granite.I18n.get("please fill out more than 2 charecters!"));
				return false;
			}
			var nResult = 0;
			if(srchWord){
				$('.worldwideMap .imgMap .imgMapActive img').removeClass('on');
				$(".countryArea").hide();
				$(".countryName").each(function(){
					if($(this).attr("data-item").toLowerCase().indexOf(srchWord.toLowerCase()) > -1){
						nResult++;
						if($(this).parents(".countryArea").hide()) $(this).parents(".countryArea").show();
						$(this).closest(".item").show();
					}
					else{
						$(this).closest(".item").hide();
					}
				});
				setData(":visible");
				if(nResult < 1){
					gfnAlert('type4', Granite.I18n.get('Search Result') , Granite.I18n.get('No Result.'));
				}
			}
		}
	});

	function setData(isVisible){
		var theItem = "> .item" + isVisible;
		$(".countryList").each(function(){
			$(this).find(theItem).each(function(i){
				var web = Math.floor(i/3);
				var mobile = Math.floor(i/2);
				$(this).attr({"data-media-webline" : "web"+web, "data-media-mobileline" : "mobile"+mobile});
			});
		});
	}
});
$(function(){
	$('.enginList .lineArea .item').each(function(){
		if($(this).find('.btnEnginMore').closest('.item').hasClass('on')){
			$(this).closest('.lineArea').css({height : 205 + $(this).filter('.on').find('.btnEnginMore').next('.enginMoreContent').outerHeight() + 40});
		}
	});
	
	$(".btnEnginMore").click(function(e){
		e.preventDefault();
		var $lineArea = $(this).closest(".lineArea");
		var $moreContent = $(this).closest(".item").find(".enginMoreContent");
		var naviHeight = 0;
		if($(".navigationTabWrap").length > 0){
			naviHeight = $(".navigationTabWrap").height();
		}
		$(".enginList").find('.item').removeClass("on");
		$(this).closest('.item').addClass("on");
		$(".enginMoreContent").hide();
		$moreContent.show();
		$(".enginList .lineArea").css({height : 205});
		$lineArea.css({height : 205 + $moreContent.outerHeight() + 40});
		
		if($(this).closest('body').hasClass('mobile')){
			return;
		}

		$("body,html").stop().animate({scrollTop : $(this).closest(".enginList").offset().top-40-naviHeight},500);

	})
	$(window).resize(function(e){
		e.preventDefault();
		var $lineArea = $(".enginList .item.on").closest(".lineArea");
		var $moreContent = $(".enginList .item.on").find(".enginMoreContent");
		$lineArea.css({height : 205 + $moreContent.outerHeight() + 40});
	})

	$(".btnMoreClose").click(function(e){
		e.preventDefault();
		var $lineArea = $(this).closest(".lineArea");
		var $moreContent = $(this).closest(".item").find(".enginMoreContent");
		$(".enginList").find('.item').removeClass("on");
		$lineArea.css({height : 205});
		setTimeout(function(){
			$moreContent.hide();
		},200)
	});

	$(window).on('resize', function(){
		var winW = $(window).width();
		var itemSize = winW - (winW / 1.76);
		var idx = $('.enginList .item.on').index()-1;

		$('.enginList .item').css({
			width : itemSize
		});

		$('.enginList .lineRow').css({
			marginLeft :  -itemSize * idx
		});

		$('.enginList .item .btnEnginMore').on('click', function(e){
			e.preventDefault();
			idx = $(this).closest('.item').index()-1;

			$('.enginList .lineRow').css({
				marginLeft :  -itemSize * idx
			});
		});

		//  높이가 가장 높은 값 추출
		var listArray = $('.enginList .lineArea .item').map(function(){
			return $(this).find('.btnEnginMore').height();
		});
		
		Math.max.apply(Math , listArray);

		$('.enginMoreContent').css({top : Math.max.apply(Math , listArray) + 30, marginTop : 0});

		if(winW < 450){
			$('.enginList .item').eq(0).css({marginLeft : '30px'});
		}
	}).resize();
	
	var slideArea1;
	//[M-00111] 20180226 이현국 : ImageAccorion 내의 js와 brandstory.js 충돌
	$('.PhiloShowList .btnShow').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var $naviHeight = 0;
		if($('.navigationTabWrap').legnth > 0){
			$naviHeight = $('.navigationTabWrap').height();
		}
		
		if(!$(this).closest('.item').hasClass('on')){
			$(this).closest('.item').addClass('on');
			$(this).closest('.item').find('.viewArea').show();			
			setTimeout(function(){
				$("body,html").animate({scrollTop : $this.offset().top - $naviHeight},500);
				var slideAreaTarget1 = $(".slideArea1");
		        slideAreaTarget1.each(function(){
		            var _target = $(this);
	                if(!_target.hasClass('numbering')){
	                	_target.find(".swiper-pagination").css("top",_target.find(".swiper-slide-active img").height()-25);
                        if(_target.find('.gridRow .grid').length >= 2){
                        	_target.find(".swiper-pagination").css("top",(_target.find(".swiper-slide-active img").height() *2) -25);
                        }
	                }
	                else{
	                	_target.find(".swiper-pagination").css("top",_target.find(".swiper-slide-active img").height()-25);
	                }
		        })
			},300)
		}
		else{
			$(this).closest('.item').removeClass('on');
			$(this).closest('.item').find('.viewArea').hide();
		}
	});
	if($('.PhiloShowList .viewArea').length > 0){
		setTimeout(function(){
			$('.PhiloShowList .viewArea').addClass("onload");
		},500)
	}

});
/* Slick */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(!0),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!=0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),!0===s.options.centerMode&&s.slideCount<=s.options.slidesToShow?s.slideOffset=0:!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=!1===s.options.vertical?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,!0===s.options.variableWidth&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow),e=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===s.options.centerMode&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1),e=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(e){i(this).attr("role","option")}),null!==e.$dots&&e.$dots.find("li").each(function(t){i(this).find("button").attr({id:"slick-slide"+e.instanceUid+t})}),e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(i){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.slideCount>e.options.slidesToShow&&e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),!0===e.options.accessibility&&e.initADA())},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode?(e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end().find("button").attr({"aria-pressed":!1}),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").find("button").attr({"aria-pressed":!0}))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*
= the-j nAnimate Plugin
+ data-element-type : 엘리먼트 타입
+ data-engaged-animation : 애니메이션이 재생되어 끝나는 키프레임의 style을 array 형태로 입력
+ data-style: 애니메이션이 시작될 키프레임을 미리 설정(inline 형태의 style 코드로 입력)
+ data-duration: 애니메이션 길이(초 단위)
+ data-delay: 애니메이션이 시작되기 전 딜레이 설정 (초 단위)
+ data-easing: easing 설정 (대소문자 구분)
*/

(function($) {
	var methods = {
		init: function(element, _opt) {
			$e = $(element);
			$("body").data("nAnimate", o.activated);
			if($e.data("elementType") == "trigger") {
				$e.find("[data-element-type='target']").each(function(i){
					if($(this).data("style")) $(this).attr("style", $(this).data("style"));
					$(this).addClass(o.activated);
				});
			}else {
				if(_opt.style) $e.attr("style", _opt.style);
			};
			$e.addClass(o.activated);
			methods.bind($e, _opt);
		},
		easing: function(type){
			var val = null;
			switch(type){
				case "easeInSine": val = "cubic-bezier(0.47, 0, 0.745, 0.715)";
				break;
				case "easeOutSine": val = "cubic-bezier(0.39, 0.575, 0.565, 1)";
				break;
				case "easeInOutSine": val = "cubic-bezier(0.445, 0.05, 0.55, 0.95)";
				break;
				case "easeInQuad": val = "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
				break;
				case "easeOutQuad": val = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
				break;
				case "easeInOutQuad": val = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
				break;
				case "easeInCubic": val = "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
				break;
				case "easeOutCubic": val = "cubic-bezier(0.215, 0.61, 0.355, 1)";
				break;
				case "easeInOutCubic": val = "cubic-bezier(0.645, 0.045, 0.355, 1)";
				break;
				case "easeInQuart": val = "cubic-bezier(0.895, 0.03, 0.685, 0.22)";
				break;
				case "easeOutQuart": val = "cubic-bezier(0.165, 0.84, 0.44, 1)";
				break;
				case "easeInOutQuart": val = "cubic-bezier(0.77, 0, 0.175, 1)";
				break;
				case "easeInQuint": val = "cubic-bezier(0.755, 0.05, 0.855, 0.06)";
				break;
				case "easeOutQuint": val = "cubic-bezier(0.23, 1, 0.32, 1)";
				break;
				case "easeInOutQuint": val = "cubic-bezier(0.86, 0, 0.07, 1)";
				break;
				case "easeInExpo": val = "cubic-bezier(0.95, 0.05, 0.795, 0.035)";
				break;
				case "easeOutExpo": val = "cubic-bezier(0.19, 1, 0.22, 1)";
				break;
				case "easeInOutExpo": val = "cubic-bezier(1, 0, 0, 1)";
				break;
				case "easeInCirc": val = "cubic-bezier(0.6, 0.04, 0.98, 0.335)";
				break;
				case "easeOutCirc": val = "cubic-bezier(0.075, 0.82, 0.165, 1)";
				break;
				case "easeInOutCirc": val = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
				break;
				case "easeInBack": val = "cubic-bezier(0.6, -0.28, 0.735, 0.045)";
				break;
				case "easeOutBack": val = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
				break;
				case "easeInOutBack": val = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
				break;
				default: val = "cubic-bezier(0,0,0,0)";
				break;
			}

			return val;
		},
		destroy: function(){
			if($e.data("elementType") == "trigger") {
				$e.find("[data-element-type='target']").each(function(i){
					$(this).removeAttr("style");
					$(this).removeClass(o.animated);
					$(this).removeClass(o.activated);
				})
			}
			$(this).removeAttr("style");
			$(this).removeClass(o.animated);
			$(this).removeClass(o.activated);
			$("body").data("nAnimate", "inactivated");
		},
		bind: function($e, _opt){
			$(window).on({
				scroll: function(){
					if($("body").data("nAnimate") == o.activated){
						var browserTop = $(window).scrollTop(),
						browserHeight = $(window).height(),
						browserBottom = (browserTop + browserHeight);

						var elementTop = $e.offset().top;
						var elementBottom = $e.offset().top + $e.outerHeight();
						var topTrigger = browserTop < elementTop && elementTop < browserBottom;
						var bottomTrigger = browserTop < elementBottom && elementBottom < browserBottom;

						var trigger1 = topTrigger || bottomTrigger;
						var trigger2 = browserTop > elementTop && elementBottom > browserBottom;
						if(trigger1 || trigger2) {
							if($e.data("elementType") == "trigger") {
								$e.find("[data-element-type='target']").each(function(i){
									var _tOpt = $.extend({
										duration: 1,
										delay: 0,
										initialDisplay: "none",
										animated: "animated",
										activated: "activated",
										easeing: "none"
									}, $(this).data());
									methods.animate($(this), _tOpt);
								});
							}else {
								methods.animate($e, _opt);
							}
						}
					}
				}
			})
		},
		animate: function($e, _opt) {
			if(!$e.hasClass(o.animated)) {
				if(methods.detectTransition() == undefined) methods.forNotSupportTransition($e, _opt);
				else {
					$e.removeAttr("style"); // 기존 적용되어 있던 inline style 제거
					var engagedAnimation = $.parseJSON(_opt.engagedAnimation.replace(/'/g, '"'));
					$e.css({
						transition: "all "+_opt.duration+"s "+_opt.delay+"s "+methods.easing(_opt.easing),
						'-webkit-transition': "all "+_opt.duration+"s "+_opt.delay+"s "+methods.easing(_opt.easing)
					});
					$e.css(engagedAnimation);
					$e.addClass(o.animated);
				}
			}
		},
		detectTransition: function(){
			var t,
				el = document.createElement("fakeelement");
			var transitions = {
				"transition": "transitionend",
				"OTransition": "oTransitionEnd",
				"MozTransition": "transitionend",
				"WebkitTransition": "webkitTransitionEnd"
			}
			for (t in transitions){
				if (el.style[t] !== undefined){
					return transitions[t];
				}
			}
		},
		forNotSupportTransition: function($e, _opt) {
			if(_opt.engagedIeAnimation === undefined){
				engagedAnimation = $.parseJSON(_opt.engagedAnimation.replace(/'/g, '"')); // 없는 경우 기존 것 사용
			}else {
				engagedAnimation = $.parseJSON(_opt.engagedIeAnimation.replace(/'/g, '"')); // ie9 전용 애니메이션
			}
			var duration = _opt.duration * 1000;
			var delay = _opt.delay * 1000;
			$e.stop().delay(delay).animate(engagedAnimation, duration, _opt.easing, function(){
				$e.addClass(o.animated);
			});
		}
	};

	jQuery.fn.nAnimation = function(options) {
		if(methods[options]) {
			return methods[options].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}else {
			o = $.extend({
				duration: 1,
				delay: 0,
				initialDisplay: "none",
				animated: "animated",
				activated: "activated",
				easeing: "none"
			}, options, $(this).data());

			return this.each(function(){
				var c1 = $("body").data("nAnimate") != o.activated || !$(this).hasClass(o.activated),
					c2 = $(this).data("elementType") == "target";

				if(c2) return false;
				if(c1){
					methods.init(this, o);
				}
			});
		}
	};
})(jQuery);
var device;
var f = function(){
	$(window).on({
		resize: function(){
			device = $("body").hasClass("mobile") ? "mobile" : "desktop";
			if(device == "desktop") {
				$("[data-element-type]").each(function(){
					$(this).nAnimation();
				});
			}else if ($("body").data("nAnimate")) {
				$("[data-element-type]").each(function(){
					$(this).nAnimation("destroy");
				});
			}
		}
	});
	$(window).trigger("resize");
	$(window).trigger("scroll");
}
$(document).ready(function(){
	f();
});

/* hSpreadGallery */
(function($) {
	$.fn.hSpreadGallery = function (){
		this.each(function(index){
			var hSpreadGallery = new SpreadGallery(this);
		})
		return this;
	}
})(jQuery)
var sg_prt = SpreadGallery.prototype;
function SpreadGallery(selector){
	this.objBlock = $(selector);
	this.init(selector);
}
sg_prt.init = function(selector){
	this.objDirectionBtn = this.objBlock.find('.galleryImage > a');
	this.objPaging = this.objBlock.find('ul').length-1;
	this.motionObj = this.objBlock.find('.galleryImage ul');
	this.objWebGallery = this.objBlock.find('.galleryImage');
	this.objLayerPopup = this.objBlock.find('.galleryLayer');
	this.objIndex = null;
	this.focusObj = 'a[href], area[href], input:not([disabled]), input:not([readonly]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
	this.background();
	this.dotCreate();
	this.direction();
	this.webMotionScroll();
	this.dotClick();
	this.setIndex();
	this.openLayer();
	this.layerPopupButton();
}
sg_prt.background = function (){
	var bgWeb = null;
	var bgMobile = null;
	var obj = this;
	bgWeb = this.objBlock.attr('data-media-pc');
	bgMobile = this.objBlock.attr('data-media-Mobile');
	$(window).resize(function(){
		if ($(window).width() > 740) {
			obj.objBlock.css({backgroundImage:'url('+bgWeb+')'});
		} else {
			obj.objBlock.css({backgroundImage:'url('+bgMobile+')'});
		}
	}).resize();
}
sg_prt.dotCreate = function(){
	var obj = this;
	for (var i = 0; i<this.objPaging ; i++ ) {
		this.objBlock.find('.galleryDot').append('<a href="#"></a>');
	}
	this.objBlock.find('.galleryDot a').eq(0).addClass('on');
	this.objBlock.find('.galleryDot a').click(function(){
		return false;
	});
}
sg_prt.setIndex = function(){
	this.objWebGallery.find('li').each(function(e){
		$(this).attr('data-idx',e+1);
	});
	this.objLayerPopup.find('.galleryLayerCounter .total').html(this.objWebGallery.find('li').length);
}
sg_prt.direction = function(){
	var obj = this;
	this.objDirectionBtn.click(function(){
		obj.motionObj.eq(obj.objIndex).hide();
		if ($(this).hasClass('prev')) {
			obj.objIndex--;
			if (obj.objIndex >= 0 )
			{
				obj.motionObj.eq(obj.objIndex).show();
				obj.webMotion(obj.objIndex,'prev');
			} else {
				obj.objIndex = obj.objPaging-1;
				obj.motionObj.eq(obj.objIndex).show();
				obj.webMotion(obj.objIndex,'prev');
			}
			obj.objIndex = obj.objIndex;
		} else {
			obj.objIndex++;
			if (obj.objIndex < obj.objPaging )
			{
				obj.motionObj.eq(obj.objIndex).show();
				obj.webMotion(obj.objIndex,'next');
			} else {
				obj.objIndex = 0;
				obj.motionObj.eq(obj.objIndex).show();
				obj.webMotion(obj.objIndex,'next');
			}
			obj.objIndex = obj.objIndex;
		}
		obj.dotActive(obj.objIndex);
		return false;
	});
}
sg_prt.dotActive = function(num){
	var obj = this;
	this.objBlock.find('.galleryDot a').removeClass('on');
	this.objBlock.find('.galleryDot a').eq(num).addClass('on');
}
sg_prt.dotClick = function(){
	var obj = this;
	this.objBlock.find('.galleryDot a').click(function(){
		obj.motionObj.eq(obj.objIndex).hide();
		obj.motionObj.eq($(this).index()).show();
		obj.webMotion($(this).index());
		obj.dotActive($(this).index());
		obj.objIndex = $(this).index();
		return false;
	});
}
sg_prt.webMotionScroll = function(){
	var obj = this;
	var animate = false; // scorll animate lock
	this.motionObj.eq(0).find('li').css('margin-top','50px');
	$(window).scroll(function(){
		var motionTop = obj.motionObj.offset().top-450-600;
		if ($(window).scrollTop()> motionTop )
		{
			if (!animate)
			{
				obj.objBlock.stop().animate({opacity:'1'},400);
				obj.motionObj.eq(0).find('li').each(function(e){
					$(this).stop().delay(200).animate({
						marginTop:'0px',
						opacity:1
					},300+(e*50));
				});
				animate=true;
			}
		}
	}).scroll();
}
sg_prt.webMotion = function(num,dir){
	var obj = this;
	var motionObj = this.motionObj.eq(num);
	var motionNum = num;
	var motionTimer = 20;
	if ( dir == 'next') {
		motionObj.find('li').each(function(e){
			$(this).css({
				marginLeft:50+'px',
				opacity:0
			});
			$(this).stop().animate({
				marginLeft:0+'px',
				opacity:1
			},300+(e*50));
		});
	} else {
		motionObj.find('li').each(function(e){
			$(this).css({
				marginLeft:-50+'px',
				opacity:0
			});
			$(this).stop().animate({
				marginLeft:0+'px',
				opacity:1
			},300+(e*50));
		});
	}
	if (motionNum == obj.objPaging-1) {
		obj.motionObj.parent().find('.prev').show();
		obj.motionObj.parent().find('.next').hide();
	} else if (motionNum <= 0) {
		obj.motionObj.parent().find('.prev').hide();
		obj.motionObj.parent().find('.next').show();
	} else {
		obj.motionObj.parent().find('.prev').show();
		obj.motionObj.parent().find('.next').show();
	}
}
sg_prt.openLayer = function(){
	var obj = this;
	this.objWebGallery.find('li a').click(function(){
		$('body').append('<div class="nBrandDimmed" style="position:fixed;width:100%;height:100%;background:#000;opacity: 0.8;top: 0;left: 0;z-index: 20;"></div>');
		obj.objLayerPopup.find('.imageArea img').attr('src',$(this).parent().find('img').attr('data-layer-image'));
		obj.objLayerPopup.attr('data-image-index',$(this).parent().attr('data-idx'));
		obj.objLayerPopup.find('.galleryLayerCounter .current').html($(this).parent().attr('data-idx'));
		obj.objLayerPopup.show();
		obj.objLayerPopup.find('.close').focus();
		obj.objLayerPopup.attr('data-back-index',$(this).parent().attr('data-idx'));
		return false;
	});
}
sg_prt.layerPopupButton = function(){
	var obj = this;
	var objIdx = null;
	var totalCounter = this.objLayerPopup.find('.galleryLayerCounter .total').text();
	var objL = this.objLayerPopup.find(this.focusObj).length;
	this.objLayerPopup.find('a').click(function(){
		if ($(this).hasClass('close')) {
			$(this).parent('.galleryLayerBox').find('.imageArea').css({'width':'1120px', 'height':'630px'});
			$(this).parent('.galleryLayerBox').find('.imageArea img').attr('src', '');
			$(this).parents('.galleryLayer').hide();
			$('body').find('.nBrandDimmed').remove();
			obj.objWebGallery.find('li').eq(obj.objLayerPopup.attr('data-back-index')-1).find('a').focus();
			return false;
		} else if ( $(this).hasClass('prev')) {
			objIdx = obj.objLayerPopup.attr('data-image-index');
			objIdx--;
			if ( objIdx <= 0 ) {
				objIdx = totalCounter;
			}
		} else if ( $(this).hasClass('next')) {
			objIdx = obj.objLayerPopup.attr('data-image-index');
			objIdx++;
			if ( objIdx > totalCounter ) {
				objIdx = 1;
			}
		}
		obj.objLayerPopup.attr('data-image-index',objIdx);
		obj.objLayerPopup.find('.galleryLayerCounter .current').html(objIdx);
		obj.objLayerPopup.find('.imageArea img').attr('src',obj.objWebGallery.find('li').eq(objIdx-1).find('img').attr('data-layer-image'));
		return false;
	});
	// keyboardtrap
	this.objLayerPopup.find(this.focusObj).last().on('keydown',function(e){
		if (e.keyCode == 9) {
			if (e.shiftKey) {
				obj.objLayerPopup.find(obj.focusObj).eq(objL-1).focus();
				e.stopPropagation();
			} else {
				obj.objLayerPopup.find(obj.focusObj).eq(0).focus();
				e.preventDefault();
			}
		}
	});
	this.objLayerPopup.find(this.focusObj).first().on('keydown',function(e){
		if (e.keyCode == 9) {
			if (e.shiftKey) {
				obj.objLayerPopup.find(obj.focusObj).eq(objL-1).focus();
				e.preventDefault();
			}
		}
	});
}

$(document).ready(function(){
	if($('.nBrand').length > 0) {
		function isTouchDevice(){
			return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
			//return true;
		}
		var beforeDevice = $("body").hasClass("mobile") ? "mobile" : "desktop";
		var device = $("body").hasClass("mobile") ? "mobile" : "desktop";
		$(window).resize(function() {
			device = $("body").hasClass("mobile") ? "mobile" : "desktop";
		});

		/* Normal Gallery */
		if ($('.slideGalleryBox').length) {
			var tabNav = $('.slideGalleryBoxWrap .tabNav li a');
			// 탭 클릭시
			tabNav.click(function(){
				var tabNavParents = $(this).parents('.slideGalleryBoxWrap');
				tabNav.parent().removeClass('on');
				$(this).parent().addClass('on');
				tabNavParents.find('.slideGallery').removeClass('on');
				tabNavParents.find('.slideGallery.gallery_'+($(this).parent().index()+1)).addClass('on');
				return false;
			});
			// 갤러리 스크립트
			$('.galleryThumbnail').each(function() {
				if($(this).find('li').eq(0).find ('a').length == 0) {
					var _this = $(this);
					var html = '';
					_this.find('ul li').each(function() {
						html = html + '<li><a href="#">'+$(this).html()+'</a></li>';
					});
					_this.find('ul').html(html);
				}
			});
			$('.slideGalleryBoxWrap .slideGallery').each(function() {
				var photo = $(this).find('.galleryImage ul');
				var _all = photo.find('li').length;
				photo.parents('.slideGallery').find('.navCounter').html('<span class="currentNum">1</span> / <span class="totalNum">'+_all+'</span>');
				photo.slick({
					infinite: false,
					prevArrow: photo.parents('.slideGallery').find('.galleryPrev'),
					nextArrow: photo.parents('.slideGallery').find('.galleryNext')
				});
				var thumb = $(this).find('.galleryThumbnail ul');
				//var countThumb = thumb.find('li').length;
				thumb.slick({
					infinite: false,
					slidesToShow: 7,
					slidesToScroll: 7,
					prevArrow: thumb.parents('.galleryThumbnail').find('.galleryThumbnailPrev'),
					nextArrow: thumb.parents('.galleryThumbnail').find('.galleryThumbnailNext')
				});
				thumb.find('li').removeClass('on').eq(0).addClass('on');
				photo.on('beforeChange', function(event, slick, currentSlide, next){
					thumb.slick('slickGoTo', next);
					thumb.find('li').removeClass('on').eq(next).addClass('on');
					var current = parseInt(next)+1;
					photo.parents('.slideGallery').find('.navCounter').html('<span class="currentNum">'+current+'</span> / <span class="totalNum">'+_all+'</span>');
				});
				thumb.find('li a').click(function() {
					photo.slick('slickGoTo', $(this).parent().index());
					if($(this).parents('.slideGalleryBoxWrap').hasClass('list_type')) {
						$(this).parents('.slideGalleryBoxWrap').find('.toggleList a.gallery').trigger('click');
					}
					return false;
				});
			});

			// 목록보기 버튼 추가
			$('.slideGalleryBoxWrap').each(function() {
				var container = $(this);
				if(container.find('.galleryImage ul li').length <= 7) return false;
				container.prepend('<div class="toggleList"><a href="#" class="list"><span class="hidden">List</span></a><a href="#" class="gallery"><span class="hidden">Gallery</span></a></div>');
				container.find('.toggleList a').click(function() {
					if($(this).hasClass('list')) {
						// 리스트형
						container.addClass('list_type');
						var thumb = container.find('.galleryThumbnail ul');
						if(thumb.hasClass('slick-initialized')) thumb.slick('unslick');
					} else {
						// 갤러리형
						container.removeClass('list_type');
						var thumb = container.find('.galleryThumbnail ul');
						if(!thumb.hasClass('slick-initialized')) {
							thumb.slick({
								infinite: false,
								//initialSlide: thumb.parents('.galleryThumbnail').find('ul li.on').index(),
								slidesToShow: 7,
								slidesToScroll: 7,
								prevArrow: thumb.parents('.galleryThumbnail').find('.galleryThumbnailPrev'),
								nextArrow: thumb.parents('.galleryThumbnail').find('.galleryThumbnailNext')
							});
							thumb.slick('slickGoTo', thumb.parents('.galleryThumbnail').find('ul li.on').index());
						}
					}
					return false;
				});
			});
			// for test
			//$('.slideGalleryBoxWrap').addClass('list_type');
		}

		/* Spread Gallery */
		if ($('.gallerySpread .galleryWrap').length) {
			$(document).ready(function(){
				$('.galleryWrap').hSpreadGallery();
				$('.galleryMobileCounter .total').html($('.galleryImageMobile ul li').length);
				$('.galleryImageMobile.swipe .swipe-wrap').slick({
					infinite: false,
					prevArrow: $('.galleryImageMobile .prev'),
					nextArrow: $('.galleryImageMobile .next')
				});
				$('.galleryImageMobile.swipe .swipe-wrap').on('beforeChange',function(event, slick, currentSlide, next){
					$('.galleryMobileCounter .current').text(next+1);
				});
				// 목록보기 버튼 추가
				$('.gallerySpread .galleryWrap').each(function() {
					var container = $(this);
					container.prepend('<div class="toggleList"><a href="#" class="list"><span class="hidden">List</span></a><a href="#" class="gallery"><span class="hidden">Gallery</span></a></div>');
					container.find('.galleryImage ul li a img').each(function() {
						$(this).attr('data-gallery-image', $(this).attr('src'));
					});
					container.find('.toggleList a').click(function() {
						if($(this).hasClass('list')) {
							// 리스트형
							container.addClass('list_type');
							container.find('.galleryImage ul li a img').each(function() {
								$(this).attr('src', $(this).attr('data-layer-image'));
							});
						} else {
							// 갤러리형
							container.removeClass('list_type');
							container.find('.galleryImage ul li a img').each(function() {
								$(this).attr('src', $(this).attr('data-gallery-image'));
							});
						}
						return false;
					});
				});
			});
		}

		// expand
		$('.btn_expand').on('click', function(){
			var $btn = $(this);
			var $obj = $('.expand_wrap');
			// 열릴 때
			if( $(this).attr('data-activated') == 'false' ){
				$(this).addClass('on');
				$obj.slideDown({
					duration : 1000,
					easing : 'easeOutCubic'
				});
				if( device == "mobile" ) {
					$('body,html').animate({
						scrollTop : $obj.offset().top - $('.topBar').height()
					}, 1000, 'easeOutCubic', function(){
						$btn.attr('data-activated', 'true');
					});
				}
				else {
					$('body,html').animate({
						scrollTop : $obj.offset().top
					}, 1000, 'easeOutCubic', function(){
						$btn.attr('data-activated', 'true');
					});
				}
			}
			// 닫힐 때
			else if( $(this).attr('data-activated') == 'true'){
				$(this).removeClass('on');
				$obj.slideUp({
					duration : 1000,
					easing : 'easeOutCirc',
					complete : function(){
						$btn.attr('data-activated', 'false');
					}
				});

			}
		});

		// progress
		if($('.section_slide').length>0) {
			if(isTouchDevice()) {
				$('.section_slide').addClass('touchable');
			}
			var touchDragMode;
			if(parseInt($('.nBrand').css('minWidth')) <= 740) {
				touchDragMode = 'm';
			} else if($('.section_slide').hasClass('touchable') && parseInt($('.nBrand').css('minWidth')) >= 741) {
				touchDragMode = 't';
			} else {
				touchDragMode = 'd';
			}
			$(window).resize(function() {
				if(parseInt($('.nBrand').css('minWidth')) <= 740) {
					touchDragMode = 'm';
				} else if($('.section_slide').hasClass('touchable') && parseInt($('.nBrand').css('minWidth')) >= 741) {
					touchDragMode = 't';
				} else {
					touchDragMode = 'd';
				}
				setTimeout(function() {
					if(parseInt($('.nBrand').css('minWidth')) <= 740) {
						touchDragMode = 'm';
					} else if($('.section_slide').hasClass('touchable') && parseInt($('.nBrand').css('minWidth')) >= 741) {
						touchDragMode = 't';
					} else {
						touchDragMode = 'd';
					}
				}, 300);
			});
			var obj = $('.section_slide .slide_content_wrap .slide_wrap');
			var menu = $('.section_slide .slide_nav_wrap ul.nav_list_wrap');
			var menuList = menu.find('li.nav_list');
			var menuButton = $('.section_slide .slide_nav_wrap button');
			var prevButton = $('.section_slide .slide_nav_wrap button.list_prev');
			var nextButton = $('.section_slide .slide_nav_wrap button.list_next');
			prevButton.prop('disabled', true);
			// menu
			menuList.find('a').click(function() {
				// drag
				if(touchDragMode == 'm' || touchDragMode == 't') {
					// 모바일 화면
					var aIdx=$(this).parent().index();
					// obj.find('.slide_list').hide().eq(aIdx+1).css('display', 'block');
					obj.find('.slide_list').removeAttr('style').eq(aIdx+1).css('display', 'block');
					//obj.css('left', 0);
					// menu position
					if(touchDragMode == 'm') {
						var current = aIdx;
						var currentPage = Math.floor(current/3);
						var widthMenu = parseInt(menuList.eq(0).css('width'))*3;
						//menu.stop().animate({'left':currentPage*widthMenu*-1}, 300);
						menu.stop().css({'left':currentPage*widthMenu*-1});
					}
				} else {
					// 데스크탑 화면
					obj.find('.slide_list').removeAttr('style');
					var aIdx=$(this).parent().index();
					var w = 0;
					obj.find('.slide_list').each(function(idx) {
						if(idx-1 < aIdx) {
							w=w+parseInt($(this).css('width'));
						}
					});
					w=w-352;
					//obj.css({'left':w*-1});
					obj.stop().animate({'left':w*-1}, 900, 'easeOutCirc');
				}
				// active
				menuList.find('a').removeClass('on');
				$(this).addClass('on');

				// button
				var current = $(this).parent().index();
				var all = menuList.length;
				fixMenuArrow(current, all);
				return false;
			});
			menuButton.click(function() {
				var current = menuList.find('a.on').parent().index();
				var all = menuList.length;
				if($(this).hasClass('list_prev')) {
					// left
					current = current-1;
				} else {
					// right
					current = current+1;
				}
				fixMenuArrow(current, all);
				menuList.eq(current).find('a').trigger('click');
				if(touchDragMode == 'm') {
					// 모바일인 경우
					var currentPage = Math.floor(current/3);
					var widthMenu = parseInt(menuList.eq(0).css('width'))*3;
					//menu.stop().animate({'left':currentPage*widthMenu*-1}, 300);
					menu.stop().css({'left':currentPage*widthMenu*-1});
				}
				return false;
			});
			// drag
			$(window).resize(function() {
				dragProgress();
			});
			$(window).scroll(function() {
				// 메뉴 위치 및 사이즈 조절
				if(touchDragMode == 'm') {
					var all = menuList.length;
					var current = menuList.find('a.on').parent().index();
					var currentPage = Math.floor(current/3);
					//var widthMenu = parseInt(menuList.eq(0).css('width'))*3;
					var menuWidthEach=parseInt((parseInt($(window).width())-(parseInt(menu.parent().find('button').outerWidth())*2))/3);
					fixMenuArrow(current, all);
					menu.css({'left':(currentPage*(menuWidthEach*3)*-1), 'width':(menuWidthEach*all)});
				} else {
					menu.removeAttr('style');
				}
				if(touchDragMode != 'd') {
					if(obj.find('.slide_list').eq(current+1).css('display') != 'block') obj.find('.slide_list').eq(current+1).css('display', 'block');
				}
			});
			dragProgress();
			menuList.eq(0).find('a').trigger('click');
			function dragProgress() {

				// 드래그 관련 스크립트 초기화
				if(touchDragMode == 'm') {
					// 모바일 컨텐츠
					dragModeContent('off');
					// 모바일 메뉴
					dragModeMenu('on');
					// 메뉴 위치 및 사이즈 조절
					var all = menuList.length;
					var current = menuList.find('a.on').parent().index();
					var currentPage = Math.floor(current/3);
					var menuWidthEach=parseInt((parseInt($(window).width())-(parseInt(menu.parent().find('button').outerWidth())*2))/3);
					fixMenuArrow(current, all);
					menu.css({'left':(currentPage*(menuWidthEach*3)*-1), 'width':(menuWidthEach*all)});
					if(obj.find('.slide_list').eq(current+1).css('display') != 'block') obj.find('.slide_list').eq(current+1).css('display', 'block');
				} else if(touchDragMode == 't') {
					menu.removeAttr('style');
					if(obj.find('.slide_list').eq(current+1).css('display') != 'block') obj.find('.slide_list').eq(current+1).css('display', 'block');
					// 타블렛 컨텐츠
					dragModeContent('off');
					// 타블렛 메뉴
					dragModeMenu('off');
					// 메뉴 위치 및 사이즈 조절
					var current = menuList.find('a.on').parent().index();
				} else {
					// 데스크탑 컨텐츠
					dragModeContent('on');
					// 데스크탑 메뉴
					dragModeMenu('off');
					// 메뉴 위치 및 사이즈 조절
					menu.removeAttr('style');
					// 컨텐츠 가로 스크롤 위치 조절
					obj.find('.slide_list').removeAttr('style');
				}

				function dragModeContent(a) {
					if(a=='off') {
						// Destroy
						if(obj.hasClass('ui-draggable')) {
							obj.draggable('destroy');
							//obj.stop().css({'left':0});
							obj.find('.slide_list').hide();
							setTimeout(function(){
								menuList.find('a.on').trigger('click');
							}, 100);
						}
					} else {
						// Dragable
						if(!obj.hasClass('ui-draggable')) {
							//obj.stop().css({'left':0});
							obj.draggable({
								axis: "x",
								stop: function() {
									// contents
									var allWidth=0;
									var left = parseInt(obj.css('left'));
									obj.find('.slide_list').each(function() {
										allWidth=allWidth+parseInt($(this).css('width'));
									});
									if(left > 0) {
										obj.stop().css({'left':0});
									}
									if((left*-1) > allWidth-1920) {
										obj.stop().css({'left':((allWidth-1920)*-1)});
									}
									// menu
									obj.find('.slide_list').each(function(idx) {
										var myleft = parseInt($(this).offset().left) - parseInt(obj.parents('.l_slide_wrap').offset().left) - 352;
										if(myleft>=0) {
											return false;
										}
										fixMenuArrow(idx-1, menuList.length);
										menuList.find('a').removeClass('on');
										if(idx==0) menuList.eq(0).find('a').addClass('on');
										else menuList.eq(idx-1).find('a').addClass('on');
									});
								},
								drag: function() {
									// interaction
									obj.find('.slide_list').find('.is_ani').each(function() {
										// 애니메이션 실행 - 정방향
										var w = (parseInt($(this).offset().left)+parseInt($(this).width()/2));
										var s = (parseInt($(window).width())/2);
										if($(this).hasClass('ani') && w<s) {
											$(this).removeClass('ani');
										}
										// 애니메이션 초기화 - 역방향
										if(!$(this).hasClass('ani') && w>s) {
											$(this).addClass('ani');
										}
									});
								}
							});
							setTimeout(function(){
								obj.find('.slide_list').removeAttr('style');
								var aIdx=menuList.find('a.on').parent().index();
								var w = 0;
								obj.find('.slide_list').each(function(idx) {
									if(idx-1 < aIdx) {
										w=w+parseInt($(this).css('width'));
									}
								});
								w=w-352;
								obj.css({'left':w*-1});
									//obj.stop().animate({'left':w*-1}, 900, 'easeOutCirc');
							}, 100);
						}
					}
				}
				function dragModeMenu(a) {
					/*
					if(a=='off') {
						if($('.nBrand').data('canMenuProgressDrag') == true) {
							$('.nBrand').data('canMenuProgressDrag', false);
							menu.draggable('destroy');
							menu.css({'left':0});
						}
					} else {
						if($('.nBrand').data('canMenuProgressDrag') != true) {
							$('.nBrand').data('canMenuProgressDrag', true);
							menu.draggable({
								axis: "x",
								stop: function() {
									// drag
									var allWidth=0;
									var left = parseInt(menu.css('left'));
									menu.find('.nav_list').each(function() {
										allWidth=allWidth+parseInt($(this).css('width'));
									});
									if(left >0) {
										menu.css({'left':0});
									}
									if((left*-1) > allWidth-(parseInt($(window).width())*2/3)) {
										menu.css({'left':((allWidth-(parseInt($(window).width())*2/3))*-1)});
									}
									// left > -321
								}
							});
						}
					}
					*/
				}
			}
			function fixMenuArrow(current, all) {
				if(current < 0) current = 0;
				else if(current >= all) current = all-1;
				if(current==0) {
					prevButton.prop('disabled', true);
					nextButton.prop('disabled', false);
				} else if(current==all-1) {
					prevButton.prop('disabled', false);
					nextButton.prop('disabled', true);
				} else {
					prevButton.prop('disabled', false);
					nextButton.prop('disabled', false);
				}
			}
		}

		// prgress Drag guide
		var dragGuide = function(){
			var $guide = $('.slide_drag_guide');
			var $e = $guide;

			if($guide.length == 0) return false;

			var browserTop = $(window).scrollTop(),
			browserHeight = $(window).height(),
			browserBottom = (browserTop + browserHeight);
			var elementTop = $e.offset().top;
			var elementBottom = $e.offset().top + $e.outerHeight();

			var topTrigger = browserTop < elementTop && elementTop < browserBottom;
			var bottomTrigger = browserTop < elementBottom && elementBottom < browserBottom;

			var trigger1 = topTrigger && bottomTrigger;
			var trigger2 = browserTop > elementTop && elementBottom > browserBottom;

			if(trigger1 || trigger2) {
				if($guide.hasClass("init")) return false;
				$guide.addClass("init");
				$guide.find("figure").delay(500);
				for (var i = 2 - 1; i >= 0; i--) {
					$guide.find("figure").animate({
						marginLeft:-6
					},300).animate({
						marginLeft:6
					},300);
				}
				$guide.find("figure").animate({
					marginLeft: 0
				},400);
				$guide.delay(2400).fadeOut(1000);
			}
		}
		$(window).scroll(function(){
			dragGuide();
		});

		// video
		if($('.vid_hero_wrap').length>0) {
			$('.vid_hero_wrap .l_vid_wrap .btn_play').click(function() {
				var videoType=$(this).attr('data-video-type');
				$(this).parents('.l_vid_wrap').find('.l_tit_wrap').hide();
				if(videoType=='youtube') {
					var videoId=$(this).attr('data-video-id');
					var videoTitle="";
					if($(this).attr('data-video-title')) videoTitle = $(this).attr('data-video-title');
					$(this).parents('.l_vid_wrap').append('<div class="video"><iframe src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1" title="'+videoTitle+'" allowfullscreen="1"></iframe><button class="close"><span class="blind">Close</span></button></div>');
					$(this).parents('.l_vid_wrap').find('.video iframe').css('height', $(this).parents('.l_vid_wrap').find('.vid_wrap img').outerHeight());
					$(this).parents('.l_vid_wrap').find('.video button.close').unbind('click').click(function() {
						$(this).parents('.l_vid_wrap').find('.l_tit_wrap').show();
						$(this).parents('.video').remove();
					});
				}
			});
			$(window).resize(function() {
				// 리사이즈시, 동영상 레이어 팝업 크기 변경
				if($('.vid_hero_wrap .l_vid_wrap .video iframe').length > 0) {
					var videoObj = $('.vid_hero_wrap .l_vid_wrap .video iframe');
					videoObj.css('height', videoObj.parents('.l_vid_wrap').find('.vid_wrap img').outerHeight());
				}

			});
		}
		// video popup
		$('.section_gallery_movie .btn_play, .link_play').click(function() {
			$('#movieLayer').remove();
			$('#movieDimmed').remove();
			var videoType=$(this).attr('data-video-type');
			if(videoType=='youtube') {
				var container = ($(this).parents('section').find('.movie_wrap').length > 0) ? $(this).parents('section').find('.movie_wrap') : $(this).parents('section');
				var videoId=$(this).attr('data-video-id');
				var videoTitle="";
				if($(this).attr('data-video-title')) videoTitle = $(this).attr('data-video-title');
				container.append('<div class="dimmed" id="movieDimmed"></div><div class="movie-layer" id="movieLayer"><div class="video"><iframe src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1" title="'+videoTitle+'" allowfullscreen="1"></iframe><button class="close"><span class="blind">Close</span></button></div></div>');
				$('#movieLayer .video button.close').unbind('click').click(function() {
					if($('#movieDimmed').is('div')) $('#movieDimmed').remove();
					if($('#movieLayer').is('div')) $('#movieLayer').remove();
					return false;
				});
				/*
				$('#movieDimmed').unbind('click').click(function() {
					$('#movieLayer').find('.close').trigger('click');
					return false;
				});
				*/
			}
			return false;
		});

		// about N Scripts;
		var responsiveBg = function(){
			var r = $(".responsive_bg");
			$(document).on({
				deviceChange: function(){
					r.each(function(){
						if(device == "mobile" && $(this).attr("data-mobile-bg")) {
							$(this).css({
								backgroundImage: "url("+$(this).attr("data-mobile-bg")+")"
							});
						}else if(device == "desktop" && $(this).attr("data-bg")) {
							$(this).css({
								backgroundImage: "url("+$(this).attr("data-bg")+")"
							});
						}else {
							$(this).css({
								backgroundImage: "none"
							});
						}

					});
				}
			});
			$(document).trigger("deviceChange");
		}
		if($('.aboutN').length > 0) {
			if(isTouchDevice()) {
				$('body').addClass('touchable');
			}
			$(window).resize(function() {
				device = $("body").hasClass("mobile") ? "mobile" : "desktop";
				if(beforeDevice != device) {
					$(document).trigger("deviceChange");
				}

				beforeDevice = device;

			});
			if($(".responsive_bg").length > 0) {
				responsiveBg();
			}
		}
		// Origin
		if($('.nOrigin').length > 0) {
			$(window).resize(function() {
				device = $("body").hasClass("mobile") ? "mobile" : "desktop";
				if(beforeDevice != device) {
					$(document).trigger("deviceChange");
				}

				beforeDevice = device;

			});
			if($(".responsive_bg").length > 0) {
				responsiveBg();
			}
		}
		// 동영상 갤러리
		$('.section_gallery_movie .gallery_list').each(function() {
			var _this = $(this);
			var _all = _this.find('.movie').length;
			_this.parents('.section_wrap').find('.page').html('<strong>1</strong> / '+_all);
			var subject = _this.find('.movie').eq(0).find('.subject').text();
			var date = _this.find('.movie').eq(0).find('.date').text();
			_this.parents('.section_wrap').find('.movie-info').html('<div class="subject">'+subject+'</div><div class="date">'+date+'</div>');
			_this.slick({
				infinite: false,
				centerMode: true,
				centerPadding: '16px',
				responsive: [{
					breakpoint: 740,
					settings: {
						infinite: false,
						centerMode: false,
						centerPadding: 0,
					}
				}]
			});
			_this.on('afterChange', function(event, slick, currentSlide){
				var current = parseInt(currentSlide)+1;
				_this.parents('.section_wrap').find('.page').html('<strong>'+current+'</strong> / '+_all);
				var subject = _this.find('.slick-current').find('.subject').text();
				var date = _this.find('.slick-current').find('.date').text();
				_this.parents('.section_wrap').find('.movie-info').html('<div class="subject">'+subject+'</div><div class="date">'+date+'</div>');
			});
		});

		// expand car spec - slick
		var $obj_slick = $('.section_expand .list_wrap.expand_car_spec');
		function setDotsPos($obj) {
			$obj.css({
				top:$obj_slick.find('.img_wrap').height()
			});
		}
		function listSlick($obj, state){
			var $dots_slick = $obj_slick.find('.slick-dots');
			switch(state) {
				case 'slick' :
					$obj.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows:false,
						dots: true
					});
					setDotsPos($dots_slick);
					break;
				case 'unslick' :
					$obj.slick('unslick');
					break;
				case 'init' :
					$obj.slick('init');
					setTimeout(function(){setDotsPos($dots_slick)},500);
					break;
			}
		}
		$('body, html').trigger("scroll");
		$('.btn_expand').on('click', function(){
			if( $('body').hasClass('mobile') && !$obj_slick.hasClass('slick-initialized')) {
				listSlick($obj_slick, 'slick');
			}
			$obj_slick.find('.slick-dots').css({
				top:$obj_slick.find('.img_wrap').height()
			});
			if($obj_slick.hasClass('slick-initialized')) $obj_slick.slick('setPosition');
			setDotsPos($obj_slick.find('.slick-dots'));
		});
		$(window).scroll(function() {
			if($obj_slick.hasClass('slick-initialized')) $obj_slick.slick('setPosition');
		})
		$(window).resize(function(){
			if( $('body').hasClass('pc') && $obj_slick.hasClass('slick-initialized')) {
				listSlick($obj_slick, 'unslick');
			}
			if( $('body').hasClass('mobile') && !$obj_slick.hasClass('slick-initialized')) {
				listSlick($obj_slick, 'slick');
			}
			if( $('body').hasClass('mobile') && $obj_slick.hasClass('slick-initialized')) {
				listSlick($obj_slick, 'init');
			}
			if($obj_slick.hasClass('slick-initialized')) $obj_slick.slick('setPosition');
		});

		// NGineers tab
		if($('.section_tab').length>0) {
			if(isTouchDevice()) {
				$('.section_tab').addClass('touchable');
			}
		}
		$('.section_tab .tab_list li.tab a').click(function() {
			// tab
			$(this).parents('.tab_list').find('li.tab').removeClass('on');
			$(this).parent().addClass('on');
			// cont
			var obj = $('#'+$(this).attr('href').split('#')[1]);
			$(this).parents('.section_tab').find('.tab_panel').removeClass('on');
			obj.addClass('on');
			obj.find('[data-element-type=target]').removeAttr('style');
			return false;
		});

		// Technology (plus button)
		if($('.tech_wrap .btn_tech_detail').length > 0) {
			var obj = $('.btn_tech_detail');
			obj.on('click',function(){
				var toggle = $(this).attr('aria-pressed') === 'false' ? false : true;
				obj.removeClass('on');
				obj.attr('aria-pressed', 'false');
				if(!toggle) {
					$(this).addClass('on');
				}
				else {
					$(this).removeClass('on');
				}
				toggle = !toggle;
				$(this).attr('aria-pressed', toggle);
			});
			$('.section_tech_wrap').click(function(event) {
				if(parseInt($('.nBrand').css('minWidth')) >= 741) {
					var target = $(event.target);
					if(target.is('button') || target.is('.bubble')  || target.is('a')) return true;
					obj.removeClass('on');
					obj.attr('aria-pressed', 'false');
					return false;
				}
			});
		}
		if($('.section_core .slope').length > 0) {
			$(window).scroll(function() {
				var win_h = window.innerHeight;
				var posY = $(document).scrollTop();
				var $obj = $('.section_core .slope .bg_wrap');
				if( $obj.offset().top - $(document).scrollTop() <= win_h / 2 &&
					$obj.offset().top - $(document).scrollTop() >= win_h / 2 - 1000){
					$obj.addClass('ani');
				}
			});
		}
	}
});

$(document).ready(function(){
	var returnFocus;

	if($('.Motorsport').length > 0) {
		var device = $("body").hasClass("mobile") ? "mobile" : "desktop";
		$(window).resize(function() {
			device = $("body").hasClass("mobile") ? "mobile" : "desktop";
		});

		// specification (TCR)
		$('.section_tech_spec .exterior_image_list').each(function(){
			var _this = $(this);
			var _all = _this.find('.exterior').length;
			if(!_this.hasClass('slick-initialized')) {
				_this.slick({
					infinite: false,
					dots: true,
					arrows: true
				});
			};
			function fixArrowTop() {
				setTimeout(function() {
					var myH = (parseInt(_this.find('.slick-current .img img').height())/2);
					if(parseInt($(window).width()) > 740) {
						_this.find('.slick-arrow').removeAttr("style");
					} else {
						_this.find('.slick-arrow').css('top', myH);
					}
				}, 500);
			}
			$(window).resize(function() {
				fixArrowTop();
			});
			$(window).scroll(function() {
				fixArrowTop();
			});
			fixArrowTop();
			$(this).find("a.zoom").on({
				click: function(e){
					e.preventDefault();
					e.stopPropagation(); // 2017-11-17 추가
					var mylayer = $($(this).attr('href'));
					mylayer.addClass("on").siblings().removeClass("on");
					mylayer.parent().addClass("on");
					mylayer.attr("tabindex", -1).focus();
					if(parseInt($(window).width()) > 740) {
						var lHeight = -(mylayer.outerHeight() / 2);
						mylayer.css({
							marginTop: lHeight
						});
					};
					returnFocus = $(this);
				}
			});
			// 2017-11-17 추가
			$(this).parents('.section_tech_spec').click(function(e) {
				e.preventDefault();
				$(this).find('.exterior_layer.on button.btn_close').trigger('click');
			});
			$(this).parents('.section_tech_spec').find('.exterior_layer').click(function(e) {
				e.stopPropagation();
			});
		});
		// KV 동영상 버튼 위치
		if($('.contTop .topVisualArea .topVisual .titWrap .video').length > 0) {
			function fixVideoBtnPos() {
				var myVideo = $('.contTop .topVisualArea .topVisual .titWrap .video');
				var myH = 0;
				if(device=='desktop') {
					myH = 900;
				} else {
					myH = parseInt($('.contTop .topVisualArea .topVisual .visual .responsive-image').outerHeight());
				}
				myVideo.css('height', myH).show();
			}
			fixVideoBtnPos();
			$(window).resize(function() {
				fixVideoBtnPos();
			});
			$(window).scroll(function() {
				fixVideoBtnPos();
			});
		}

		// News (WRC)
		$('.section_news .newslist').each(function() {
			var _this = $(this);
			var _all = _this.find('.news').length;
			if(!_this.hasClass('slick-initialized')) {
				_this.slick({
					infinite: false,
					dots: true,
					arrows: true
				});
			}
			// 레이어 복사해서 밖으로 빼기
			_this.find('.news').each(function() {
				$('#'+$(this).find('a').attr('href').split('#')[1]).clone().appendTo($(this).parents('.section_news'));
			});
			function fixArrowTop() {
				setTimeout(function() {
					var myH = (parseInt(_this.find('.news.slick-current .img img').height())/2)-17.5;
					if(parseInt($(window).width()) > 740) {
						_this.find('.slick-arrow').css('top', 245);
					} else {
						_this.find('.slick-arrow').css('top', myH);
					}
				}, 500);
			}
			$('.section_news .newslist .layer_wrap').remove();
			fixArrowTop();
			$(window).resize(function() {
				fixArrowTop();
			});
			$(window).scroll(function() {
				fixArrowTop();
			});
		});

		// 동영상 갤러리 (WRC)
		$('.section_gallery_video .gallery_list').each(function() {
			var _this = $(this);
			var _all = _this.find('.video').length;
			_this.parents('.section_wrap').find('.page').html('<strong>1</strong> / '+_all);
			var subject = _this.find('.video').eq(0).find('.subject').text();
			var date = _this.find('.video').eq(0).find('.date').text();
			_this.parents('.section_wrap').find('.video-info').html('<div class="subject">'+subject+'</div><div class="date">'+date+'</div>');
			_this.slick({
				infinite: false,
				centerMode: true,
				centerPadding: '16px',
				responsive: [{
					breakpoint: 740,
					settings: {
						infinite: false,
						centerMode: false,
						centerPadding: 0,
					}
				}]
			});
			_this.on('afterChange', function(event, slick, currentSlide){
				var current = parseInt(currentSlide)+1;
				_this.parents('.section_wrap').find('.page').html('<strong>'+current+'</strong> / '+_all);
				var subject = _this.find('.slick-current').find('.subject').text();
				var date = _this.find('.slick-current').find('.date').text();
				_this.parents('.section_wrap').find('.video-info').html('<div class="subject">'+subject+'</div><div class="date">'+date+'</div>');
			});
			// 모바일에서 팝업 위치
			function fixVideoGalleryTop(v) {
				var myVideo = v.parents('.section_gallery_video').find('.layer_wrap .layer_inner');
				if(device=='desktop') {
					myVideo.removeAttr('style');
				} else {
					var h = parseInt(v.offset().top) - parseInt(v.parents('.section_gallery_video').offset().top);
					myVideo.css('top', h);
				}
			}
			fixVideoGalleryTop(_this);
			$(window).resize(function() {
				fixVideoGalleryTop(_this);
			});
		});

		// 포토 갤러리 (WRC)
		$('.section_gallery_photo').each(function() {
			var container = $(this).find('.gallery_content');
			container.each(function() {
				var photo = $(this).find('.gallery_list');
				var thumb = $(this).find('.gallery_thumb_list');
				var page = $(this).find('.page');
				var _all = photo.find('.photo').length;
				page.html('<strong>1</strong> / '+_all);
				photo.slick({
					infinite: false,
					responsive: [{
						breakpoint: 740,
						settings: {
							infinite: false,
						}
					}]
				});
				var countThumb = thumb.find('.thumb').length;
				thumb.slick({
					infinite: false,
					slidesToShow: 7,
					slidesToScroll: 7
				});
				thumb.find('.thumb').removeClass('on').eq(0).addClass('on');
				photo.on('beforeChange', function(event, slick, currentSlide, next){
					thumb.slick('slickGoTo', next);
					thumb.find('.thumb').removeClass('on').eq(next).addClass('on');
					var current = parseInt(next)+1;
					page.html('<strong>'+current+'</strong> / '+_all);
				});
				thumb.find('.thumb a').click(function() {
					photo.slick('slickGoTo', $(this).parent().index());
					if($(this).parents('.section_wrap').hasClass('list_type')) {
						$(this).parents('.section_wrap').find('.toggleList a.gallery').trigger('click');
					}
					return false;
				});
			});
			// 목록보기 버튼 추가
			var listCont = container.find('.gallery_list');
			var isOk = false;
			listCont.each(function() {
				if($(this).find('.photo').length > 7) isOk = true;
			});
			if(isOk) {
				var tContainer = $(this).find('.section_wrap');
				var mContainer = $(this).find('.gallery_content');
				if($(this).find('.tabs').length > 0) mContainer = $(this).find('.tabs');
				mContainer.prepend('<div class="toggleList"><a href="#" class="list"><span class="hidden">List</span></a><a href="#" class="gallery"><span class="hidden">Gallery</span></a></div>');
				mContainer.find('.toggleList a').unbind('click').click(function() {
					var thumb = tContainer.find('.gallery_thumb_list');
					var photo = tContainer.find('.gallery_list');
					if($(this).hasClass('list')) {
						// 리스트형
						tContainer.addClass('list_type');
						if(thumb.hasClass('slick-initialized')) thumb.slick('unslick');
					} else {
						// 갤러리형
						tContainer.removeClass('list_type');
						photo.slick('setPosition');
						if(!thumb.hasClass('slick-initialized')) {
							thumb.slick({
								infinite: false,
								slidesToShow: 7,
								slidesToScroll: 7
							});
							thumb.slick('slickGoTo', thumb.find('.thumb.on').index());
						}
					}
					return false;
				});
			}
		});

		// Crews (WRC)
		$('.section_crews .crews_list').each(function() {
			var _this = $(this);
			var _all = _this.find('.drivers').length;
			_this.slick({
				infinite: false,
				dots: true
			});
		});

		// expend (WRC)
		$('.btn_expand').click(function() {
			var $btn = $(this);
			var $obj = $('.section_expand');
			// 열릴 때
			if( $(this).attr('data-activated') == 'false' ){
				$(this).addClass('on');
				$obj.slideDown({
					duration : 1000,
					easing : 'easeOutCubic'
				});
				if( device == "mobile" ) {
					$('body,html').animate({
						scrollTop : $obj.offset().top - $('.topBar').height()
					}, 1000, 'easeOutCubic', function(){
						$btn.attr('data-activated', 'true');
					});
				}
				else {
					$('body,html').animate({
						scrollTop : $obj.offset().top
					}, 1000, 'easeOutCubic', function(){
						$btn.attr('data-activated', 'true');
					});
				}
			}
			// 닫힐 때
			else if( $(this).attr('data-activated') == 'true'){
				$(this).removeClass('on');
				$obj.slideUp({
					duration : 1000,
					easing : 'easeOutCirc',
					complete : function(){
						$btn.attr('data-activated', 'false');
					}
				});

			}
		});

		// tabs (WRC)
		$('.tabs > ul > li a').click(function() {
			var container = $(this).parents('.tabs');
			var mycont = $("#"+$(this).attr('href').split('#')[1]);
			container.find('.tabs_cont').hide();
			mycont.show();
			if(mycont.find('.gallery_list').length > 0) {
				// 탭 안에 갤러리가 있는 경우
				mycont.find('.gallery_list').slick('setPosition');
			}
			if(mycont.find('.gallery_thumb_list').length > 0) {
				// 탭 안에 갤러리 썸네일이 있는 경우
				mycont.find('.gallery_thumb_list').slick('setPosition');
			}

			container.find('> ul > li').removeClass('on');
			$(this).parent().addClass('on');
			container.find('.selected a').html($(this).text());
			container.removeClass('open');
			return false;
		});
		$('.tabs > .selected a').click(function() {
			var container = $(this).parents('.tabs');
			container.toggleClass('open');
			return false;
		});

		// 아코디언 (WRC)
		$('.section_accordion .item .tit a').click(function() {
			var $obj = $(this).parents('.item').find('.cont');
			//var accTop = $(this).parents('.accordion_wrap').offset().top;
			//var accHeight = $obj.parents('.item').find('.tit').outerHeight();
			//var accIndex = $obj.parents('.item').index();

			if($obj.css('display') != 'block') {
				// block
				//$(this).parents('.section_accordion').find('.item .cont').not($obj).slideUp();
				$obj.slideDown();
				$obj.parents('.item').find('.tit').addClass('open');
				// scroll
				if( device == "mobile" ) {
					$('body,html').stop().animate({
						//scrollTop : (accTop+(accHeight*accIndex)) - $('.topBar').height()
						scrollTop : parseInt($obj.parents('.item').offset().top) - $('.topBar').height()
					}, 900, 'easeOutCubic');
				} else {
					$('body,html').stop().animate({
						//scrollTop : (accTop+(accHeight*accIndex))
						scrollTop : parseInt($obj.parents('.item').offset().top)
					}, 900, 'easeOutCubic');
				}
				// gallery_list
				if($obj.find('.gallery_list').length > 0) {
					$obj.find('.gallery_list').slick('setPosition');
				}

			} else {
				// none
				$obj.slideUp();
				$obj.parents('.item').find('.tit').removeClass('open');
				//$(this).parents('.accordion_wrap').find('.item .cont').slideUp();
				//$(this).parents('.accordion_wrap').find('.item .tit').removeClass('open');
			}
			return false;
		});

		// 자동차 교차 (WRC)
		$('.section_compare').each(function() {
			var container = $(this);
			var handle = container.find('.controller');
			var target = container.find('.frame .car_wrap02');
			handle.draggable({
				axis: "x",
				containment: 'parent',
				handle: handle.find('img'),
				drag: function() {
					target.stop().css('width', handle.css('left'));
				}
			});
			$(window).resize(function() {
				handle.removeAttr('style');
				target.removeAttr('style');
			});
		});

		// 동영상 팝업
		$('.btn_play, .link_play').click(function() {
			$('#videoLayer').remove();
			$('#videoDimmed').remove();
			var videoType=$(this).attr('data-video-type');
			var layerName = 'video-layer';
			if($(this).hasClass('gallery_vid_play')){
				layerName = 'video-layer gallery_vid_layer';
			}
			if(videoType=='youtube') {
				var container = $(this).parents('section');
				if($(this).parents('section').find('.video_wrap').length > 0) {
					container = $(this).parents('section').find('.video_wrap')
				} else if($(this).parents('.topVisual').length > 0) {
					container = $(this).parents('.topVisual');
				}
				var videoId=$(this).attr('data-video-id');
				var videoTitle="";
				if($(this).attr('data-video-title')) videoTitle = $(this).attr('data-video-title');
				container.append('<div class="layer_wrap fixed_layer_wrap on"><div class="layer '+layerName+'" id="videoLayer"><div class="layer_dim" id="videoDimmed"></div><div class="layer_inner"><div class="video"><iframe src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1" title="'+videoTitle+'" allowfullscreen="1"></iframe><button class="close"><span class="blind">Close</span></button></div></div></div></div>');
				//$('html').addClass('modal-on');
				$('#videoLayer .video button.close').unbind('click').click(function() {
					$(this).parents('.layer_wrap').remove();
					//$('html').removeClass('modal-on');
					if($('#videoDimmed').is('div')) $('#videoDimmed').remove();
					if($('#videoLayer').is('div')) $('#videoLayer').remove();
					if(returnFocus) {
						returnFocus.focus();
					}
					return false;
				});
				$('#videoDimmed').unbind('click').click(function() {
					$('#videoLayer').find('.close').trigger('click');
					return false;
				});
			}
			// 동영상 갤러리의 경우, 모바일 화면에서 top값 맞추기
			if($(this).parents('.section_gallery_video').length > 0) {
				var myVideo = $(this).parents('.section_gallery_video').find('#videoLayer .layer_inner');
				if(device=='desktop') {
					myVideo.removeAttr('style');
				} else {
					var h = parseInt(myVideo.parents('.section_gallery_video').find('.gallery_list').offset().top) - parseInt(myVideo.parents('.section_gallery_video').offset().top) - 1;
					myVideo.css('top', h);
				}
			}
			returnFocus = $(this);
			return false;
		});

		// 레이어 팝업
		$('.link_layer').click(function() {
			var mylayer = $("#"+$(this).attr('href').split('#')[1]);
			if(mylayer.length > 0) {
				mylayer.addClass('on');
				$('html').addClass('modal-on');
				mylayer.attr('tabIndex', -1).focus();
				returnFocus = $(this);
			}
			return false;
		});
		// 레이어 닫기
		$('.layer_wrap .btn_close').click(function() {
			var mylayer = $(this).parents('.layer_wrap');
			//mylayer.hide();
			mylayer.removeClass('on');

			if($(this).parents('.exterior_wrap').length>0) { // exterior_wrap 전용
				$(this).parents('.layer').removeClass('on');
			}
			$('html').removeClass('modal-on');
			// nur24 gallery
			if($(this).parents('.gallery_wrap').length>0) {
				var idx = $(this).parents('.gallery_wrap').find('.bd_content ul li.img_list.on').index();
				// go to photo
				var photo = $(this).parents('.gallery_wrap').find('.gallery_content .gallery_list');
				photo.slick('slickGoTo', idx, true);
			}
			if(returnFocus) {
				returnFocus.focus();
			}
			return false;
		});
		$('.layer_wrap .layer_dim').unbind('click').click(function() {
			$(this).parent().find('.btn_close').trigger('click');
			return false;
		});

		// 아코디언 포토 갤러리 (NUR24)
		$('.section_accordion').each(function() {
			var container = $(this).find('.gallery_content');
			var $layer = $(this).find('.layer_accordion_gallery');
			container.each(function() {
				var photo = $(this).find('.gallery_list');
				var page = $(this).parent().find('.page');
				var _all = photo.find('.photo').length;
				page.html('<strong>1</strong> / '+_all);
				photo.slick({
					infinite: false,
					swipe: false,
					responsive: [{
						breakpoint: 740,
						settings: {
							swipe: true,
							infinite: false,
						}
					}]
				});
				photo.on('beforeChange', function(event, slick, currentSlide, next){
					var current = parseInt(next)+1;
					page.html('<strong>'+current+'</strong> / '+_all);
				});
				photo.find('.list a').unbind('click').click(function() {
					if(device!="mobile") {
						var obj = $('#'+$(this).attr('href').split('#')[1]);
						var page_num = $(this).find('figure').attr('data-num');
						$layer.find('.page').attr('data-num', page_num);
						$layer.find('.page').html('<strong>'+ page_num +'</strong> / '+ _all);
						$(this).parents('.gallery_wrap').find('.layer_wrap').addClass('on');
						$(this).parents('.gallery_wrap').find('.layer_wrap .layer_accordion_gallery .bd_content ul li').removeClass('on');
						obj.addClass('on');
					}
					return false;
				});
			});
		});
		$('.layer_accordion_gallery .btn_slick').click(function() {
			var $container = $('.layer_accordion_gallery');
			var $list = $container.find('.img_list');
			var $page = $container.find('.page');
			var page_num = parseInt($container.find('.page').attr('data-num'));
			var page_all = parseInt($container.find('.page').attr('data-page'));

			if( $(this).hasClass('slick-next')){
				if( page_num % page_all == 0){
					page_num = 1;
				}
				else {
					page_num += 1;
				}
			}
			if( $(this).hasClass('slick-prev')){
				if( page_num == 1){
					page_num = page_all;
				}
				else {
					page_num -= 1;
				}
			}
			$container.find('.page').attr('data-num', page_num);
			$page.html('<strong>'+ page_num +'</strong> / '+ page_all);
			$list.removeClass('on');
			$list.eq(page_num-1).addClass('on');
		});
		// 카드 갤러리 (Driving Academy)
		$('.section_card').each(function() {
			var container = $(this).find('.gallery_content');
			container.each(function() {
				var photo = $(this).find('.gallery_list');
				var _all = photo.find('.list').length;
				photo.slick({
					infinite: false,
					swipe: true,
					dots: true,
					responsive: [{
						breakpoint: 740,
						settings: {
							swipe: true,
							infinite: false,
						}
					}]
				});
			});
			function fixArrowTop() {
				setTimeout(function() {
					var myH = (parseInt(container.find('.slick-current .card_wrap .photo img').height())/2);
					container.find('.slick-arrow').css('top', myH);
				}, 500);
			}
			$(window).resize(function() {
				fixArrowTop();
			});
			$(window).scroll(function() {
				fixArrowTop();
			});
			fixArrowTop();
		});
	}
});

/*
 * publish/lazy_load.js
 * 200904 Taehokim
*/

var lazyNone; /* 210114 add */

/* s: 210114 modify */
$(function(){
	(!lazyNone || lazyNone == 'undefined' || lazyNone == null) ? (lazy_load(), console.log('lazy-load = init')) : console.log('lazy-load = none');
});
/* e: 210114 modify */

function lazy_load(){
	var Img=$('.contentWrap img'),Window=$(window);
	Window.bind({scroll:function(){chk();},resize:function(){chk();},click:function(){chk();}});
	function lazy_init(){
		Img.each(function(){
			var This=$(this);
			if(This.data('media-pc') || This.data('media-mobile')){
				var pc_src=This.attr('data-media-pc');
				var m_src=This.attr('data-media-mobile');
				This.attr('data-pc-src',pc_src).attr('data-m-src',m_src);
			}else{
				var Src=This.attr('src');
				This.attr('data-pc-src',Src).attr('data-m-src',Src);
			}
			This.removeAttr('src data-media-pc data-media-mobile').css({opacity:0});
		});
	}
	lazy_init();

	function chk(){
		Img.each(function(i){
			var This=$(this);
			if(This.data('pc-src') && This.css('opacity') <= 0){
				/*200820 kv issue*/
				addImg(This,i);
			}
		});
		$('.slideWrap').each(function(){
			  var This=$(this);
			  This.find('.swiper-pagination').css('top', This.find('.swiper-slide-active img').height() - 25);
		});
	}
	chk();

	function addImg(This,i){
		/*200904 init, kv issue*/
		if (i == 0 || i <= 2 || This.parent().hasClass('visual') || This.offset().top < (Window.innerHeight() + Window.scrollTop()) - (This.height() / 2)) {
			if(Window.width()>740){
				This.attr('src',This.data('pc-src')).css({opacity:1});
			}else{
				/*200818 moblle issue*/
				if(!This.data('m-src')){
					This.attr('src',This.data('pc-src')).css({opacity:1});
				}else{
					This.attr('src',This.data('m-src')).css({opacity:1});
				}
			}
		}
	}
}
