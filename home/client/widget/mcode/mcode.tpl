<div class="@m-list">
    <ul>
        {%  for item in datalist %}
      <li>

          <span class="@img-name"> {{ item.q_name }} </span>
          <img src="/static/home/static/imgs/{{ item.code_img }}" alt="" >
          {% if item.is_use %}
          <button type="button" name="button" class="@code-btn" itemId={{item.id}}>使用中</button>
          {% else %}
          <button type="button" name="button" class="@code-btn" itemId={{item.id}}>替换</button>
          {% endif %}
      </li>
        {% endfor %}
    <ul>
</div>
{% script %}
    require('mcode.es6').init();
{% endscript %}
