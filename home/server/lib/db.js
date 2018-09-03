var mysql = require("mysql");
var pool = mysql.createPool({   // 配置数据库信息
    host:"",
    user:"",
    password:"",
    database:""
});
function query(sql){
    var p = new Promise(function(resolve, reject){
        pool.getConnection(function(err,connection){
            connection.query(sql, function (err,rows) {
                if(err){
                    throw err;
                }
                resolve(rows);
                connection.release();
            });
        })
    });
    return p;
}
exports.query = query;
