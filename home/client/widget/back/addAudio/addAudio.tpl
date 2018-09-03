<form class="layui-form" method="post">
          <div class="layui-form-item">
            <label class="layui-form-label">音频名称</label>
            <div class="layui-input-block">
              <input type="text" name="audio_name" lay-verify="required" autocomplete="off" placeholder="请输入音频名称" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">课程名称</label>
            <div class="layui-input-block">
                        <select name="kc_name" lay-filter="aihao" >
                            {% for t in kclist %}
                            <option value="{{ t.id }}">{{ t.kc_name }}</option>
                            {% endfor %}
                        </select>
            </div>
          </div>

           <div class="layui-form-item">
                <label class="layui-form-label">上传音频</label>
                <div class="layui-input-block">
                          <button type="button" class="layui-btn @up-img" id="uploadAudio">上传音频</button>
                          <div class="layui-upload-list @ds-inline"> </div>
                          <input type="hidden" value="" id="audioimg" name="audioimg">
                </div>
           </div>
             <div class="layui-form-item">
                <div class="layui-inline">
                  <label class="layui-form-label">开课时间</label>
                  <div class="layui-input-block">
                    <input type="text" name="start_time" id="date1" lay-verify="required" autocomplete="off" class="layui-input">
                  </div>
                </div>
            </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit="" lay-filter="sub1">立即提交</button>
              <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
          </div>
  </form>


{% script %}
    require('addAudio.es6').init();
{% endscript %}