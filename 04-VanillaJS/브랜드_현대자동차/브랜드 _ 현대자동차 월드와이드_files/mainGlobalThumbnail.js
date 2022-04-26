/*************************************************************
  Name : fn_main_globalThumbnail_draw 
  Desc : Get video-list by AJAX call 
  Date        Author        Version     Comment
  ----------  -----------   ----------- -------------------------
  2017.01.09  Lee Seungki   1.0         initialize

 *************************************************************/
function fn_main_globalThumbnail_draw(main_global_draw_target){
    $.ajax({
        type: "POST",
        url: "/wsvc/ww/main.globalThumnail.do",        
        dataType : 'json',              
        success: function(resData) {
            var retData = resData.data;
            if(retData){
                if(retData.cityName && retData.countryName){
                    $(main_global_draw_target + " .location").html(retData.cityName +", "+retData.countryName);
                }else if(!retData.cityName && retData.countryName){
                    $(main_global_draw_target + " .location").html(retData.countryName);
                }
                if(retData.countryCode) $(main_global_draw_target + " .location").attr("data-country", retData.countryCode.toLowerCase());
            }
            return true;            
        }
    });
}

