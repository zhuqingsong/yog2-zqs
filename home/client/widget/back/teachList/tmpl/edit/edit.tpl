<form class="layui-form" action="">
  <div class="layui-form-item">
    <label class="layui-form-label">老师姓名</label>
    <div class="layui-input-block">
      <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入姓名" class="layui-input">
    </div>
  </div>

  <div class="layui-form-item">
    <label class="layui-form-label">老师职称</label>
    <div class="layui-input-block">
      <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入职称" class="layui-input">
    </div>
  </div>

  <div class="layui-form-item">
      <label class="layui-form-label">手机号</label>
      <div class="layui-input-block">
        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" placeholder="请输入手机号码" class="layui-input">
      </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">单选框</label>
    <div class="layui-input-block">
      <input type="radio" name="sex" value="1" title="男" checked="">
      <input type="radio" name="sex" value="0" title="女">
     <!--  <input type="radio" name="sex" value="禁" title="禁用" disabled=""> -->
    </div>
  </div>
  <div class="layui-form-item layui-form-text">
    <label class="layui-form-label">老师描述</label>
    <div class="layui-input-block">
      <textarea placeholder="请输入内容" class="layui-textarea layui-hide" name="content" lay-verify="content" id="LAY_demo_editor"></textarea>
    </div>
  </div>
  <!--<div class="layui-form-item layui-form-text">
    <label class="layui-form-label">编辑器</label>
    <div class="layui-input-block">
      <textarea class="layui-textarea layui-hide" name="content" lay-verify="content" id="LAY_demo_editor"></textarea>
    </div>
  </div>-->
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
    </div>
  </div>
</form>

{% script %}
    require('edit.es6').init();
{% endscript %}