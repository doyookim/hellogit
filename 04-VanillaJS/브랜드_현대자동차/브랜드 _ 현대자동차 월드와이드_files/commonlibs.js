/********************************
 * 파일명 : header.js
 * 설명 : Header Component Script
 * 수정일		수정자	 Version	설명
 * ---------- ------- -------- -------------------
 * 2016.12.12  정진호    1.0    최초생성
 * 2017.01.06  이경주    1.01   region, country 방식 변경
 * 2017.01.09  이경주    1.02   All Vehicles link url 변경
 * 2017.01.10  이경주    1.03   Find a Car => Category From AJAX to JavaClass 방식 변경,
 *                                            Category click event 추가
 * 2017.01.20  정진호    1.0.4  Region 변경 시 Country 값 Select a country로 선택되도록 수정  
 * 2017.02.01  이경주    1.0.5  Region 변경시 country 값 변경하는 부분 변경
 * 2017.02.22  이경주           autosearchList .link 및 inputText event function 적용 (from en/publish/js/common.js 에서 옮겨와 수정함)
 * 2017.02.23  이승기           fn_search_auto_complete name 변경 및 SEARCH_AUTO_COMPLETE_MIN_COUNT 추가
 * 2017.03.09  김경수           goToCountry 추가
 * 2017.03.20  류재명    1.0.6  Image Caption 변경
 * 2018.02.12  정훈     M-00108 Category Link 기능 추가
 * 2018.09.27	 최원희		M-00134 GNB개편
 * 2019.09.24  JungSujin		Header renewal
 */

$(function(){

	Header.vehicleList.getNewCar();
	//Header.region.initRegions();
	var $defaultCountry = $("#allCountries option[data-code='']");
    $('.gnbLanguageArea #region').on('change', function(){
        if($(this).val()){
			//Header.region.initCountries($(this).val());
        	$("#country").find("option").remove();
        	$("#country").append($("#allCountries option[data-region=" + $(this).val() + "]"));
        	$("#country").prepend($defaultCountry);
        }
    });
    
    $('.gnbLanguageArea #country').on('change', function(){
    	var countryCode = $(this).children('option:selected').attr('value');
    	location.href = Header.goToCountry.movePage(countryCode);
    });

    $(".gnbSearch .btnReset").on("click",function(e){
        e.preventDefault();
        $(".gnbSearch .inputText").val("").focus();
        
    })
    
    //auto search list li's key event function
    $(document).on({
    	"focus" : function(e){
		            $(".gnbSearchArea .gnbautoSearchList").addClass("on");
		            $(this).addClass("on");
    			},
    	"blur": function(e){
    		        $(".gnbSearchArea .gnbautoSearchList").removeClass("on");
    		        $(this).removeClass("on");
    		    },
        "keydown" : function(e){
    		        if(e.keyCode == 40){
    		            e.preventDefault();
    		            var idx = $(".gnbSearchArea .gnbautoSearchList .link.on").parent().index()+1;
    		            if(idx < $(this).parents("ul").find(".link").length){  //$(".gnbSearchArea .autoSearch .link").length   		                
    		            	$(this).parents("ul").find(".link").eq(idx).focus(); //$(".gnbSearchArea .autoSearch .link").eq(idx).focus();
    		            }else{
    		                $(".gnbSearchArea .gnbautoSearchList").hide();
    		                $(".gnbSearchArea .inputText").focus();
    		            }
    		        }
    		        if(e.keyCode == 38){
    		            e.preventDefault();
    		            var idx = $(".gnbSearchArea .gnbautoSearchList .link.on").parent().index()-1;
    		            if(idx >= 0){
    		            	$(this).parents("ul").find(".link").eq(idx).focus();//$(".gnbSearchArea .gnbautoSearchList .link").eq(idx).focus();
    		            }else{
    		                $(".gnbSearchArea .gnbautoSearchList").hide();
    		                $(".gnbSearchArea  .inputText").focus();
    		            }
    		        }
    		    },
        "click" : function(){
        	Header.search.moveSearchResult($(this).text());        	
        }    		    
    }, ".gnbSearchArea .link");

    $(".gnbSearchArea").focusout(function(e){
        setTimeout(function(){
            if(!$(".gnbSearchArea .gnbautoSearchList").hasClass("on")){
                $(".gnbSearchArea .gnbautoSearchList").hide();
            }
        },100);
    })    
    
    $('.gnbSearchArea .btnSearch').on('click', function(){
    	 var $target = $(this).closest(".gnbSearchArea");
         var txtGnbSearchKey = $.trim($target.find(".gnbSearch .inputText").val());    	
    	Header.search.moveSearchResult(txtGnbSearchKey);
    });
    
    // M-00086
    /*
    $('.searchWrap .btnSearch').on('click', function(){
    	var $target = $(this).closest(".contBox");
        var txtSearchKey = $.trim($target.find(".searchWrap .inputText").val());
        // M-00090
        // PageNotFound.search.moveSearchResult(txtSearchKey);
        Header.search.moveSearchResult(txtSearchKey);
   });
   */
    
    
    $(document).on("keyup", '.gnbSearchArea .inputText', function(e){
    	var linkLen = $(this).closest(".gnbSearch").find(".autoSearch .link").length;
    	//console.log("105 : e.keyCode=%s, .link length=%d", e.keyCode, linkLen);    	
    	if($(this).val()){
            $(".gnbSearch .btnReset").show();
        }else{
            $(".gnbSearch .btnReset").hide();            
        }
        if(e.keyCode == 13 || e.which == 13){
        	Header.search.moveSearchResult($.trim($(this).val()));
        }else if(e.keyCode == 40 && linkLen > 0){
            e.preventDefault();
            $(this).closest(".gnbSearch").find(".gnbautoSearchList").show();
            $(this).closest(".gnbSearch").find(".gnbautoSearchList .link").eq(0).focus();
        }else if(e.keyCode != 38 && $(this).val().length >= SEARCH_AUTO_COMPLETE_MIN_COUNT){
            fn_search_auto_complete($(this).val(), ".gnbSearch .autoSearch");
            $(".gnbSearch .gnbautoSearchList").show();
        }else {
        	$(".gnbSearch .gnbautoSearchList").hide();
        }
    });

    $(".carListWrap .tabArea .tab > .tabBtn").on("click", function(e){
    	/** [START] M-00108 **/
        if($(this).parent().hasClass("link")){
        	return true;
        }
        /** [END] M-00108 **/
        
    	if(!$(this).parent().hasClass("all")){
            e.preventDefault();
            //pc type
          //getCarList
            var catCode = $(this).attr("data-item");                                    
            if($("body").hasClass("pc")) {
            	if(catCode ){
                	var html = Header.vehicleList.getProductList(catCode);
                	$(this).next(".carList").html(html);                	
                }            	
                $(".gnbWrapFull").css({"overflow" : "hidden"})
                $(".carListWrap .tabArea .tab").removeClass("on");                
            	
            }            
            if(!$("body").hasClass("mobile")) {
                $(".carListWrap .tabArea .tab").removeClass("on");
                $(this).parent().addClass("on");
                var findCarHeight = $(".carListWrap .on .carList").height()+180;
                $(".gnbWrapFull").addClass("findCar").css("min-height",findCarHeight);
                setTimeout(function(){$(".gnbWrapFull").css({"overflow" : "visible"})},500);                
            }
            if($("body").hasClass("mobile")) {            	
                if (!$(this).parent().hasClass("on")) {
                	if(catCode ){
                    	var html = Header.vehicleList.getProductList(catCode);
                    	$(this).next(".carList").html(html);
                    }                	
                    var _this = $(this).parent();
                    _this.find("> .carList").stop().slideDown(300,function(){
                    	_this.addClass("on").siblings().removeClass("on").children(".carList").slideUp(300);//180921_find_a_car_modify
                    });
                } else {
                    var _this = $(this).parent();
                    _this.find("> .carList").stop().slideUp(300,function(){
                        _this.removeClass("on");
                    });
                }
                // M-00134 GNB개선 2deps선택후 위치조정
                setTimeout(
                		function(){
                			$("div.gnbSubArea.car").scrollTop($("div.gnbSubArea.car .tab.on").closest("li").position().top);
                		},
                		350
                ); // M-00134 GNB개선

            }            
        }
    });
    
});

var Header = {};

Header.vehicleList = (function(){
	  this.theUrl4Category = "/wsvc/ww/common.car.do";
	  this.theUrl4Products = "/wsvc/ww/findacar.products.do";
	  
	  this.getNewCar = function(){
		  var catCode = $("#gnbCarTabArea li").first().children(".tabBtn").attr("data-item");
		  html = Header.vehicleList.getProductList(catCode);
		  $("#gnbCarTabArea li").first().children(".carList").html(html);
	  }; 
	  
	  this.getProductList = function(category){
		  var subHtml = "";
		  if(category){
			  $.ajax({
			        type: "POST",
			        url: theUrl4Products,
			        data : "category="+category,
			        dataType : 'json',      
			        async:false,
			        success: function(resData) {
			        	if(resData.data){
				        	for(var i=0; i < resData.data.length; i++){
					        	var item = resData.data[i];
				        		subHtml += '  <li class="item"><a href="'
				        				+ item.pipUrl 
				        			    + '" onClick="_satellite.track(\'header\', \''+item.displayName.replace(/\n/g, " ").replace(/\'/g, "").replace(/\"/g, "")+'\')"><img src="' + item.image1 + '" alt="' 
				        			    + item.image1Caption +'"><span class="carTit">'
				        			    + item.displayName 
				        			    + '</span></a></li>\n';
				        	}			        		
			        	}
			        }
			    });		  			  
		  }	  
		  return subHtml;
	  }
	  
	  return this;
})();


//Search
Header.search = (function(){
    this.moveSearchResult = function(query){
		var searchUrl = $('#btnGNBSearch').attr('search-url'); //'.gnbSearchArea .btnSearch'
        if(!query){
			gfnAlert('type4', Granite.I18n.get('Search Message'), Granite.I18n.get("Enter the search keywords"));
        }else{
			location.href = searchUrl + '?query=' + encodeURIComponent(query)+'&_charset=utf-8';
        }
    };

    return this;

})();

/*
// M-00086, M-00090
var PageNotFound = {};
PageNotFound.search = (function(){
    this.moveSearchResult = function(query){
		var searchUrl = $('#pageNotFountBtnSearch').attr('search-url'); //'.pageNotFountBtnSearch .btnSearch'
        if(!query){
			gfnAlert('type4',Granite.I18n.get('Search'),Granite.I18n.get('Please input text for search'));
        }else{
			location.href = searchUrl + '?query=' + encodeURIComponent(query)+'&_charset=utf-8';
        }
    };

    return this;

})();
*/

Header.goToCountry = (function(){
	this.movePage = function(countryCode){
		var returnUrl = "";
		var rootPage = $("#topLogo").attr("href").replace(".html", "");
		var extension = ($("#gnbMenu").attr("data-isauthor") == 'true') ? ".html" : "";
		
		returnUrl = rootPage + "/onepage/country." + countryCode.toLowerCase() + extension;
		
		return returnUrl;
	};
	
	return this;
})();
/*************************************************************
  함수명 : fn_change_audit_report_list
  설 명 : audit report list select change event
  인 자 : target content's id 
  사용법 : 
  수정일        수정자        Version     Function명
  ----------  ----------- ----------- -------------------------
  2017.01.25  이경주        1.0         최초작성
  2017.03.17              1.1         function event changed
 *************************************************************/

$(document).ready(function(){
	if($(".auditYear").length){
		$(".auditYear").on("change", function(){
			if($(this).val()){
				$(this).parents('.reportWrap').find('.gridWrap.n4').hide();
				var target = "#" + $(this).val();
				$(target).show();
			}
		});
	}
});

 
/*
 * common.js 
 * 2017.02.06 이승기
 * 2017.02.09 이경주 fnGetYourLocation, fnDrawNoResult added
 */
/*
 * search auto complete category code
 */
var SEARCH_AUTO_COMPLETE_DEFAULT_CODE = 'common';
var SEARCH_AUTO_COMPLETE_VEHICLE_CODE = 'vehicle';
var SEARCH_AUTO_COMPLETE_BRAND_CODE = 'brand';
var SEARCH_AUTO_COMPLETE_COMPANY_CODE = 'company';
var SEARCH_AUTO_COMPLETE_NEWS_CODE = 'news';//news
var SEARCH_AUTO_COMPLETE_GLOBAL_CODE = 'global';
var SEARCH_AUTO_COMPLETE_MIN_COUNT = 3;

function fnGetYourLocation(){
	 var retValue;
	  $.ajax({
	      type: "POST",
	      async:false,
	      url: "/wsvc/ww/main.globalThumnailNews.do",        
	      dataType : 'json',              
	      success: function(resData) {
	    	  if(resData){
		          retValue = resData.data;	    		  
	    	  }
	      }
	  });
	  return retValue;	      	  
}

function fnDrawNoResult(target, keyword){

	var html = '  <div class="searchNoResult">\n'
		     + '    <div class="message" >' + Granite.I18n.get("Your search for");
	html += ' <span id="orgKeyword"></span>';
	html += Granite.I18n.get(" returned 0 results.") + '</div>\n'
         + '      <ul class="txtList">\n'
         + '        <li> ' + Granite.I18n.get("Make sure all words are spelled correctly.") + '</li>\n'
         + '        <li> ' + Granite.I18n.get("Try different keywords.") + '</li>\n'
         + '        <li> ' + Granite.I18n.get("Try more general keywords.") + '</li>\n'
         + '      </ul>\n'
         + '  </div>\n';
	
    if(!$(target).hasClass("tabCont")){
    	html = '<div class="tabCont">\n' + html + '</div>\n';
    }         
             
	$(target).html(html);
	if(keyword) $("#orgKeyword").text('"' + keyword + '"');
}

function getHashData(){
    try{
        if(document.URL.indexOf('#')){
             var hashData = document.URL.split('#');           
             if(hashData[1]){
                 window.history.replaceState(null, null, window.location.href.split('#')[0]);
            	 //window.history.pushState(null, null, window.location.href.split('#')[0]);
                 var hashObj = JSON.parse('{"' + decodeURIComponent(hashData[1]).replace(/"/g, 'HYPERLINK "\\"\\"').replace(/&/g, '","').replace(/=/g,'":"').replace(/\+/g,' ') + '"}')
                 return hashObj;   
             }
        }
    }catch(err){
        return null;
    }
    return null;
}

function addHashData(el){
    try{
	    var hashData = $.param(getHashData());
	    if(hashData){       
	        var listLink = $(el).attr('href')+"#"+hashData;
	        $(el).attr('href', listLink);
	    }
    }catch(err){        
    }
}

//get search auto complete keyword layer control with keyword
function fn_search_auto_complete(vKeyword, targetEL, category, listCnt){
	if(category == undefined || !category ) category=SEARCH_AUTO_COMPLETE_DEFAULT_CODE;
	if(listCnt == undefined || !listCnt) listCnt = 4;
	
	var sendData = "query="+vKeyword+"&target=" + category + "&listCount="+listCnt +"&langCode="+ langCode;
    $.ajax({
        type: "POST",
        url: "/wsvc/ww/search.autocomplete.do",
        data : sendData,
        dataType : 'json',              
        success: function(resData) {
        	var html = "";
        	if(resData && resData.data && resData.data.result[0]){
                var recommend = resData.data.result[0].items;            
                for(var i=0; i<recommend.length; i++){
                    var recommendText = recommend[i].keyword;
                    if(i>=listCnt){
                    	break;
                    }
                    recommendText = recommendText.replace(vKeyword,'<mark class="keyword">'+vKeyword+'</mark>');
                    html += '<li class="list"><button class="link">'+recommendText+'</button></li>';
                }  
        	}          
            $(targetEL).html(html); //없으면 기존 data 삭제
            if(html){
                $(targetEL).show();    
            }else{
                $(targetEL).hide();
            }
            return true;            
        }
    });
}

//gfnEscapeScript
function gfnEscapeScript(val) {
    return String(val.trim())/*
			.replace(/\\/g,"\\x5C;")
			.replace(/</g,"&lt;")
			.replace(/>/g,"&gt;")
			.replace(/"/g,"&quot;")
			.replace(/&/g,"&amp;")
			.replace(/%/g,"&#37;")
			.replace(/\'/g,"&#39;")
			.replace(/\(/g,"&#40;")
		    .replace(/\(/g,"&#41;")
			.replace(/\+/g,"&#43;")
			.replace(/;/g,"&#59;")*/			
	    	;
}


//gfnRevokeScript
function gfnRevokeScript(val) {
  return String(val.trim())
			.replace(/\\x5C;/g,"\\")
			.replace(/&lt;/g,"<")
			.replace(/&gt;/g,">")
			.replace(/&quot;/g,'"')
			.replace(/&amp;/g,"&")
			.replace(/&#37;/g,"%")
			.replace(/&#39;/g,"'")
			.replace(/&#40;/g,")")
		    .replace(/&#41;/g,"(")
			.replace(/&#43;/g,"+")
			.replace(/&#59;/g,";")			
	    	;
}

//gfnChangeLocation : when click tab 
function gfnChangeLocation(pathName, addTitle, isAdd){
	var newTitle;
	if(isAdd == '1') {
		newTitle = addTitle + " | " + document.title; 
	}else{
		var arCurTitle = document.title.split(" | ");
		if(addTitle)
			arCurTitle[0] = addTitle;
		else
			arCurTitle.shift();
		newTitle = arCurTitle.join(" | ");
	}

	//console.log("common 165 : %s, %d, %s", addTitle, isAdd, newTitle);		
	document.title = newTitle;		
	
	if(pathName){
		$("#canonical-setting-value").attr("href", location.protocol + "//" + location.host + pathName);
		window.history.pushState(null, null, pathName);
	}		
}
/*************************************************************
  함수명 : fn_get_feature_list
  설 명 : Get feature-list by AJAX call 
  인 자 : called url, target content's id for add html markup
  사용법 : 
  수정일        수정자        Version     Function명
  ----------  ----------- ----------- -------------------------
  2016.11.25  이경주        1.0         최초작성
  2017.06.15  류재명                    M-00062 Page Thumbnail 이미지를 등록하지 않으면 그냥 타이틀만 보여주고 이미지는 숨기도록 수정
 *************************************************************/

	function fn_get_feature_list(fullData, target)
	{		
		var retValue = "";
    	if(fullData && target) {
    		$.ajax({
                async : false, 
    	        url : '/wsvc/ww/featurelist.all.do',
    	        type : 'post',
    	        data : fullData,
    	        dataType : 'json',
    	        success : function(resData){
    	        	if(resData.data){
                        var retData = resData.data;
                        retValue = true;
        	            var html = "";
        	            var bgColor  = (target.attr("list-data-bgColor") == "white") ? "background-color:" + target.attr("list-data-bgColor") : "";
        	            var txtColor = (target.attr("list-data-textColor") == "black") ? "color:"+target.attr("list-data-textColor") : "";
        	            for(var i=0; i<retData.length; i++){
        	                var item = retData[i];
        	                if (!ComUtils.isEmpty(item.imageMobile) || !ComUtils.isEmpty(item.image)) {
            	                html += '<div class="item">' +
                              	'	<a href="' + item.url + '" onClick="_satellite.track(\''+feature_list_track_name+'\', \''+item.title.replace(/\n/g, " ").replace(/\'/g, "").replace(/\"/g, "")+'\')">' +
                                '		<img src="' + item.imageMobile +'" data-media-mobile="' + item.imageMobile + '" data-media-pc="' + item.image + '" class="bgCenter responsive-image" alt="' + item.imageAlt + '">' +
                                '		<div class="info">' +
                                '    		<dl style="'+bgColor+'">' +
                                '        		<dt style="'+txtColor+'">' + item.title + '</dt>' +
                                '        		<dd style="'+txtColor+'">' + item.subTitle + '</dd>' +
                                '    		</dl>' +
                                '		</div>' +
                                '	</a>' +
                                '</div>';
        	                } else {
        	                	// M-00062 Page Thumbnail 이미지를 등록하지 않으면 그냥 타이틀만 보여주고 이미지는 숨기도록 수정
            	                html += '<div class="item1">' +
                              	'	<a href="' + item.url + '" onClick="_satellite.track(\''+feature_list_track_name+'\', \''+item.title.replace(/\n/g, " ").replace(/\'/g, "").replace(/\"/g, "")+'\')">' +
                                '		<div class="info">' +
                                '    		<dl style="'+bgColor+'">' +
                                '        		<dt style="'+txtColor+'">' + item.title + '</dt>' +
                                '        		<dd style="'+txtColor+'">' + item.subTitle + '</dd>' +
                                '    		</dl>' +
                                '		</div>' +
                                '	</a>' +
                                '</div>';
        	                }
        	            }
        	            $(".motoshowList", target).append(html);
    	        	}
    	        	else{
    	        		gfnAlert("type4", Granite.I18n.get("No Result.") , '');
    	        	}
    	        	
    	        },
    	        error : function(){
    	        	gfnAlert('type4', Granite.I18n.get("System Error") , '');
    	        }
    	    });
    	}
     }
/*
 * gallery.js : gallery component slide & button click event
 */
$(document).ready(function(){
    if($(".galleryTy1").length) {	
		//console.log("gallery.js. length=[%d]", $(".galleryTy1").length);   
		$(".galleryTy1").each(function(){
	        var _target = $(this);
	        setTimeout(function(){
		        var galleryTarget1_thumbnail = new Swiper(_target.find(".thumbnail"), {
		            slidesPerView: 'auto',
		            slidesPerGroup: 4,
		            spaceBetween: 0,
		            nextButton : _target.find(".btn_next"),
		            prevButton : _target.find(".btn_prev"),
		            breakpoints: {
	                    // when window width is <= 740
	                    20000: {
	                    	slidesPerView: 'auto',
	    		            slidesPerGroup: 4,
	    		            spaceBetween: 0,
	                        onProgress: function (swiper) {
	                            if(swiper.slides.length <= 4){
	                                _target.find(".slideWrap").addClass("hideBtn");
	                            }else{
	                            	_target.find(".slideWrap").removeClass("hideBtn");
	                            }
	                        }
	                    },
	                    // when window width is <= 740
	                    740: {
	                    	slidesPerView: 'auto',
	    		            slidesPerGroup: 3,
	    		            spaceBetween: 0,
	                        onProgress: function (swiper) {
	                            if(swiper.slides.length <= 3){
	                            	_target.find(".slideWrap").addClass("hideBtn");
	                            }else{
	                            	_target.find(".slideWrap").removeClass("hideBtn");
	                            }
	                        }
	                    }
	                }
		            
		        });
		        _target.find(".thumbnail .swiper-slide button").on('click', function(e){
		            e.preventDefault();
		            _target.find(".thumbnail .swiper-slide button").blur();
		            galleryTarget1_big.slideTo($(this).parent().index());
		            _target.find(".thumbnail .swiper-slide").removeClass("on");
		            $(this).parent().addClass("on");
					//썸네일 클릭시 유튜브영상 정지
					if(_target.find('.bigImg .swiper-slide iframe').length){
						_target.find('.bigImg .swiper-slide').find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
						_target.find(".bigImg .swiper-slide-active .btnMovie").trigger("click");
					}
					
					/* download 버튼이 있는 경우 해당 a tag에 active 이미지 url 주기 2017.01.25 KJLee *************************************** */ 
					if(_target.find('.btnDown').length){
						_target.find('.btnDown').attr("href", "/wsvc/ww/download.file.do?id=" + $("li.swiper-slide.swiper-slide-active img", _target).attr('src'));
					}
					/* *********************************************************************************************************** */
		        });
		        var galleryTarget1_big = new Swiper(_target.find(".bigImg"),{
		            effect : "fade",
		            nextButton : _target.find(".bigImg").find(".btn_next"),
		            prevButton : _target.find(".bigImg").find(".btn_prev"),
		            onInit : function(swiper){
		                $(swiper.container).find(".pageNum").html("<strong>1</strong> / "+swiper.slides.length);
						// 동영상일 경우 Class 추가 ==> 2017.03.09 tag 변경으로 삭제함. 
		/*				$(swiper.container).find('.swiper-slide').each(function(){
							if($(this).find('iframe').length){
								$(this).addClass('iframeVideo');
							}					
						});*/
						var idx = 0;
		                var bottom_tit = $(swiper.container).find(".swiper-slide-active .tit").text();
		                var bottom_desc = $(swiper.container).find(".swiper-slide-active .desc").text();
		                var legal = $(swiper.container).find(".swiper-slide-active .noticeList").clone();
		                if(bottom_tit){
		                    _target.find(".bottomDesc .tit").text(bottom_tit).show();
		                }else{
		                    _target.find(".bottomDesc .tit").hide();
		                }
		                if(bottom_desc){
		                    _target.find(".bottomDesc .txt").text(bottom_desc).show();
		                }else{
		                    _target.find(".bottomDesc .txt").hide();
		                }
		                if(legal){
		                    _target.find(".bottomDesc .noticeList").remove();
		                    _target.find(".bottomDesc").append(legal);
		                }				
		            },
		            onSlideChangeStart : function(swiper){
		                var idx = $(swiper.container).find(".swiper-slide-active").index();
		                var bottom_tit = $(swiper.container).find(".swiper-slide-active .tit").text();
		                var bottom_desc = $(swiper.container).find(".swiper-slide-active .desc").text();
		                var legal = $(swiper.container).find(".swiper-slide-active .noticeList").clone();
		                galleryTarget1_thumbnail.slideTo(idx);
		                _target.find(".thumbnail .swiper-slide button").eq(idx).click();
		                /* 2017.02.01 KJLEE modified ************************************************************************/
		                if(bottom_tit){
		                    _target.find(".bottomDesc .tit").text(bottom_tit).show();                	
		                }else{
		                	_target.find(".bottomDesc .tit").hide();
		                }
		                if(bottom_desc){
		                    _target.find(".bottomDesc .txt").text(bottom_desc).show();                	
		                }else{
		                    _target.find(".bottomDesc .txt").hide();                	
		                }
		                if(legal){
		                    _target.find(".bottomDesc .noticeList").remove();
		                    _target.find(".bottomDesc").append(legal);
		                }
		                /* ******************************************************************************** */
		                $(swiper.container).find(".pageNum").html("<strong>"+(idx+1)+"</strong> / "+swiper.slides.length);
		                if(!$(swiper.container).find(".swiper-slide-active").hasClass("colorw")){
		                    $(swiper.container).find(".pageNum").addClass("colorbk")
		                }else{
		                    $(swiper.container).find(".pageNum").removeClass("colorbk")
		                }
		            }
		        });
	        },400)
	    })
    }//if($(".galleryTy1").length) 
})	        
/*************************************************************
  함수명 : fn_get_thumbnail_list
  설 명 : Get thumbnail-list by AJAX call 
  인 자 : called url, target content's id for add html markup
  사용법 : 
  수정일        수정자        Version     Function명
  ----------  ----------- ----------- -------------------------
  2016.11.29  이경주        1.0         최초작성

 *************************************************************/

function fn_get_thumbnail_list(fullpath, target, nCol){
	if(nCol < '2' || nCol > '4') nCol = 3;
    $.ajax({
        type: "POST",
        url: "/wsvc/ww/thumbnaillist.all.do",
        data : fullpath,
        dataType : 'json',              
        success: function(resData) {
            //alert(JSON.stringify(restData));
            //title : Thumbnail 타이틀 , image : 이미지 경로, image-alt : 이미지 alt, url : 상세페이지 url
            var retData = resData.data;
            var html = "";
            var titleClass = (nCol < 3) ? "subTit3" : "subTit4";
            var rowHtml = '<div class="gridWrap n' + nCol + ' imgView' + nCol
            if(nCol == "2") 
            	   rowHtml += ' gridF">';
            else{
            	rowHtml += '">' ;
            	html = rowHtml;
            }
            	
            for(var i=0; i<retData.length; i++){
                var item = retData[i];
                if(nCol < 3 && i%2 == 0) {
                	if(i > 1) rowHtml = rowHtml.replace("gridF", "");
                	html += rowHtml;
                }
                html += 
                        '  <div class="grid">' +
                        '    <div class="imgArea"><img src="' + item.image + '" alt="' + item.imageAlt + '"></div>' +
                        '    <div class="txtArea">' +
                        '       <h3 class="'+ titleClass + '"><a href="' + item.url + '">' + item.title + '</a></h3>' ;
                if(item.subtitle){ //subtitle이 있는 경우
                    html += '   <div class="conArea">' + item.subtitle + '</div>';
                }                        
                html += '    </div><!-- //.textArea -->' +
                        '  </div><!-- //.grid -->';
                if(nCol < 3 && i%2 == 1) html += "</div>";
            }                   
            target.append(html);                    
            return true;            
        }
    });
    return false;
	
}
/*********************************************************************************************
 * movieContent.js
 * - flowplayer sample path : filepath&name = /prCenter/0609_Genesis_Coupe_viral.mp4 
  	PC : rtmp://media.hyundai.com:1935/flvcontent/{filePath}/mp4:{filename.mp4}
	ios : http://media.hyundai.com:1935/flvcontent/{filePath}/mp4:{filename.mp4}/playlist.m3u8
	android : rtsp://media.hyundai.com:1935/flvcontent/{filepath} 
 * 2017.03.09 wowjaserver path fixed : media.hyundai.com:1935/hyundai/_definst_
 *********************************************************************************************/
    
var players = {}; 
var done = false;
var trackingInterval = new Array();
var _wowzaServerPath_ = '58.87.34.197:1935/ww';
var _HTTP_PATH_ = 'http://' + _wowzaServerPath_;
var _RTSP_PATH_ = 'rtsp://' + _wowzaServerPath_;
var _RTMP_PATH_ = 'rtmp://' + _wowzaServerPath_;

var _FLOWPLAYERJS_      = '/etc/designs/hyundai/ww/commonlibs/js/flowplayer-3.2.13.min.js';
var _FlowPlayerSWF_     = '/etc/designs/hyundai/ww/commonlibs/js/flowplayer-3.2.18.swf';
var _FlowPlayerRtmpSWF_ = '/etc/designs/hyundai/ww/commonlibs/js/flowplayer.rtmp-3.2.13.swf'
var _IOSPLAYLIST_ = '/playlist.m3u8';

var device = getDevice4Flowplayer();

//get device 
function getDevice4Flowplayer(){
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/(iphone|ipod|ipad)/) ? 'ios' : ( ua.match(/android|blackberry/) ? 'android/others' : 'pc' );
}
    
// Define Movie_ready function.
var Movie_Ready = (function() {
    var onReady_funcs = [], api_isReady = false;
    /* @param func function     Function to execute on ready
     * @param func Boolean      If true, all qeued functions are executed
     * @param b_before Boolean  If true, the func will added to the first
                                 position in the queue*/
    return function(func, b_before) {
        if (func === true) {
            api_isReady = true;
            while (onReady_funcs.length) {
                // Removes the first func from the array, and execute func
                onReady_funcs.shift()();
            }
        } else if (typeof func == "function") {
            if (api_isReady) func();
            else onReady_funcs[b_before?"unshift":"push"](func); 
        }
    }
})();
                  
function onYouTubePlayerAPIReady() {
  Movie_Ready(true);    
}

// Returns a function to enable multiple events

function onPlayerReady(event) {  
  //console.log("39 playVideo!!!! =", event.target.getVideoUrl());    
  event.target.playVideo();
}
    

function onPlayerStateChange(playerID) {
    return function(event){
      var player = event.target;//players[videoID];
      //console.log("46: onPlayerStateChange - %s",playerID);

      if (event.data == YT.PlayerState.PLAYING ) {
        //console.log("%s =============", player.getVideoUrl() + "\n25% length = " + Math.round(player.getDuration()/4));
        trackingInterval[playerID]= setInterval(function(){runTimer(player);},1000);

      } else if (event.data == -1) { // not started
         //console.log ("video not started");
         _satellite.track("video", "youtube-not-started " + playerID);

      } else if (event.data == 0) { // ended
         clearInterval(trackingInterval[playerID]); // Tracking Interval Stop      
         //console.log ("video ended");
         _satellite.track("video", "youtube-ended " + playerID);
         
      } else if (event.data == 2) { // paused
         clearInterval(trackingInterval[playerID]); // Tracking Interval Stop
         //console.log ("video paused");
         _satellite.track("video", "youtube-paused " + playerID);
      } else if (event.data == 3) { // buffering
         //console.log ("video is on buffering");
         _satellite.track("video", "youtube-on-buffering " + playerID);

      } else if (event.data == 4) { // cued
         //console.log ("video is cued");
         _satellite.track("video", "youtube-cued " + playerID);
      } 
      
    }
};

//for Youtube player runTimer 
function runTimer(player){ 
  if(player){
       var currentTime = player.getCurrentTime();
       var playbackRate = Math.round(currentTime / player.getDuration() * 100);
       //console.log("currentTime = [%f], playbackRate=[%s]", currentTime, playbackRate );
       /*
       if (currentTime >  Math.round(player.getDuration()/4) && currentTime < Math.round(player.getDuration()/4) + 1 ){
           console.log("25% passed !!!");
       } 
      */
      if(playbackRate == 1 || playbackRate == 25 || playbackRate == 75 || playbackRate > 99 ){
        var sName = (playbackRate == 1 ) ? " started " : playbackRate + "% video-passed";
        //console.log(sName + "!!!!");
        //_satellite.track(sName );
      }
  }
};

//For mp4 video player runTrackTimer
function runTrackTimer(videoPlayerID){
    var videoHandle = document.getElementById(videoPlayerID);
    players[videoPlayerID].duration = videoHandle.duration;

    if(videoHandle.readyState == 4 && videoHandle.played.length>0){
        players[videoPlayerID].played = videoHandle.played.end(0)-videoHandle.played.start(0);
    }

    if(videoHandle.ended){
      _satellite.track("video", "mp4-ended " + videoPlayerID);
      clearInterval(trackingInterval[videoPlayerID]); // Tracking Interval Stop          
    }
    
    players[videoPlayerID].playbackRate = Math.round(players[videoPlayerID].played / players[videoPlayerID].duration * 100);

    if( players[videoPlayerID].r0 == false){
        players[videoPlayerID].r0 = true;
        //console.log("%s : video playback started &&&", videoPlayerID);
        _satellite.track("video", "mp4-started " + videoPlayerID);        
    }
    else if(players[videoPlayerID].playbackRate >= 25 && players[videoPlayerID].r25 == false){
        players[videoPlayerID].r25 = true;
        //console.log("%s : video playback 25% &&&", videoPlayerID);
        _satellite.track("video", "25% mp4-passwd" + videoPlayerID);                        
    }
    else if(players[videoPlayerID].playbackRate >=50 && players[videoPlayerID].r50 == false){
        players[videoPlayerID].r50 = true;
        //console.log("%s : video playback 50% &&&", videoPlayerID);
        _satellite.track("video", "50% mp4-passwd" + videoPlayerID);                                  
    }
    else if(players[videoPlayerID].playbackRate >=75 && players[videoPlayerID].r75 == false){
        players[videoPlayerID].r75 = true;
        //console.log("%s : video playback 75% &&&", videoPlayerID);
        _satellite.track("video", "75% mp4-passwd" + videoPlayerID);                          
    }
    else if(players[videoPlayerID].playbackRate > 99 && players[videoPlayerID].r99 == false){
        players[videoPlayerID].r99 = true;
        //console.log("%s : video playback 100% && clearInterval!!", videoPlayerID);
        _satellite.track("video", "100% mp4-passwd" + videoPlayerID);        
        clearInterval(trackingInterval[videoPlayerID]); // Tracking Interval Stop            
    }

}



// Load YouTube Frame API
$(document).ready(function(){
  if($('.movieContent').length || $('#csr_video').length){
 
	var flowPlayerScript ;
    var elScript = document.createElement("script"); 
    var before   = document.getElementsByTagName("script")[0];
    var hasYT = 0;
    $(".btnMovie").each(function(){
      if($(this).attr("data-media-movie") == "youtube") hasYT++;

    });
    if(hasYT){
       elScript.src = "https://www.youtube.com/player_api"; //(location.protocol == 'https:' ? 'https' : 'http') 
       before.parentNode.insertBefore(elScript, before);      
    }  
    else{
    	Movie_Ready(true);  
    }
    
    $(".movieContent").find(".btnMovie").each(function(){
    	//M-00107 정훈 : device value가 'desktop'으로 와서 'pc'로 지정하기 위해 한번더 device 정보 확인 
    	device = getDevice4Flowplayer();
    	//case of mobile deviece in streaming : make href component
    	//M-00063 videoType이 없는 경우 스크립트 오류 수정
        if($(this).attr("data-media-movie") != undefined && ! "youtube||mp4".match($(this).attr("data-media-movie").toLowerCase())){        	
            if(!flowPlayerScript){
              flowPlayerScript = document.createElement("script");
              flowPlayerScript.src = _FLOWPLAYERJS_;
              before.parentNode.appendChild(flowPlayerScript);
            }            
        	var videoID = $(this).attr("data-vid");
            var videoPlayerID = "player_" + Math.floor(Math.random() * 100) + 1;                     
            if(videoID && $(this).next("div").length < 1 && device != "pc"){  // the video not exists
                  if(videoID.indexOf("/") < 0) videoID = "/" + videoID;
                  var arTmp = videoID.split('/'); 
                  var arLen = arTmp.length - 1;
                  arTmp[arLen] = "mp4:" + arTmp[arLen];                                  
                  var newUrl = (device == "ios") ? _HTTP_PATH_ + arTmp.join('/') + _IOSPLAYLIST_ : _RTSP_PATH_ + videoID;
                  $(this).attr("href", newUrl);
                  var newHtml = $(this).parent().html().replace("button", "a"); //"button" tag change to "a"
                  $(this).parent().html(newHtml);                
              }          
        }
    });
    Movie_Ready(function(){
    	//M-00107 정훈 : device value가 'desktop'으로 와서 'pc'로 지정하기 위해 한번더 device 정보 확인
    	device = getDevice4Flowplayer();
        $(document).on('click', '.movieContent .btnMovie', function(e){ 
        	if(device == "pc") e.preventDefault();
            var type = $(this).attr("data-media-movie");
            var videoID = $(this).attr("data-vid");
            var videoPlayerID = "player_" + Math.floor(Math.random() * 100) + 1;         
           // S: 200408 layer popup open type add
          if (type == "youtube" && videoID && $(this).children("iframe").length < 1) {
              var movieTitle = $(this).find("img").attr("alt") ? $(this).find("img").attr("alt") : 'Youtube Video';
              if($(this).attr("data-open") === "layerpopup"){
                videoLayerpopup($(this));
              }else{
                $(this).closest(".movieContent").append('<div id="' + videoPlayerID + '"></div>');
              }
              players[videoID] = new YT.Player(videoPlayerID, {
                height: 600,
                title: movieTitle,
                width: 1120,
                videoId: videoID,
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange(videoPlayerID),
                }
              });
              
				/* S: 211202 add */
				$('.tabWrap .tabArea .tab').on('click',function(){
					players[videoID].pauseVideo();
				});
				/* //E: 211202 add */
				
          // E: 200408 layer popup open type add
            }else if(type == "mp4" ){    
              if(videoID && $(this).closest(".movieContent").children("video").length < 1){  // the video not exists
                $(this).closest(".movieContent").append('<video id="' + videoPlayerID + '" autoplay  controls src="'+videoID+'"></video>');                
                players[videoPlayerID] = {r0:false, r25:false,r50:false,r75:false,r99:false,duration:0,played:0,playbackRate:0};
                trackingInterval[videoPlayerID] = setInterval(function(){runTrackTimer(videoPlayerID);},1000);                
              }
            }
            else { //streaming service
              if(videoID && $(this).next("div").length < 1){  // the video not exists
                  var arTmp = videoID.split('/'); 
                  var arLen = arTmp.length - 1;
                  arTmp[arLen] = "mp4:" + arTmp[arLen];                
                  
                  if(device == "pc"){
                        $(this).closest(".movieContent").append('<div id="' + videoPlayerID + '"></div>');
                        var newUrl = arTmp.join('/');
                        if(newUrl.indexOf('/') == 0) newUrl = newUrl.replace('/', '');                    
                        flowplayer(videoPlayerID, _FlowPlayerSWF_, {
                            clip: {
                                  url: newUrl,
                                  scaling: 'fit',
                                  // configure clip to use hddn as our provider, referring to our rtmp plugin
                                  provider: 'rtmp'
                              },
                              // streaming plugins are configured under the plugins node
                              plugins: {
                                  // here is our rtmp plugin configuration
                                  rtmp: {
                                      url: _FlowPlayerRtmpSWF_,
                                      // netConnectionUrl defines where the streams are found
                                      //rtmp://58.87.34.196:1935/kids
                                      netConnectionUrl: _RTMP_PATH_
                                  }
                              },
                              canvas: {
                                  backgroundGradient: 'none'
                              }
                          });
                    
                  }
                  else{ //ios && android/others인 경우
                  
                  }
                  //console.log("%s(%s) : video playback started &&&", videoPlayerID, device);
                  _satellite.track("video", "streaming-started " + videoPlayerID);        
              }
            	
            }        
        });
    });//Movie_Ready
    
  }//if('.movieContent').length > 0
  // S: 200408 layer popup open type add
  	function videoLayerpopup(target){
  		var returnFocus;
  		// 동영상 팝업
  		$('#videoLayer').remove();
  		$('#videoDimmed').remove();
  		var videoType=target.attr('data-video-type');
  		var layerName = 'video-layer';
  			var container = $('.section_pop_video');
  			var videoId=target.attr('data-vid');
  			var videoTitle="";
  			if(target.attr('data-video-title')) videoTitle = target.attr('data-video-title');
  			container.append('<div class="layer_wrap fixed_layer_wrap on"><div class="layer '+layerName+'" id="videoLayer"><div class="layer_dim" id="videoDimmed"></div><div class="layer_inner"><div class="video"><iframe src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=0" data-cookieconsent="marketing" title="'+videoTitle+'" allowfullscreen="1"></iframe><button class="close"><span class="blind">Close</span></button></div></div></div></div>');
  			$('#videoLayer .video button.close').unbind('click').click(function() {
  				container.find('.layer_wrap').remove();
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
  		returnFocus = target;

  		// 레이어 닫기
  		$('.layer_wrap .btn_close').click(function() {
  				var mylayer = $('.section_pop_video .layer_wrap');
  				//mylayer.hide();
  				mylayer.removeClass('on');

  				if($(this).parents('.exterior_wrap').length>0) { // exterior_wrap 전용
  						$(this).parents('.layer').removeClass('on');
  				}
  				$('html').removeClass('modal-on');
  				if(returnFocus) {
  						returnFocus.focus();
  				}
  				return false;
  		});
  		$('.layer_wrap .layer_dim').unbind('click').click(function() {
  				$(this).parent().find('.btn_close').trigger('click');
  				return false;
  		});
    }
    // E: 200408 layer popup open type add
});
/********************************
 * 파일명 : tab.js
 * 설명 : Tab Common Script
 * 수정일		   수정자	   Version	설명
 * ---------- ------- -------- -------------------
 * 2016.11.25  정진호    1.0     최초생성
 */


$(document).ready(function () {
    $('.tabWrap .tabArea .tab').on('click',function(){
		Tab.changeBlackStyleTab(this);
    });
});



var Tab = (function(){
	
    this.changeBlackStyleTab = function(tab){
    	 $(tab).parent('ul.tabArea').children('li').each(function(){
    		 if(this == tab){
    			 showTab(this);
    	     }else{
    	    	 hideTab(this);
    	     }
    	 });
    }

    this.showTab = function(tabEl){
        $tabEl = $(tabEl);
        $(tabEl).addClass('on');
    	$('#' + $tabEl.attr('data-parsys-id')).show();
    }

    this.hideTab = function(tabEl){
        $tabEl = $(tabEl);
    	$(tabEl).removeClass('on');
        $('#' + $tabEl.attr('data-parsys-id')).hide();
    }
    
    return this;

})();
	//button item show.hide();
$(function(){ 
    $('.year-report-list .reportWrap .btn.big').on('click', function(){
    	$(this).parents('.reportWrap').find('.grid').show();
        $(this).hide();
        return false;
    });
});
