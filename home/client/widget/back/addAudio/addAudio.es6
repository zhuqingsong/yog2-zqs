const $ = require("home:static/libs/jquery.js");
const util = require("home:static/libs/util.js");
const mid = "@";

module.exports.init = function () {
  layui.use('table',function(){
		var form = layui.form;
		var upload = layui.upload;
		var laydate = layui.laydate;
		 laydate.render({
			    elem: '#date1'
		   });

		  upload.render({
		    elem: '#uploadAudio'
		    ,url: '/back/upAudio'
		    ,accept: 'audio' //视频
		    ,done: function(res){
		      console.log(res)
		      $("#audioimg").val(res.data.title);
		      $(`.${mid}ds-inline`).html(res.data.title);
		    }
		 });

		form.on('submit(sub1)',function(data){
	  		util.getAjax('post','/back/course/subAudio',data.field).then(function(d){
	  				if(d.code==0){
	  					layer.msg('提交成功', {
						     btn: ['OK']
						     ,yes: function(index, layero){
						         location.reload();
						     }
						});
	  					
	  				}
	  		})
		    return false;
	  	})



	})

}