<div class="@wrap">
  <div class="@wrap-header">
      {% widget "home:widget/banner/banner.tpl" %}
      <div class="swiper-container @study-tit">
              <div class="swiper-wrapper"  >
            {%  for item in keylist %}
                  <div class="swiper-slide @scorll-view @bg1 @key">{{ item.kc_key }} </div>
            {% endfor %} 
              </div>
            
        </div>
  </div>
  
  <div class="@wrap-content">
        
        <div class="@study-content">
        {%  for item in kclist %}
            <a href="/course/detail/{{ item.id }}/{{ item.ls_id }}/{{ item.kc_id }}">
              <dl>
                  <dt>{{ item.kc_name }} | {{ item.kc_st }}</dt>
                  <dd class="@lgbox">
                      <span class="@lef">
                          <img src="/static/home/static/imgs/kc_img/{{ item.kc_show }}">
                      </span>
                      <span class="@rig">
                          线上18课时 不定时答疑课更新已有<em>{{ item.stu_num }}</em> 人学习
                          <h6 class="@pri">￥{{ item.price * 0.5 }}  <i> ￥{{ item.price  }}</i></h6>
                      </span>
                  </dd>
              </dl>
            </a>
        {% endfor %}      
        </div>
  </div>
</div>




{% script %}
require('index.es6').init();
{% endscript %}
