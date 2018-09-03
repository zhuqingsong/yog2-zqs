var model = require('../model/getModel.js');
var util = require('../lib/util.js');
var async = require('async');

module.exports = function(req, res){
          async.series([
                  function(cb){
                      model.findAll('doctor_teach_kc',function(data){
                            cb(null,data);
                      })
                  },
                  function(cb){
                    model.findAll('doctor_kc_key',function(data){
                            cb(null,data);
                      })
                  }
            ],function(err,result){
                 console.log(result);
                 res.render('home/page/index.tpl',{ kclist:result[0],keylist:result[1],"c":1 } );
            })
  
          
};

module.exports.getIndex = function(req, res){

  async.series([
          function(cb){
              var sql = "select k.kc_id,k.kc_name,k.kc_show,k.kc_st,t.teach_name,t.teach_title from doctor_teach_kc k left join doctor_teach t on k.ls_id = t.kc_id";
              model.findSql(sql,function(data){
                  let r1 = [];
                  if(data){
                        console.log(data);
                        for(var i=0;i<data.length;i++){
                            r1.push(data[i]);
                            //console.log(data[i].createtime);
                        }
                  }
                    cb(null,r1)
              })
          },
          function(cb){

            cb(null,cb);

          }
    ],function(err,result){
         res.json({R:result});
    })

};


module.exports.getIndexJson = function(req, res){
    var key = req.body.key;
    var sql  =  "select * from doctor_teach_kc  where doctor_teach_kc.kc_key like '%"+key+"%'";
    console.log(sql);
     model.findSql(sql,function(data){

        res.json({"kclist":data});
     })
}



function runAsync(kc_id){
    var p = new Promise(function(resolve, reject){
        model.findOne('doctor_kc',{"kc_id":kc_id},function(value){
                resolve(value);
        })
    });
    return p;
}
