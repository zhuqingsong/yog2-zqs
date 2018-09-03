const $ = require("home:static/libs/jquery.js");
const util = require("home:static/libs/util.js");
const mid = "@";

module.exports.init = function () {
 
  layui.use('table',function(){
  	var table = layui.table;
	var layedit = layui.layedit;
	var upload = layui.upload;
	var form = layui.form;
	var index=null;
  	table.on('tool(demo)', function(obj){
		    var data = obj.data;
		    if(obj.event === 'detail'){
		      layer.msg('ID：'+ data.id + ' 的查看操作');
		    } else if(obj.event === 'del'){
		    	console.log(data);
		      layer.confirm('确定删除嘛？', function(index){
		      	util.getAjax('post','/back/teach/del',{"id":data.ls_id}).then(function(d){
		      			if(d.code==0){
	      					layer.msg(d.msg);
	      					obj.del();
		      			}else{
		      				layer.msg(d.msg);
		      			}
		      			layer.close(index);
		      	})
		      });
		    } else if(obj.event === 'edit'){
		      		
				};	
  	})

  			//添加老师

  				$('#addteach').click(function(){
  									layer.open({
							      			 skin: `${mid}demo-class`
									        ,type: 1
									        ,title: false 
									        ,closeBtn: true
									        ,area: ['800px','500px']
									        ,shade: 0.4
									        ,shadeClose:true
									        ,id: 'LAY_layuipro' 
									        ,btnAlign: 'c'
									        ,moveType: 1 
									        ,content: $("#lsedit").html()
									        ,success: function(layero){
									        	index= layedit.build('LAY_demo_editor',{
														height:180
												});

												var uploadInst = upload.render({
											    elem: '#uploadHeader'
											    ,url: '/back/upload'
											    ,before: function(obj){
											      //预读本地文件示例，不支持ie8
											      obj.preview(function(index, file, result){
											        $('#imgShow').attr('src', result); //图片链接（base64）
											      });
											    }
											    ,done: function(res){
											      //如果上传失败
											      if(res.code > 0){
											        return layer.msg('上传失败');
											      }else{
											      	$('#fileimg').val(res.filename);
											      	return layer.msg('上传成功');
											      }
											      //上传成功
											    }
											    ,error: function(){
											      //演示失败状态，并实现重传

											    }
											  });	



											  	



											}
											
										})		


  							})




  							form.on('submit(sub)',function(data){
						  		var content = util.html_encode(layedit.getContent(index)); 
						  			data.field.content = content;
						  		util.getAjax('post','/back/teach/teachAdd',data.field).then(function(d){
						  				if(d.code==0){
						  					location.reload();
						  				}
						  		})

							    return false;
						  	})









  })


}
