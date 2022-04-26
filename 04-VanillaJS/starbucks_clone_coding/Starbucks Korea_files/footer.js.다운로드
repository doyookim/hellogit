
$(document).ready(function(){

	/* footer */
	/* s::202107 수정 */
	var m_footer =

'		<ul class="footer_awards_slider">' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="여섯가족부 2020 대한민국 일자리대상 여성가족부장관상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award23.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="행정안전부 2020 소방의 날 행정안전부장관 표창" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award24.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="농림축산식품부 2020 대한민국 커피산업대상 농림축산식품부 장관상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award25.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="산업통상자원부 2020 대한민국 중소중견기업혁신 대상 국회산업통상자원중소벤처위원회장상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award26.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="일자리위원회 2020 대한민국 일자리 유공 표창 대통령직속 일자리위원회 부위원장상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award27.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="동반성장위원회 2020 사랑나눔 사회공헌대상 동반성장위원회 위원장상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award28.jpg"></a></li>' + //202107 수정
'		</ul>';
	
	var t_footer =

'		<ul class="footer_awards_slider">' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="여섯가족부 2020 대한민국 일자리대상 여성가족부장관상" src="//image.istarbucks.co.kr/common/img/footer/t_footer_award23.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="행정안전부 2020 소방의 날 행정안전부장관 표창" src="//image.istarbucks.co.kr/common/img/footer/t_footer_award24.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="농림축산식품부 2020 대한민국 커피산업대상 농림축산식품부 장관상" src="//image.istarbucks.co.kr/common/img/footer/t_footer_award25.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="산업통상자원부 2020 대한민국 중소중견기업혁신 대상 국회산업통상자원중소벤처위원회장상" src="//image.istarbucks.co.kr/common/img/footer/t_footer_award26.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="일자리위원회 2020 대한민국 일자리 유공 표창 대통령직속 일자리위원회 부위원장상" src="//image.istarbucks.co.kr/common/img/footer/t_footer_award27.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="동반성장위원회 2020 사랑나눔 사회공헌대상 동반성장위원회 위원장상" src="//image.istarbucks.co.kr/common/img/footer/t_footer_award28.jpg"></a></li>' + //202107 수정
'		</ul>';
	
	var w_footer =
'		<ul class="footer_awards_slider">' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="여섯가족부 2020 대한민국 일자리대상 여성가족부장관상" src="//image.istarbucks.co.kr/common/img/footer/footer_award23.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="행정안전부 2020 소방의 날 행정안전부장관 표창" src="//image.istarbucks.co.kr/common/img/footer/footer_award24.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="농림축산식품부 2020 대한민국 커피산업대상 농림축산식품부 장관상" src="//image.istarbucks.co.kr/common/img/footer/footer_award25.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="산업통상자원부 2020 대한민국 중소중견기업혁신 대상 국회산업통상자원중소벤처위원회장상" src="//image.istarbucks.co.kr/common/img/footer/footer_award26.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="일자리위원회 2020 대한민국 일자리 유공 표창 대통령직속 일자리위원회 부위원장상" src="//image.istarbucks.co.kr/common/img/footer/footer_award27.jpg"></a></li>' +
'			<li><a taget="_blank" href="javascript:void(0);"><img alt="동반성장위원회 2020 사랑나눔 사회공헌대상 동반성장위원회 위원장상" src="//image.istarbucks.co.kr/common/img/footer/footer_award28.jpg"></a></li>' + //202107 수정
'		</ul>';

	if (myWindow < 640) {
		$('.footer_awards_wrap_inner').prepend(m_footer);
		//$('.footer_awards_slider').hide();		
	} else if (myWindow < 1280) {
		$('.footer_awards_wrap_inner').prepend(t_footer);
	} else {
		$('.footer_awards_wrap_inner').prepend(w_footer);
	}
	/* e::202107 */
	
	$('.footer_awards_wrap_inner p.footer_award_btn').click(function(){
		console.log('d');
		$('ul.footer_awards_slider').slideToggle();
		$(this).children().children().toggleClass('footer_arrow_up');
	});
	
	$(".mob_gnb_search_btn").unbind("click").on("click", function(){

		if(pattern_check("#search_text" ,   	  "검색어를  입력하세요." , "허용되지 않은 문자입니다."	, getPattern('BASIC3') )==false){return;}
		var search_word = encodeURI(encodeURIComponent( $("#search_text").val() ));
		
		location.href="/search/search.do?search="+search_word;	
		
		
		console.log("######################");
	});	

});

