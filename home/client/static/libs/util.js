const  $ = require("./jquery.js");
module.exports.getAjax = function(type, url, data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            datatype: 'json',
            success: function(data) {
                console.log(data);
                resolve(data)
            },
            error: function(error) {
                reject(error)
            }
        })
    })
}




module.exports.html_encode = function (str){ 
        var s = ""; 
        if (str.length == 0) return ""; 
        s = str.replace(/&/g, "&amp;"); 
        s = s.replace(/</g, "&lt;"); 
        s = s.replace(/>/g, "&gt;"); 
        s = s.replace(/ /g, "&nbsp;"); 
        s = s.replace(/\'/g, "&#39;"); 
        s = s.replace(/\"/g, "&quot;"); 
            s = s.replace(/\n/g, "<br/>"); 
        return s; 
} 


module.exports.compileStr = function (code){  //对字符串进行加密       

      var c=String.fromCharCode(code.charCodeAt(0)+code.length);

     for(var i=1;i<code.length;i++){  

          c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
      }   
      return escape(c);   
 }

 
module.exports.getQueryString = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return r[2]; return '';
}
