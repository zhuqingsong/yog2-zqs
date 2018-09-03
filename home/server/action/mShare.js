var model = require('../model/getModel.js');
var util = require('../lib/util.js');
var async = require('async');

module.exports = function(req, res){
     var sql = "select * from code_img where is_use=1 and q_type=1";
      model.findSql(sql,function(data){
            if(data.length>0){
                  console.log(data);
                  res.render('home/page/mShare.tpl', {"img":data[0].code_img,"code":1})
              }else{
                  res.render('home/page/mShare.tpl', {"img":'',"code":0})
              }
      })
};

module.exports.getSt = function(req, res){
  var sql = "select * from code_img where q_type=1";
   model.findSql(sql,function(data){
        if(data.length>0){
            res.render('home/page/updatecode.tpl', {"datalist":data})
        }else{
            res.render('home/page/updatecode.tpl', {"img":''})
        }
   })
}

module.exports.updateCode = function(req, res){
     var itemId = req.body.itemId;
     console.log(itemId);
      var sqlall = "update code_img set is_use=0 where q_type=1 ";
      var sql = "update code_img set is_use=1 where id = "+ itemId +" and q_type=1 ";
      model.findSql(sqlall,function(data1){
          if(data1.affectedRows > 0){
            model.findSql(sql,function(data2){
                if(data2.affectedRows > 0){
                    res.json({"msg":"替换成功了",code:'1'});
                }
            })
          }else{
              res.json({"msg":"替换二维码出问题了,联系管理员",code:'0'});
          }
                //res.render('addteam', {"img":data[0].code_img,"q_name":data[0].q_name })
      })
}
