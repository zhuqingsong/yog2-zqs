{% require name="home:static/css/audio.css" %}
<script src="/client/static/audio/audio.js"></script>
<div class="@listen_kc">
    <div class="@kc_tit">试听课程1 中医读经典</div>
    <audio src="./audio/jq22com.mp3" preload="auto" loop></audio>
</div>
<div class="@listen_Img">
      <img src="" alt="">
</div>
{% script %}
  	require('startCourse.es6').init();
{% endscript %}
