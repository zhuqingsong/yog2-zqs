var mid = '@';
const $ = require("home:static/libs/jquery.js");
const util = require("home:static/libs/util.js");
 require("home:static/libs/smusic.js");
module.exports.init = function () {
    	var kc_id = util.getQueryString("kc_id");
      	util.getAjax('post','/course/playlist',{"playid":kc_id}).then(function(d){
			var musicList  = d.musiclist;
			eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h(4 j=0;j<b.6;j++){4 7=b[j];d(7.8==\'\'||7.8==k){l}g{4 5=7.8;5=5.i(\'/\');4 3=5[5.6-1];4 c=3.6;4 9=3.e(3.6-2,3.6-1);d(9==0){9=1}4 a=3.e(3.6-1,3.6);a=c-a-1;4 f=3.m(9-1,a);5[5.6-1]=f+\'.n\';7.8=5.o(\'/\')}}',25,25,'|||URLStr|var|URL|length|mus|src|start|end|musicList|urlen|if|substring|musicname|else|for|split||undefined|continue|substr|mp3|join'.split('|'),0,{}))
			    new SMusic({
			        musicList : musicList,
			        autoPlay  : true,  //是否自动播放
			        defaultMode : 1,   //默认播放模式，随机
			        callback   : function (obj) {  //返回当前播放歌曲信息

			        }
			    });
      	})
}
