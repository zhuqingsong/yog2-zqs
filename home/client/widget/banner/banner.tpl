{% require name="home:static/css/swiper.min.css" %}
<div class="swiper-container @banner-swiper">
    <div class="swiper-wrapper">
        {%  for item in kclist %}
        	{% if loop.index < 4 %}
        <div class="swiper-slide ">
              <img  src="/static/home/static/imgs/kc_img/{{ item.kc_show }}" c="{{ loop.index }}" />
        </div>
        	{% endif %}
        {% endfor %}
    </div>
    <div class="swiper-pagination"></div>
</div>

{% script %}
    require('banner.es6').init();
{% endscript %}
