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
	var laydate = layui.laydate;
  	table.on('tool(demo)', function(obj){
		    var data = obj.data;
		    if(obj.event === 'detail'){
		      layer.msg('ID：'+ data.id + ' 的查看操作');
		    } else if(obj.event === 'del'){
		    	console.log(data);
		      layer.confirm('确定删除嘛？', function(index){
		      	util.getAjax('post','/back/course/del',{"id":data.id}).then(function(d){
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

  				$('#addkc').click(function(){
  									layer.open({
							      			 skin: `${mid}demo-class`
									        ,type: 1
									        ,title: false 
									        ,closeBtn: true
									        ,area: ['900px','600px']
									        ,shade: 0.4
									        ,shadeClose:true
									        ,id: 'LAY_layuipro1' 
									        ,btnAlign: 'c'
									        ,moveType: 1 
									        ,content: $("#kcedit").html()
									        ,success: function(layero){
									        	form.render();
									        	 layedit.set({
												      uploadImage: {
												         url: '/back/up' //接口url
												        ,type: 'POST' //默认post
												        ,field : 'photos'
												        ,success:function(res){
												        	console.log(11111,res);
												        }
												      }
												  });

									        	index= layedit.build('course_editor',{
														height:150
												});
												layedit.sync(index)

											   laydate.render({
												    elem: '#date1'
											   });
											   laydate.render({
												    elem: '#date2'
											   });

											   

												var uploadInst = upload.render({
											    elem: '#uploadBanner'
											    ,url: '/upload'
											    ,before: function(obj){
											      //预读本地文件示例，不支持ie8
											      obj.preview(function(index, file, result){
											        $('#bannerShow').attr('src', result); //图片链接（base64）
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




  							form.on('submit(sub1)',function(data){
						  		var content = util.html_encode(layedit.getContent(index)); 
						  			data.field.content = content;
						  			var check_val = '';
						  			var Obj = $("input[name=kc_key]");
						  			console.log(Obj);
						  				for(k in Obj){
									        if(Obj[k].checked){
									        	check_val += Obj[k].value+',';
									        }
									    }
									data.field.kc_key = check_val;	
						  		util.getAjax('post','/back/course/courseAdd',data.field).then(function(d){
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
