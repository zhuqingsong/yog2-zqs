var mid = '@';
const $ = require("home:static/libs/jquery.js");
const util = require("home:static/libs/util.js");
module.exports.init = function (teach,kc) {
  let cdetail = $(`.${mid}cd_detail_content`);
  $(`.${mid}cd_detail_box a`).click(function(event) {
    /* Act on the event */
    var index = $(this).index(`.${mid}cd_detail_box a`);
    $(this).addClass(`${mid}active`).siblings('a').removeClass(`${mid}active`);
    if(index==0){
        cdetail.html($("#kcdetail").html());
    }
    if(index==1){
        cdetail.html($("#kclist").html());
    }
    if(index==2){
       cdetail.html(html_encode($("#teach").html()));
    }
});


   $(`.${mid}pay_s2`).click(function(){
      $(`.${mid}zx-mask`).show();
   })

   $(`.${mid}zx-close`).click(function(){
      $(`.${mid}zx-mask`).hide();
   })

}


function html_encode(str){
     var s = ""; 
    if (str.length == 0) return ""; 
    s = str.replace(/&amp;/g, "&"); 
    s = s.replace(/&lt;/g, "<"); 
    s = s.replace(/&gt;/g, ">"); 
    s = s.replace(/&nbsp;/g, " "); 
    s = s.replace(/&#39;/g, "\'"); 
    s = s.replace(/&quot;/g, "\""); 
    s = s.replace(/<br\/>/g, "\n"); 
    return s; 
 }





