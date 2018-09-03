var model = require('../../model/getModel.js');
var util = require('../../lib/util.js');
var async = require('async');

module.exports = function(req, res){
  var sql = "select kc.kc_name,kc.id from doctor_teach_kc kc";
    async.parallel([
       function(cb){
          model.findSql(sql,function(data){
                cb(null,data);
          })
        }
    ],function(err,result){
         res.render('home/page/back/userList.tpl',{ data:result[0] } );
    })
};


module.exports.listJson = function(req,res){
	var page = req.query.page;
	var limit = req.query.limit;
	var curlimt = parseInt(page - 1) * limit;
	var sql = "select * from doctor_user_kc limit "+curlimt+', ' + limit;
	async.parallel([
          function(cb){
              model.findSql(sql,function(data){
                    cb(null,data);
              })
          },
          function(cb){
          	var countsql = "select count(*) as count from doctor_user_kc";
              model.findSql(countsql,function(data){
                    cb(null,data);
              })
          }
    ],function(err,result){
         res.json({"msg":"",code:'0',data:result[0],count:result[1][0].count });
    })
}

module.exports.listDel = function(req,res){
    var tid = req.body.id;
    model.Del("doctor_user_kc",{id:tid},function(data){
        console.log(data);  
        if(data.affectedRows > 0){
           res.json({"msg":"删除成功",code:'0'});
        }else{
           res.json({"msg":"删除失败",code:'1'});
        }
        
    })
}

module.exports.userkcUpdate = function(req,res){
    
      var stuid = req.body.stuid;
      var kcid = req.body.kcid;
    //var kcArr = kcid.split('-');

     var sql ="update doctor_user_kc set stu_kc ='"+stuid+"'  where id=" + kcid;
     model.findSql(sql,function(data){
        console.log(data);  
        if(data.affectedRows > 0){
           res.json({"msg":"更新成功",code:'0'});
        }else{
           res.json({"msg":"更新失败",code:'1'});
        }
    })
}



module.exports.teachAdd = function(req,res){


    var title = req.body.title,
        phone = req.body.phone,
        filename = req.body.filename,
        zz = req.body.teachzc,
        content = util.html_encode(req.body.content);


    var data = {"teach_name":title,"teach_tel":phone,"teach_title":zz,"teach_header":filename,"teach_desc":content }


    model.insertData("doctor_teach",data,function(result){
        if(result.affectedRows > 0){
            res.json({"msg":'添加成功',"code":0})
        }else{
            result.json({"msg":'添加失败',"code":1})
        }
    })
}