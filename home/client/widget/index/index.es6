const mid = "@";
const $ = require("home:static/libs/jquery.js");
const Swiper = require("home:static/libs/swiper.min.js");
const util = require("home:static/libs/util.js");
const _list = __inline("list.tmpl");
module.exports.init = function(){
    "use strict";



    var swiper = new Swiper(`.${mid}study-tit`, {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
        });



    $(`.${mid}key`).click(function(){
    
       var key =$.trim($(this).html());
       util.getAjax('post','/getIndexJson',{"key":key}).then(function(d){
            console.log(d);
            const list = _list(d);
            $(`.${mid}study-content`).html(list);
       })



    })    

        

   
        
  


    


}
