var model = require('../../model/getModel.js');
var util = require('../../lib/util.js');
var async = require('async');
var fs = require('fs');
var multiparty = require('multiparty');
var config = require('../../lib/config.js');
var uploads = require('../../lib/fileupload.js');
    


module.exports = function(req, res){
    res.render('home/page/back/index.tpl',{  } );
};

module.exports.main = function(req, res){
	res.render('home/page/back/main.tpl',{  } );
};


module.exports.upload = function(req, res){
    uploads(req, res, function (err) {
    if (err) {
         res.json({'msg':'上传失败',code:1})
      return
    }else{
        res.json({"msg":"上传成功",code:0,"filename":req.file.filename })
    }
  })
};


module.exports.uploadImg = function(req, res){


    var filename = Number( new Date());

    var form = new multiparty.Form();
    /* 设置编辑 */
    form.encoding = 'utf-8';
    //设置文件存储路劲
    form.uploadDir = './home/client/static/imgs/teach_head';
    //设置文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;
    // form.maxFields = 1000;   //设置所有文件的大小总和
    //上传后处理
    form.parse(req, function(err, fields, files) {

        console.log(files);

        var inputFile = files.file[0];
        var uploadedPath = inputFile.path;
        var origin = inputFile.originalFilename;
            origin = origin.split('.');
            filename = filename + '.'+ origin[1];
        var dstPath = './home/client/static/imgs/kc_img/' + filename;
        console.log(dstPath);
        fs.rename(uploadedPath, dstPath, function(err) {
            if(err){
                res.json({'msg':'上传失败',code:1})
            } else {
                res.json({"msg":"上传成功",code:0,data:{"src":"/static/home/static/imgs/kc_img/" + filename,"title":filename }})
            }
        });
    })

    // res.render('home/page/back/main.tpl',{  } );
};



module.exports.up = function(req, res){

    uploads(req, res, function (err) {
    if (err) {
         res.json({'msg':'上传失败',code:1})
      return
    }else{
        res.json({"msg":"上传成功",code:0,data:{"src":"/static/home/static/imgs/kc_img/" + req.file.filename,"title":req.file.filename }})
    }
 
    // Everything went fine
  })  
}


module.exports.upAudio = function(req, res){

    uploads(req, res, function (err) {
    if (err) {
         res.json({'msg':'上传失败',code:1})
      return
    }else{
        res.json({"msg":"上传成功",code:0,data:{"src":"/static/home/static/imgs/kc_img/" + req.file.filename,"title":req.file.filename }})
    }
 
    // Everything went fine
  },'/dkfds')  
}