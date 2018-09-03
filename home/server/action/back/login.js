var model = require('../../model/getModel.js');
var util = require('../../lib/util.js');
var async = require('async');

module.exports = function(req, res){
	res.render('home/page/back/login.tpl',{  } );
};


module.exports.loginIn = function(req,res){
    var username = req.body.username;
    var password = req.body.pwd;
    if(username=='zhuqingsong' && password=='123456'){
        req.session.user = {"username":username};
        res.json({"msg":'登录成功',code:0})
    }else{
        res.json({"msg":'用户名或密码错误',code:1})
    }
	
}
