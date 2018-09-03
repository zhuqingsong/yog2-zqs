<table class="layui-table" lay-data="{ height: 'full-200', url:'/back/user/listJson', page:true, id:'id'}" lay-filter="user">
  <thead>
    <tr>
      <th lay-data="{field:'id',sort: true,  width:100}">用户编号</th>
      <th lay-data="{field:'user_tel', width:200}">用户手机号</th>
      <th lay-data="{field:'open_id', width:200}">微信ID</th>
      <th lay-data="{field:'stu_kc', width:100}">所学课程</th>
      <th lay-data="{field:'zc_time', width:300}">注册时间</th>
      <th lay-data="{fixed: 'right', width:178, align:'center', toolbar: '#barDemo'}">操作</th>
    </tr>
  </thead>
</table>
<script type="text/html" id="barDemo">
  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除用户</a>
  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="addkc">编辑课程</a>
</script>


<script type="text/html" id="userkc">
 <div class="@box-form">
   <form class="layui-form" method="post" action="javascript:void(0)">
        <div class="layui-form-item" pane="">
            <label class="layui-form-label">所学课程</label>
            <div class="layui-input-block" id="kcbox">
             {% for d in data %}
                <input type="checkbox" name="kc_list" value="{{ d.id }}" lay-skin="primary" title="{{ d.kc_name }}"> 
              {% endfor %}
              <!-- <input type="checkbox" name="like1[write]" lay-skin="primary" title="写作" checked="">
              <input type="checkbox" name="like1[read]" lay-skin="primary" title="阅读"> -->
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit="" lay-filter="sub2">提交选择</button>
            </div>
        </div>
  </form>
</div>
</script>

{% script %}
    require('userList.es6').init();
{% endscript %}