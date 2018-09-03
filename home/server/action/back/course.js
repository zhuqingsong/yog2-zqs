var model = require('../../model/getModel.js');
var util = require('../../lib/util.js');
var async = require('async');

module.exports.list = function(req, res){
    async.parallel([
        function(cb){
             model.findAll('doctor_teach',function(data){
                  cb(null,data);
             })
          },
        function(cb){
             model.findAll('doctor_kc_key',function(data){
                  cb(null,data);
             })
        }  
    ],function(err,result){
      res.render('home/page/back/courseList.tpl',{ teachlist:result[0],keylist:result[1] } );
    })
	
};


module.exports.listJson = function(req,res){
	var page = req.query.page;
	var limit = req.query.limit;
	var curlimt = parseInt(page - 1) * limit;
	var sql = "select k.*,t.teach_name from doctor_teach_kc as k left join doctor_teach as t on k.ls_id = t.ls_id limit "+curlimt+', ' + limit;
	async.parallel([
          function(cb){
              model.findSql(sql,function(data){
                    cb(null,data);
              })
          },
          function(cb){
          	var countsql = "select count(*) as count from doctor_teach_kc as k left join doctor_teach as t on k.ls_id = t.ls_id";
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

    model.Del("doctor_teach_kc",{id:tid},function(data){
        console.log(data);  
        if(data.affectedRows > 0){
           res.json({"msg":"删除成功",code:'0'});
        }else{
           res.json({"msg":"删除失败",code:'1'});
        }
        
    })
}



module.exports.courseAdd = function(req,res){


    var price = req.body.kc_price,
        kc_st = req.body.kc_st,
        kc_name = req.body.kcname,
        kc_show = req.body.filename,
        ls_id = req.body.teach_name,
        kc_detail = util.html_encode(req.body.content),
        kk_time = req.body.start_time,
        kk_end = req.body.end_time,
        service = req.body.service,
        kc_key = req.body.kc_key;

    var data = {"ls_id":ls_id,"price":price,"kc_st":kc_st,"kc_name":kc_name,"kc_show":kc_show,"kc_detail":kc_detail,"kk_time":kk_time,"kk_end":kk_end,"service":service,"kc_key":kc_key }
    model.insertData("doctor_teach_kc",data,function(result){
        if(result.affectedRows > 0){
            res.json({"msg":'添加成功',"code":0})
        }else{
            result.json({"msg":'添加失败',"code":1})
        }
    })
}





module.exports.uploadAudio = function(req,res){


  var sql = "select doctor_teach_kc.id,doctor_teach_kc.kc_name from doctor_teach_kc";

     async.parallel([
        function(cb){
              model.findSql(sql,function(data){
                  cb(null,data);
             })
          }
    ],function(err,result){
      res.render('home/page/back/addAudio.tpl',{ kclist:result[0] } );
    })

}


module.exports.subAudio = function(req,res){


    var kc_name = req.body.audio_name;
    var kc_sc = req.body.audioimg;
    var kc_id = req.body.kc_name;
    var kc_time = req.body.start_time;

    var data = {"kc_name":kc_name,"kc_sc":kc_sc,"ke_st":1,"kc_id":kc_id,"kc_time":kc_time}


   model.insertData("doctor_kc",data,function(result){
        if(result.affectedRows > 0){
            res.json({"msg":'添加成功',"code":0})
        }else{
            result.json({"msg":'添加失败',"code":1})
        }
    })
}