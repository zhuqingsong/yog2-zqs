{% require "home:static/css/smusic.css" %}
<div class="grid-music-container f-usn">
	<img src="/static/home/static/imgs/kc_img/{{ banner }}" class="grid-banner">
    <div class="m-music-play-wrap">
        <div class="u-cover"></div>
        <div class="m-now-info">
            <div class="u-music-title"><strong>标题</strong></div>
            <div class="m-now-controls">
                <div class="u-control u-process">
                    <span class="buffer-process"></span>
                    <span class="current-process"></span>
                </div>
                <div class="u-control u-time">00:00/00:00</div>
                <div class="u-control u-volume">
                    <div class="volume-process" data-volume="0.50">
                        <span class="volume-current"></span>
                        <span class="volume-bar"></span>
                        <span class="volume-event"></span>
                    </div>
                    <a class="volume-control"></a>
                </div>
            </div>
            <div class="m-play-controls">
                <a class="u-play-btn prev" title="上一曲"></a>
                <a class="u-play-btn ctrl-play play" title="暂停"></a>
                <a class="u-play-btn next" title="下一曲"></a>
<!--                 <a class="u-play-btn mode mode-list current" title="列表循环"></a>
                <a class="u-play-btn mode mode-random" title="随机播放"></a>
                <a class="u-play-btn mode mode-single" title="单曲循环"></a> -->
            </div>
        </div>
    </div>
    <div class="f-cb">&nbsp;</div>
    <div class="m-music-list-title"> 课程目录 </div>
    <div class="m-music-list-wrap"></div>
    <div class="m-music-lyric-wrap">
        <div class="inner">
            <ul class="js-music-lyric-content">
                <li class="eof">暂无歌词...</li>
            </ul>
        </div>
    </div>

   <div class="grid-music-desc">
        <p class="p1">添加李杭洲老师助理微信:  13520414551 </p>
        <p class="p1">和李杭洲老师在线沟通 </p>
   </div>
</div>

{% script %}
    require('play.es6').init();
{% endscript %}