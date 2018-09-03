var model = require('../model/getModel.js');
var util = require('../lib/util.js');
var async = require('async');
var reqURL = "https://gm.eyexing.com/";

module.exports = function(req, res){
    res.render('home/page/openCourse.tpl',{ } );
};


module.exports.courseDetail = function(req, res){

	var kcid = req.params.kcid;
	var lsid = req.params.lsid;
	var kid = req.params.kid;

	async.parallel([
          function(cb){
              model.findOne('doctor_teach_kc',{"id":kid},function(data){
                    cb(null,data);
              })
          },
          function(cb){
            model.findOne('doctor_teach',{"ls_id":lsid},function(data){
                    cb(null,data);
              })
          },
          function(cb){
            model.findOne('doctor_kc',{"kc_id":kcid},function(data){
                    cb(null,data);
              })
          }
    ],function(err,result){
         res.render('home/page/courseDetail.tpl',{ "teach_kc":result[0],"teach":result[1],"kclist":result[2] } );
    })

};


module.exports.buyCourse = function(req, res){
    res.render('home/page/buyCourse.tpl',{ } );
};


module.exports.activeCourse = function(req, res){
    res.render('home/page/startCourse.tpl',{ } );
};


module.exports.play = function(req, res){
    var kc_id = req.query.kc_id;
   model.findOne("doctor_teach_kc",{"id":kc_id},function(data){
        res.render('home/page/play.tpl', { "banner" : data[0].kc_show });
   })
};



module.exports.playlist = function(req, res){
    var playid = req.body.playid;
    model.findOne("doctor_kc",{"kc_id":playid},function(data){
        var musiclist = [];
            for(var i=0;i<data.length;i++){
                var qz = data[i].kc_sc;
                    qz = qz.split(".");
                var JMN = util.JMNum(8,qz[0]);
                var newobj = {
                    "title":data[i].kc_name,
                    "singer" : '',
                    "cover" : reqURL + 'kc/lhz.jpg',
                    "src" : reqURL + 'audio/' + JMN
                  }
                musiclist.push(newobj);
            }
            var musicstring = JSON.stringify(musiclist);
            res.json({ musiclist: musiclist });
    })
}
