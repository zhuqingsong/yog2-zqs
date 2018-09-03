const $ = require("home:static/libs/jquery.js");
const util = require("home:static/libs/util.js");
const mid = "@";

module.exports.init = function () {
	
	var curid = "";
	layui.use('table',function(){
	  	var table = layui.table;
		var form = layui.form;
		var index=null;
	  	table.on('tool(user)', function(obj){
			    var data = obj.data;
			    if(obj.event === 'addkc'){

					layer.open({
					         type: 1
					        ,title: false 
					        ,closeBtn: true
					        ,area: ['800px','500px']
					        ,shade: 0.4
					        ,shadeClose:true
					        ,id: 'LAY_layuipro' 
					        ,btnAlign: 'c'
					        ,moveType: 1 
					        ,content: $("#userkc").html()
					        ,success: function(layero){											  	
					        	var kcArr = data.stu_kc.split('-');
					        		curid = data.id;
					        		console.log(curid);
					        	$("input[name='kc_list']").each(function(i,ele){
					        			var v = $(ele).val() + '';
					        			if($.inArray(v,kcArr)!='-1'){
					        				console.log(v);
					        				$(ele).attr('checked',true);
					        				form.render();
					        			}
					        	})

							}
					})
			      
			    } else if(obj.event === 'del'){
			    	console.log(data);
			      layer.confirm('确定删除嘛？', function(index){
			      	util.getAjax('post','/back/user/listDel',{"id":data.id}).then(function(d){
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



				  	form.on('submit(sub2)',function(data){
				  			var check_val = '';
				  			var Obj = $("input[name=kc_list]");
				  				for(k in Obj){
							        if(Obj[k].checked){
							        	check_val += Obj[k].value+'-';
							        }
							    }
							check_val = check_val.substring(0,check_val.length-1);
							data.field.stuid = check_val;
							data.field.kcid = curid;
				  		util.getAjax('post','/back/user/userkcUpdate',data.field).then(function(d){
				  				if(d.code==0){
				  					layer.msg('更新成功', {
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