var arPath = location.pathname.split(".");
var extension = ".html";
var mySwiper = null;

$(document).ready(function() {
    console.log( "ready!" );
        var x = window.location.href.split('/');
        var selector = x[x.length-1];
        var length = selector.split('.').length;
        $('#news_list_topic_category > ul > li').removeClass('on');
        if(length == 2){
        var key = selector.split('.')[length-1];
            key = decodeURIComponent(key);
            console.log(key);
            if(key!="html"){
             key = key.replace(/-/g , " ") ; 
             fn_move_topic(key);}
         }
       else if(length > 2){
        var key = selector.split('.')[2];
            key = decodeURIComponent(key);
            key = key.replace(/-/g , " ") ; 
           console.log(key);
        fn_move_topic(key);
       }
});


function fn_move_topic(topicName) {
	var formattedTopic = topicName.toLowerCase().replace("'" , "").replace(/-/g , " ");

    $.ajax({
        type: "GET",
        url: "/wsvc/ww/nav",
        data: {
            'langCode': langCode,
            'keyword': formattedTopic
        },
        dataType: "text",
        success: function(result) {
            var word="";
            var articleList = JSON.parse(result);
            var html = "";
            document.getElementById('filteredArticleContent').innerHTML = "";
            $(".articleContent").css("display", "none");
             $(".main-hero").css("display", "none");
             $(".main-social").css("display", "none");
             $(".main-news").css("display", "none");
             $(".main-large").css("display", "none");
             $("#show-more-layer").css("display", "none");

            html += '<div class="main-article">' +
                '   <div class="articleContent">' +
                '  <div class="main-article" id="main_article_1513307149">' +
                '     <section class="area-cols bgW" style="padding-top: 25px; padding-bottom: 100px;" data-style-pc="padding-top: 25px; padding-bottom: 25px;" data-style-mobile="padding-top: 15px; padding-bottom: 58px;">' +
                '        <h2 class="ir_hidden">section title</h2>' +
                '       <div class="wrap-cols-multiW contBox-2">';
            var i;

            for (i = 0; i < articleList.data.length; i++) {
                      var path = articleList.data[i].pagePath;
                	  var pageName = path.split('/');
                 if(location.port != "4502") {
                     path = path.replace("/content/hyundai/ww/" , "/worldwide/");
                 } else {
                	 path = path + '.html';
                 }
                html +=

                    ' <div class="col-6w half mob-article">' +
                    '         <a href="' + path + '" target="_self" data-track-name="main^article" data-track-description="' + articleList.data[i].category + '^' + pageName[6] + '" <="" sly="">' +
                    '    <div class="imgArea">' +
                    '       <img src="' + articleList.data[i].pcThumbnail + '" data-media-pc="' + articleList.data[i].pcThumbnail +
                    '" data-media-mobile="' + articleList.data[i].mobileThumbnail + '" alt="' + articleList.data[i].keyword + '">' +
                    '  </div>' +
                    ' <h3 class="colTit">' +
                    '    <span class="category" style="color:">' + articleList.data[i].category + '</span>' +
                    '   <span><p>' + articleList.data[i].title+ '</p>' +
                    '</span>' +
                    '</h3>' +
                    '   </a>' +

                    ' </div>';
                   word = articleList.data[i].actualWord;
            }

            html +=
                '            </div>' +
                '       </section>' +
                '  </div>' +
                ' </div>' +
                '<div id="filteredArticleContent">' +
                '   </div>' +
                '</div>';
            document.getElementById('filteredArticleContent').innerHTML = html;
            wordLower = word.toLowerCase();

            if(document.getElementById(formattedTopic) != null) {
                $('#news_list_topic_category > ul > li').removeClass('on');
                document.getElementById(formattedTopic).classList.add("on");
            } else {
                $('#news_list_topic_category > ul > li').removeClass('on');
                if(langCode=="en_ww") {
                	document.getElementById('main_article_1513307149').innerHTML =  '<div class="keywordMissing"><div class="tit"> This is the result of searching with #<strong>' + word + '</strong> </div></div>' + html;
                } else {
                	var word_result = word;
                	if(!word_result.includes('i20') && !word_result.includes('i30')) {
                		word_result = word.charAt(0).toUpperCase() + word.slice(1);
                	}
                
                	document.getElementById('main_article_1513307149').innerHTML =  '<div class="keywordMissing"><div class="tit">'+ '#<strong>' +  word_result + '</strong>'+  '  검색 결과입니다.' + '</div></div>' + html;
                }
            }

                
                
        var pageName = topicName.replace(/ /g , "-").toLowerCase();
        var keywordPageName = 'en.keyword.' + topicName.replace(/ /g , "-").toLowerCase();
        var url = "";
        
	    if(location.port != "4502") {
	
	        if (langCode == "en_ww") {
	            $("#news_list_topic_category > ul > li").each(function(i) {
	                url = "/worldwide/en.keyword" + "." + pageName;
	                gfnChangeLocation(url, word.replace('&#39;', "'"), "0");

	            });
	        } else {
	            $("#news_list_topic_category > ul > li").each(function(i) {
	                url = "/worldwide/ko.keyword" + "." + pageName;
	                gfnChangeLocation(url, word.replace('&#39;', "'"), "0");
	
	                keywordPageName = keywordPageName.replace('en', 'ko');
	            });
	        }
	    } else {
	        if (langCode == "en_ww") {
	            $("#news_list_topic_category > ul > li").each(function(i) {
	                url = "/content/hyundai/ww/en.keyword" + "." + pageName + extension;
	                gfnChangeLocation(url, word.replace('&#39;', "'"), "0");
	
	            });
	        } else {
	            $("#news_list_topic_category > ul > li").each(function(i) {
	                url = "/content/hyundai/ww/ko.keyword" + "." + pageName + extension;
	                gfnChangeLocation(url, word.replace('&#39;', "'"), "0");
	                
	                keywordPageName = keywordPageName.replace('en', 'ko');
	            });
	        }
	    }
	    var kIndex = document.location.href.lastIndexOf('/');
	    
	    digitalData.page.pageInfo.pageName = keywordPageName;
	    digitalData.page.pageInfo.pageURL = document.location.host + url;
        }
    })


}
