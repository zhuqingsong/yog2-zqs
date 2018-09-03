

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


module.exports.uncompileStr = function (code){      
     code=unescape(code);      
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);      
     for(var i=1;i<code.length;i++)
     {      
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));      
     }      
    return c;   
}


exports.JMNum = function(len,txt){
  var strnum = exports.generateNonceString(len);
  var rondom = exports.fRandomBy(0,len-1);
      strnum = strnum+rondom+len;
      if(rondom==0){
          rondom = 1;
      }
    var  strArr = strnum.split('');
         strArr[rondom-1] = txt;
    var newstr  =  strArr.join('');
      return newstr;
}

//随机生成一个字符串
exports.generateNonceString = function(length){
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var maxPos = chars.length;
    var noceStr = "";
    for (var i = 0; i < (length || 32); i++) {
        noceStr += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return noceStr;
}



//随机生成一个数;
exports.fRandomBy = function(under, over){
    switch(arguments.length){
        case 1: return parseInt(Math.random()*under+1);
        case 2: return parseInt(Math.random()*(over-under+1) + under);
        default: return 0;
    }
}

