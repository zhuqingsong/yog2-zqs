const $ = require("home:static/libs/jquery.js");
const util = require("home:static/libs/util.js");
const mid = "@";

module.exports.init = function () {
    
    layui.use([],function(){
    var form = layui.form;

    //登录按钮
    form.on("submit(login)",function(data){

    	var userName = $("#userName").val();	
    	var password = $("#password").val();
    	if($.trim(userName) ==''){
    		$(`.${mid}tishi-box p`).html("用户名为空");
    		return false;
    	}
    	if($.trim(password) ==''){
    		$(`.${mid}tishi-box p`).html("密码为空");
    		return false;
    	}
		$(this).text("登录中...").attr("disabled","disabled").addClass("layui-disabled");
    	var user = {"username":userName,"pwd":password};
    	util.getAjax('post','/back/loginIn',user).then(function(d){
    				if(d.code==1){
    					$(`.${mid}tishi-box p`).html("用户名为空");
    				}else{
    					location.href="/back/index"
    				}
		})

        
        return false;
    })
})

}