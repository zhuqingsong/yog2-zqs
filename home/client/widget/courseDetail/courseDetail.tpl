<div class="@cd_detail_top">
      <div class="@cd_top">
            <img src="/static/home/static/imgs/kc_img/{{ teach_kc[0].kc_show }}" alt="" />
      </div>
      <div class="@cd_title">
          <p class="@s1">{{ teach_kc[0].kc_name }} | {{ teach_kc[0].kc_st }}</p>
          <p class="@s2">线上 18课时 不定时答疑课更新</p>
      </div>
      <div class="@cd_st">
          <p class="@p1"> 已开课 火热报名中 </p>
          <p class="@p1"> 已有 <em>{{ teach_kc[0].stu_num }}</em> 人学习</p>
          <span class="@pri">￥{{ teach_kc[0].price * 0.5 }}<i> ￥{{ teach_kc[0].price  }}</i></span>
      </div>
      <div class="@cd_full"></div>
      <div class="@cd_detail_box">
          <a href="javascript:void(0)" class="@active">课程详情</a>
          <a href="javascript:void(0)">课程表</a>
          <a href="javascript:void(0)">主讲老师</a>
      </div>
</div>
<div class="@cd_detail_content">
      <div class="@cd_kcinfo">
          {{ teach_kc[0].kc_detail }}
      </div>
</div>
<div class="@cd_teach_pay">
   <span class="@pay_s1">￥{{ teach_kc[0].price * 0.5 }}</span>
   <span class="@pay_s2">咨询</span>
   <span class="@pay_s3">立即购买</span>
</div>
<div class="@zx-mask">
    <div class="@zx-m"></div>
     <div class="@zx-box">
        <img src="/static/home/static/imgs/service_10.png" alt="">
        <span class="@s1 @mt60">有可能可添加客服详细咨询</span>
        <span class="@s1">微信号: {{ teach_kc[0].service }}</span>
    </div>
    <div class="@zx-close"> X </div>
</div>

<script type="text/x-template"  id="kcdetail">
    <div class="@cd_kcinfo">
        {{ teach_kc[0].kc_detail }}
    </div>
</script>

<script type="text/html"  id="teach">
    <div class="@cd_teach">
          <div class="@teach_header">
                <span class="@teach_h"><img src="/static/home/static/imgs/teach_head/{{ teach[0].teach_header }}" alt=""></span>
                <span class="@teach_name">{{ teach[0].teach_name }}</span>
          </div>
          <div class="@cd_teach_info">
              {{ teach[0].teach_desc }}
          </div>
    </div>
</script>


<script type="text/x-template"  id="kclist">
    <div class="@cd_course">
        {% for item in kclist %}
          <a href="/course/play?kc_id={{ teach_kc[0].id }}" >
          <dl>
              <dt>{{ loop.index }}</dt>
              <dd>
                  <p class="@time">{{ item.kc_name }}</p>
                  <p class="@desc">{{ item.kc_time }}</p>
              </dd>
          </dl>
          </a>
        {% endfor %}
    </div>
</div>
</script>

{% script %}
  	require('courseDetail.es6').init();
{% endscript %}
