const db = require('../lib/db.js');
module.exports.findAll = function(tablename,callback){

	let sql = `select * from ${tablename}`;
	db.query(sql).then(function(data){
		"use strict";
		callback(data);
	})
};


module.exports.insertData = function(tablename,data,callback){
	var keys = "" , values="";
	if(typeof data == 'object'){
			for(var key in data){
					keys +=key+',';
					values+='"'+data[key]+'",';
			}
	}else{
			callback(0);
			return false;
	}
	keys = keys.substr(0,keys.length-1);
	values = values.substr(0,values.length-1);
	var sql = "insert into "+tablename+ "("+keys+") values("+values+")";
	console.log(sql);
	db.query(sql).then(function(data){
		"use strict";
		callback(data);
	})
};


module.exports.findOne = function(tablename,data,callback){
	let param = "";
	if(typeof data == 'object'){
			for(var key in data){
					param +=`${key}='${data[key]}' and `;
			}
	}else{
			callback(0);
			return false;
	}
	param = param.substr(0,param.length - 4);
	let sql = `select * from ${tablename} where ${param}`;
	console.log(sql);
	db.query(sql).then(function(data){
		"use strict";
		callback(data);
	})
};


module.exports.Del = function(tablename,data,callback){
	let param = "";
	if(typeof data == 'object'){
			for(var key in data){
					param +=`${key}='${data[key]}' and `;
			}
	}else{
			callback(0);
			return false;
	}
	param = param.substr(0,param.length - 4);
	let sql = `delete from ${tablename} where ${param}`;
	console.log(sql);
	db.query(sql).then(function(data){
		"use strict";
		callback(data);
	})
};


module.exports.findSql = function(sql,callback){
	db.query(sql).then(function(data){
		"use strict";
		callback(data);
	})
};


