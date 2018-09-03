const $ = require("home:static/libs/jquery.js");
const mid = "@";
module.exports.init = function () {
 
	var w = $(".layui-body").width();
	var h = $(".layui-body").height();

	$("#iframebox").width(w);
	$("#iframebox").height(h);

	$("a").click(function(){
		var temp = $(this).attr("data-url");
		if(typeof(temp)!="undefined"){
				$("#iframebox").attr("src",temp);
		}else{
				return false;
		}

	})

  layui.use('element', function(){
	  var element = layui.element;
	});

}
