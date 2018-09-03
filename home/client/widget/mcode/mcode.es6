const mid = "@";
const $ = require("home:static/libs/jquery.js");
module.exports.init = function(){
    "use strict";
    var fst = false;
    $(`button.${mid}code-btn`).click(function(){
        var curId=$(this).attr("itemId");
        if(fst){
            alert("请5秒后在次替换");
            return false;
        }
        fst = true;
        $.post('/mShare/updateCode',{"itemId":curId},function (data) {
              if(data.code==1){
                alert(data.msg);
                window.location.href="/mShare/getSt";
              }else{
                alert(data.msg);
              }
              setTimeout(function(){
                  fst = false;
              },5000);
        })
    })
}
