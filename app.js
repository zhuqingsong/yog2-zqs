/**
 * @file YOG2 框架启动入口
 * @author fis@baidu.com
 */

'use strict';

var yog = require('yog2-kernel');
var https = require('https');
var fs = require('fs');
var parseurl = require('parseurl')
var session = require('express-session')
// var SSLCertificateKeyFile  = fs.readFileSync('./ca/214454776830938.key');
// var SSLCertificateChainFile = fs.readFileSync('./ca/chain.pem');
// var SSLCertificateFile  = fs.readFileSync('./ca/public.pem');
// var credentials = {
//         key: SSLCertificateKeyFile,
//         ca: SSLCertificateChainFile,
//         cert:SSLCertificateFile
//       };
var app = yog.bootstrap({
    rootPath: __dirname
}, function () {
    console.log('plugins load completed');
});


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))



app.use(function (req, res, next) {
	var url = (req.url) + '';
	console.log(url);
	console.log(url.search("."));

	if (!req.session.user && url.indexOf("back") != -1 ) {
			if(url != '/back/login' && url !='/back/loginIn' &&  url.indexOf(".") == -1  && url.indexOf("back") != -1 ){
					res.redirect('/back/login');
			}else{
					next();
			}
	}else{
		 next();
	}

	
})


app.set('port', process.env.PORT || 8085);
app.disable('x-powered-by');

var server = yog.server = app.listen(app.get('port'), function () {
    console.log('Yog server listening on port ' + server.address().port);
});

// var httpsServer = https.createServer(server,function(req,res){

// }).listen(3000,' https://localhost');

server.on('connection', function (socket) {
    // disable nagle
    socket.setNoDelay(true);
});

// 仅在 Node.js 6.x开启这个功能 https://github.com/nodejs/node/issues/7126
if (parseInt(process.versions.node.split('.')[0], 10) >= 6) {
    server.on('clientError', function (err, socket) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
}
