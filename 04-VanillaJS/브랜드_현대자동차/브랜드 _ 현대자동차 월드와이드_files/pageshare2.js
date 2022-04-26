/* M-00003 pageshare.html => pageshare.js */
addLoadEvent(function(){
	if (!_isMobile()) {
		$(".layerPop.share ul.shareList").append('<li class="btnPinterest"><a href="http://www.pinterest.com/pin/create/button/" type="pinterest" data-track-name="pageshare" data-track-description="Pinterest" ></a></li>');
	}

	$(document).on('click',".shareList li a",function(e) {
		e.preventDefault();
		if ($(this).attr("href")) {
			var pageUrl = $('#canonical-setting-value').attr('href');
			var pageDesc = $('meta[name=description]').prop('content');
			var pageTitle = $("meta[name='twitter\\:title']").prop("content");

			// M-00003 Pinterest 이미지
			//pinterest image에 Facebook image 입력 값 사용
			var pageImage = typeof $('meta[itemprop=image]').prop('content') != 'undefined' ? $('meta[itemprop=image]').prop('content') : "";

			var snsUrl = $(this).attr("href");
			var snsType = $(this).attr("type");

			if (snsType == 'facebook') {
				snsUrl = snsUrl + "?u=" + encodeURIComponent(pageUrl) + "&t=" + encodeURIComponent(pageDesc);
			} else if (snsType == 'twitter') {
				snsUrl = snsUrl + "?url=" + encodeURIComponent(pageUrl) + "&text=" + encodeURIComponent(pageTitle);
			} else if (snsType == 'google') {
				snsUrl = snsUrl + "?url=" + encodeURIComponent(pageUrl) + "&t=" + encodeURIComponent(pageDesc);
			} else if (snsType == 'pinterest') {
				snsUrl = snsUrl + "?url=" + encodeURIComponent(pageUrl) + "&description=" + encodeURIComponent(pageDesc) + "&media=" + encodeURIComponent(pageImage);
			}
			window.open(snsUrl, "snspop","width=800, height=500");
		}
	});    	 
});