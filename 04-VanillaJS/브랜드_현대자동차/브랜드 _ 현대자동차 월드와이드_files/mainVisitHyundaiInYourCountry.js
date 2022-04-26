/********************************
 * 파일명 : mainVisitHyundaiInYourCountry.js
 * 설명 : Main Visit Hyundai in your country Component Script
 * 수정일		수정자	 Version	설명
 * ---------- ------- -------- -------------------
 * 2018. 09. 07  최원희  1.0    최초생성
 */

$(function(){
	
	// M-00134  모바일 국가지역 이동 스크립트 s
	var vcLocationData = fnGetYourLocation();
    if(vcLocationData){     
		if(vcLocationData.countryCode){
			$("div.mainVisitWrap .btn_country a").prop("href", Header.goToCountry.movePage(vcLocationData.countryCode));
         }      
		
        if(vcLocationData.countryCode && vcLocationData.countryName){
        	$("div.mainVisitWrap .location").html(vcLocationData.cityName+', ' + vcLocationData.countryName);
        }
     }
    // M-00134  모바일 국가지역 이동 스크립트 e

	var $vcDefaultCountry = $("#vcAllCountries option[data-code='']");
    $('div.mainVisitWrap #region').on('change', function(){
        if($(this).val()){
        	$("div.mainVisitWrap #country").find("option").remove();
        	$("div.mainVisitWrap #country").append($("#vcAllCountries option[data-region=" + $(this).val() + "]"));
        	$("div.mainVisitWrap #country").prepend($vcDefaultCountry);
        }
    });
    
    $('div.mainVisitWrap #country').on('change', function(){
    	var countryCode = $(this).children('option:selected').attr('value');
    	$('div.mainVisitWrap #country').attr("data-country-href", Header.goToCountry.movePage(countryCode));
    });

    
    $("div.mainVisitWrap span.sc_country_btn.ml8").on(
    		"click", 
    		function(){
    			 if( $('div.mainVisitWrap #country').attr("data-country-href") ){
    				 location.href =  $('div.mainVisitWrap #country').attr("data-country-href");
    			 }
    		}
    );
});