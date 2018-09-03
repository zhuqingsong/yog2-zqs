 <div class="@add-box"> <button class="layui-btn" id="addkc">添加课程</button> </div>
<table class="layui-table" lay-data="{ height: 'full-200', url:'/back/course/listJson', page:true, id:'id'}" lay-filter="demo">
  <thead>
    <tr>
      <th lay-data="{field:'id',sort: true,  width:50}">ID</th>
      <th lay-data="{field:'kc_name', width:200}">课程名称</th>
      <th lay-data="{field:'kc_st', width:100}">课程状态</th>
      <th lay-data="{field:'price', width:80}">课程价格</th>
      <th lay-data="{field:'teach_name', width:100}">上课老师</th>
      <th lay-data="{field:'kk_time', width:150}">开课时间</th>
       <th lay-data="{field:'kk_end', width:150}">结束时间</th>
      <th lay-data="{field:'service', width:150}">客服微信</th>
      <th lay-data="{field:'stu_num', width:100}">报名人数</th>
      <th lay-data="{field:'kc_key', width:100}">课程关键字</th>
      <th lay-data="{fixed: 'right', width:178, align:'center', toolbar: '#barActive'}">操作</th>
    </tr>
  </thead>
</table>
<script type="text/html" id="barActive">
  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
</script>


<script type="text/html" id="kcedit">
 <div class="@box-form">
   <form class="layui-form" method="post">
          <div class="layui-form-item">
            <label class="layui-form-label">课程名称</label>
            <div class="layui-input-block">
              <input type="text" name="kcname" lay-verify="required" autocomplete="off" placeholder="请输入名称" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">授课老师</label>
            <div class="layui-input-block">
                        <select name="teach_name" lay-filter="aihao">
                            {% for t in teachlist %}
                            <option value="{{ t.ls_id }}">{{ t.teach_name }}</option>
                            {% endfor %}
                        </select>
            </div>
          </div>

          <div class="layui-form-item">
              <label class="layui-form-label">课程状态</label>
              <div class="layui-input-block">
                <input type="tel" name="kc_st" lay-verify="required" autocomplete="off" placeholder="线上还是线下授课或其他" class="layui-input">
              </div>
          </div>
           <div class="layui-form-item">
                <label class="layui-form-label">Banner图片</label>
                <div class="layui-input-block">
                          <button type="button" class="layui-btn @up-img" id="uploadBanner">上传图片</button>
                          <div class="layui-upload-list @ds-inline">
                            <img class="layui-upload-img @up_img_show" id="bannerShow" >
                          </div>
                          <input type="hidden" value="" id="fileimg" name="filename">
                </div>
           </div>

            <div class="layui-form-item">
                <label class="layui-form-label">课程价格</label>
                <div class="layui-input-block">
                          <input type="text" name="kc_price" lay-verify="required" autocomplete="off" placeholder="请输入课程价格" class="layui-input">
                </div>
           </div>

           <div class="layui-form-item">
                <label class="layui-form-label">所属客服</label>
                <div class="layui-input-block">
                          <input type="text" name="service" lay-verify="required" autocomplete="off" placeholder="请输入客服微信号" class="layui-input">
                </div>
           </div>

             <div class="layui-form-item">
                <div class="layui-inline">
                  <label class="layui-form-label">开始时间</label>
                  <div class="layui-input-block">
                    <input type="text" name="start_time" id="date1" autocomplete="off" class="layui-input">
                  </div>
                </div>
                  <div class="layui-inline">
                  <label class="layui-form-label">结束时间</label>
                  <div class="layui-input-inline">
                    <input type="text" name="end_time" id="date2" autocomplete="off" class="layui-input">
                  </div>
               </div>   
            </div>

<!--            <div class="layui-form-item layui-form-text">
   <label class="layui-form-label">课程关键字</label>
   <div class="layui-input-block">
     <input type="text" name="kc_key" lay-verify="required" autocomplete="off" placeholder="以英文逗号分隔，例如:伤寒论,肖相如" class="layui-input">
   </div>
          </div> -->

          <div class="layui-form-item" pane="">
                <label class="layui-form-label">课程关键字</label>
                <div class="layui-input-block">
                  {% for c in keylist %}
                  <input type="checkbox" name="kc_key" lay-skin="primary" value="{{c.kc_key}}" title="{{c.kc_key}}">
                  {% endfor %}
                </div>
          </div>
  
          <div class="layui-form-item layui-form-text">
            <label class="layui-form-label">课程描述</label>
            <div class="layui-input-block">
              <textarea placeholder="以英文逗号分隔，例如:伤寒论,肖相如" class="layui-textarea layui-hide" name="content" lay-verify="content" id="course_editor"></textarea>
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
              <button class="layui-btn" lay-submit="" lay-filter="sub1">立即提交</button>
              <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
          </div>
  </form>
</div>
</script>
{% script %}
    require('courseList.es6').init();
{% endscript %}