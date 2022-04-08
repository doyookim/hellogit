var focusableElements=new Function;focusableElements.fn=focusableElements.__proto__={target:"body",focusable:'a:not([disabled]), button:not([disabled]), input[type="text"]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])',init:function(){(null===this.elements||this.elements.length<0)&&(this.elements=$(this.target).find(this.focusable).map(function(){var e=$(this);if("none"===e.css("display"))return null;for(;e[0].constructor!==Window&&e[0].constructor!==HTMLDocument;){if("none"===e.css("display"))return null;e=e.parent()}return this}))},reset:function(){this.elements=null,this.init()},elements:null,getElement:function(e){for(var t=0;t<this.elements.length;t++)if(this.compare(this.elements.eq(t),e))return{element:this.elements.eq(t),index:t};return{element:void 0,index:-1}},getElementByIndex:function(e){return e>=this.elements.length?void 0:this.elements.eq(e)},next:function(e){e=(e=this.getElement(e).index)+1>=this.elements.length?e:e+1;return this.getElementByIndex(e)},prev:function(e){e=(e=this.getElement(e).index)-1<0?e:e-1;return this.getElementByIndex(e)},compare:function(e,t){for(var n=0;n<t.length;n++)if(e.get(0)===t.get(n))return!0;return!1}};var fe=focusableElements.fn;
var userAgent;!function(){"use strict";String.prototype.has=function(e){return this.indexOf(e)>-1},void 0===document.documentElement.classList&&(document.documentElement.classList=document.documentElement.className.split(" "),1===document.documentElement.classList.length&&0===document.documentElement.classList[0].length&&(document.documentElement.classList=[]),document.documentElement.classList.add=function(e){document.documentElement.classList.push(e),document.documentElement.className=document.documentElement.classList.join(" ")});userAgent=new function(){var e=this,t=navigator.userAgent.toLowerCase(),s=[],n=[];t.has("chrome")?s.push("Chrome"):t.has("safari")&&s.push("Safari"),(t.has("edg")||t.has("edge")||t.has("edgA"))&&s.push("Edge"),t.has("firefox")&&s.push("Firefox"),(t.has("msie")||t.has("rv:11"))&&(s.push("IE"),t.has("msie 9")?s.push("IE9"):t.has("msie 10")?s.push("IE10"):t.has("rv:11")?s.push("IE11"):s.push("IEOld")),s.length||s.push("Unknown"),t.has("windows nt")&&n.push("Windows"),t.has("mac os")&&n.push("MacOS"),t.has("cros")&&n.push("ChromeOS"),t.has("android")&&n.push("Android"),t.has("iphone os")&&n.push("IOS"),t.has("mobile")&&n.push("Device"),e.get=function(e){e=e.toLowerCase();for(var t=0;t<s.length;t++)if(s[t].toLowerCase()===e)return s[t];for(t=0;t<n.length;t++)if(n[t].toLowerCase()===e)return n[t];return null},e.getAll=function(){return{browser:s,os:n}},e.is=function(t){return!!e.get(t)},e.notify=function(t,s){var n=e.get(t).toLowerCase();n&&(s?document.documentElement.classList.add(n):document.documentElement.classList.remove(n))},e.notifyAll=function(t){void 0===t&&(t=!0),s.forEach(function(s){e.notify(s,t)}),n.forEach(function(s){e.notify(s,t)})}},delete String.prototype.has}();

$(function() {
	$('header nav > ul').on('mouseenter', '> li', function(e) {
		var li = $(this);
		if (gnbPage === 'pc') {
			if (!!navDelay) {
				clearTimeout(navDelay), navDelay = null;
			}

			if (li.parent().find('.active').length > 0) {
				li.parent().find('.active').removeClass('active');
				$('header .sub_bg').css({'display': 'none'});
				$('body .dimd').css({'display': 'none'});
			}
			if (li.find('.nav_sub').length > 0) {
				$('header .sub_bg').css({'display': 'block'});
				$('body .dimd').css({'display': 'block'});
				li.addClass('active');
			}
		}
	});
	$('header nav').on('mouseleave', '> ul', function() {
		if (gnbPage === 'pc') {
			var ul = $(this);
			navDelay = setTimeout(function() {
				$('header .sub_bg').css({'display': 'none'});
				$('body .dimd').css({'display': 'none'});
				ul.find('> li.active').removeClass('active');
			}, 100);
		}
	});
	$('header').on('mouseenter', '.sub_bg', function() {
		if (gnbPage === 'pc') {
			if (!!navDelay) {
				clearTimeout(navDelay), navDelay = null;
			}
		}
	});
	$('header').on('mouseleave', '.sub_bg', function() {
		if (gnbPage === 'pc') {
			navDelay = setTimeout(function() {
				$('header .sub_bg').css({'display': 'none'});
				$('body .dimd').css({'display': 'none'});
				$('header nav > ul > li.active').removeClass('active');
			}, 100);
		}
	});

	$('header nav > ul').on('click', '> li a', function() {
		var li = $(this).parent();
		if (gnbPage === 'm' && li.find('.nav_sub').length > 0) {
			if (li.is('.active')) {
				li.removeClass('active');
			} else {
				if (li.parent().find('.active').length > 0) {
					li.parent().find('.active').removeClass('active');
					$('body .dimd').css({'display': 'none'});
				}
				li.addClass('active');
				$('body .dimd').css({'display': 'block'});
			}
		}
	});
	$('header').on('click', 'button', function() {
		if (gnbPage === 'm') {
			if ($(this).is('.active')) {
				$(this).removeClass('active');
				$('header nav').css({'display': 'none'});
				$('body .dimd').css({'display': 'none'});
			} else {
				$(this).addClass('active');
				$('header nav').css({'display': 'block'});
				$('body .dimd').css({'display': 'block'});
			}
		}
	});

	$('body').on('click', '.dimd', function() {
		if (gnbPage === 'pc') {
			$('header .sub_bg').css({'display': 'none'});
			$('header nav > ul > li.active').removeClass('active');
		} else {
			$('header button').removeClass('active');
			$('header nav').css({'display': 'none'});
			$('body .dimd').css({'display': 'none'});
		}
		$('body .dimd').css({'display': 'none'});
	});
	
	$('footer .btn_goTop').click(function(){
		var speed = $(window).scrollTop() / 10;

		$('html, body').stop().animate({scrollTop:0}, speed, 'swing');

		return false;
	});
});

$(function() {
	// Tab Focusing
	$('header').on('keydown', '.inner > h1 > a', function(e) {
		if (e.keyCode === 9) {
			if (gnbPage === 'pc') {
				if ($('header nav > ul > li.active').length > 0 && e.shiftKey) {
					$('header .language li').last().find('a').focus();
					return false;
				}
			} else if (gnbPage === 'm') {
				if (!e.shiftKey) {
					$('header .inner > button').focus();
					return false;
				} else if ($('header .inner > button').is('.active') && e.shiftKey) {
					$('header .inner > nav > ul').last().find('li a').last().focus();
					return false;
				}
			}
		}
	});
	$('header').on('keydown', '.inner > nav > ul > li', function(e) {
		if (gnbPage === 'm' && e.keyCode === 9) {
			var li = $(this), ul = li.parent(), nav = li.parents('nav');

			if ((ul.index() === 0 && li.index() === 0) && e.shiftKey) {
				$('header .inner > button').focus();
				return false;
			} else if ((ul.index() === nav.find('> ul').length - 1 && li.index() === ul.find('> li').length - 1) && !e.shiftKey) {
				$('header .inner > h1 > a').focus();
				return false;
			}
		}
	});
	$('header').on('focus', '.inner nav > ul > li > a', function(e) {
		var li = $(this).parent(), ul = li.parent();
		if (gnbPage === 'pc') {
			if (!!navDelay) {
				clearTimeout(navDelay), navDelay = null;
			}

			if (li.parent().find('.active').length > 0) {
				li.parent().find('.active').removeClass('active');
				$('header .sub_bg').css({'display': 'none'});
				$('body .dimd').css({'display': 'none'});
			}
			if (li.find('.nav_sub').length > 0) {
				$('header .sub_bg').css({'display': 'block'});
				$('body .dimd').css({'display': 'block'});
				li.addClass('active');
			}
		}
	});
	$('header').on('focus', '.inner nav > ul > li > .nav_sub > ul > li > a', function(e) {
		if (gnbPage === 'pc') {
			if (!!navDelay) {
				clearTimeout(navDelay), navDelay = null;
			}
		}
	});
	$('header').on('focusout', '.inner nav > ul > li > a', function(e) {
		var li = $(this).parent(), ul = li.parent();
		if (gnbPage === 'pc') {
			if (!!navDelay) {
				clearTimeout(navDelay), navDelay = null;
			}

			navDelay = setTimeout(function() {
				$('header .sub_bg').css({'display': 'none'});
				$('body .dimd').css({'display': 'none'});
				ul.find('> li.active').removeClass('active');
			}, 100);
		}
	});
	$('header').on('keydown', '.inner > button', function(e) {
		if (gnbPage === 'm' && e.keyCode === 9) {
			var btn = $(this);

			if (btn.is('.active')) {
				if (e.shiftKey) {
					fe.prev(btn).focus();
					return false;
				} else {
					$('header nav li a').first().focus();
					return false;
				}
			}
		}
	});
	$('header').on('keydown', '.language a', function(e) {
		if (gnbPage === 'pc' && e.keyCode === 9) {
			var lang = $(this).parents('.language');
			if ($(this).parent().index() === lang.find('li').length - 1 && $('header nav > ul > li.active').length > 0 && !e.shiftKey) {
				$('header .inner > h1 > a').focus();
				return false;
			}
		}
	});

	$('.s-skip-content').on('click', '#skipToContent', function() {
		$('#content').attr('tabindex', '0').focus();
		setTimeout(function() {
			$('#content').removeAttr('tabindex');
		}, 1);
	});
});

var gnbPage, gnbPrevPage, navDelay = null;
var sT = 0;

$(window).on('load', onGnbLoad).on('resize', onGnbResize).on('scroll', onGnbScroll);

function onGnbLoad() {
	sT = $(window).scrollTop();
	gnbPage = gnbPrevPage = (viewportWidth() > 1260 ? 'pc' : 'm');

	if (gnbPage === 'm') {
		if(viewportWidth() > 768) {
			$('header nav').css({'height': $('body').outerHeight() - $('header').outerHeight()});
		}else{
			$('header nav').css({'height': ''});
		}
	}

	if (sT == 0)
	{
		$('footer .btn_goTop').css({'display':'none'});
	}else{
		$('footer .btn_goTop').css({'display':'block'});
	}

	userAgent.notifyAll();
}
function onGnbResize() {
	gnbPage = (viewportWidth() > 1260 ? 'pc' : 'm');

	if (gnbPage !== gnbPrevPage) {
		if (gnbPage === 'pc') {
			$('header button').removeClass('active');
			$('header nav').stop().removeAttr('style');
		} else {
			$('header .sub_bg').css({'display': 'none'});
		}
		$('header nav > ul > li').removeClass('active');
		$('body .dimd').css({'display': 'none'});
	}

	if (gnbPage === 'm') {
		if(viewportWidth() > 768) {
			$('header nav').css({'height': $('body').outerHeight() - $('header').outerHeight()});
		}else{
			$('header nav').css({'height': ''});
		}
	}

	gnbPrevPage = gnbPage;
}

function onGnbScroll() {
	sT = $(window).scrollTop();

	if (sT == 0)
	{
		$('footer .btn_goTop').css({'display':'none'});
	}else{
		$('footer .btn_goTop').css({'display':'block'});
	}
}