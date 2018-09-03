/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'home');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
var path = require('path');
fis.config.set('system.localNPMFolder', path.resolve(__dirname, '../node_modules'));

fis.config.set('livereload.port', 35729);

if (fis.IS_FIS3) {
    fis.media('debug').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });
    fis.media('debug-prod').match('*', {
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });


	fis.match("public/(**)", {
    useHash: true
    // }).match("public/home/static/imgs/logo/**", {
    //   useHash: false
	});


	  //所有的es6文件用babel2编译为js。
	  fis.match('*.es6', {
		rExt: '.js',
		parser: fis.plugin('babel2-strict'),
		isJsLike: true,
		notStrict: true
	  });

	    //所有的es6文件用babel2编译为js。
	  fis.match('/server/**.js', {
		parser: fis.plugin('babel2-strict'),
		notStrict: true
	  });

	    //widget组件中的js
	  fis.match('/client/static/libs/**.{js,es6}', {
		isMod: true,
		notStrict: true
	  });

	  //widget组件中的js
	  fis.match('/client/widget/**.{js,es6}', {
		isMod: true,
		notStrict: true
	  });


    fis.match('*.tmpl', {
       parser: fis.plugin('utc'),
       rExt: '.js'
    })


	 fis.match('/client/widget/**.{tpl,tmpl}', {
      preprocessor: [
        fis.plugin('extlang', "prepend"),
        fis.plugin('cssspace', "prepend")
      ],
      useSameNameRequire: true
    });
    fis.match('/client/page/**.tpl', {
      preprocessor: fis.plugin('cssspace' , "prepend")
    });
    fis.match('/client/widget/**.{scss,js,es6,css}', {
      preprocessor: [
        fis.plugin('cssspace', "prepend")
      ]
    });

}
else {
    fis.config.set('deploy', {
        debug: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:8085/yog/upload',
        }
    });
}
