const $ = require("home:static/libs/jquery.js");

module.exports.init = function () {
 
  layui.use('layedit',function(){

  		var layedit = layui.layedit;
  		layedit.build('LAY_demo_editor',{
  			height:180
  		}); 
  })


 }