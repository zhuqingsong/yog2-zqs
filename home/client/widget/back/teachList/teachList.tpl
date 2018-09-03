 <div class="@add-box"> <button class="layui-btn" id="addteach">添加老师</button> </div>
<table class="layui-table" lay-data="{ height: 'full-200', url:'/back/teach/listJson/', page:true, id:'id'}" lay-filter="demo">
  <thead>
    <tr>
      <th lay-data="{field:'ls_id',sort: true,  width:100}">ID</th>
      <th lay-data="{field:'teach_name', width:200}">老师名称</th>
      <th lay-data="{field:'teach_title', width:200}">老师职称</th>
      <th lay-data="{field:'teach_header', width:100}">老师头像</th>
      <th lay-data="{field:'teach_desc', width:300}">老师描述</th>
      <th lay-data="{fixed: 'right', width:178, align:'center', toolbar: '#barDemo'}">操作</th>
    </tr>
  </thead>
</table>
<script type="text/html" id="barDemo">
  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
</script>


<script type="text/html" id="lsedit">
 <div class="@box-form">
   <form class="layui-form" method="post">
          <div class="layui-form-item">
            <div class="layui-inline">
            <label class="layui-form-label">老师姓名</label>
              <div class="layui-input-inline">
                <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入姓名" class="layui-input">
              </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">老师职称</label>
                  <div class="layui-input-inline">
                    <input type="text" name="teachzc" lay-verify="required" autocomplete="off" placeholder="请输入职称" class="layui-input">
                </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">手机号</label>
                <div class="layui-input-inline">
                  <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" placeholder="请输入手机号码" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">老师头像</label>
                 <div class="layui-input-inline">
                          <button type="button" class="layui-btn @up-img" id="uploadHeader">上传头像</button>
                          <div class="layui-upload-list @ds-inline">
                            <img class="layui-upload-img @up_img_show" id="imgShow" >
                          </div>
                          <input type="hidden" value="" id="fileimg" name="filename">
                </div>
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
              <button class="layui-btn" lay-submit="" lay-filter="sub">立即提交</button>
              <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
          </div>
  </form>
</div>
</script>
{% script %}
    require('teachList.es6').init();
{% endscript %}