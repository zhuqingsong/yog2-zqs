<div class="layui-layout layui-layout-admin">
  <div class="layui-header">
    <div class="layui-logo"><img src="/static/home/static/imgs/icon/st_icon.png"> 管理平台</div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
<!--     <ul class="layui-nav layui-layout-left">
  <li class="layui-nav-item"><a href="">控制台</a></li>
  <li class="layui-nav-item"><a href="">商品管理</a></li>
  <li class="layui-nav-item"><a href="">用户</a></li>
  <li class="layui-nav-item">
    <a href="javascript:;">其它系统</a>
    <dl class="layui-nav-child">
      <dd><a href="">邮件管理</a></dd>
      <dd><a href="">消息管理</a></dd>
      <dd><a href="">授权管理</a></dd>
    </dl>
  </li>
</ul>
<ul class="layui-nav layui-layout-right">
  <li class="layui-nav-item">
    <a href="javascript:;">
      <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
      贤心
    </a>
    <dl class="layui-nav-child">
      <dd><a href="">基本资料</a></dd>
      <dd><a href="">安全设置</a></dd>
    </dl>
  </li>
  <li class="layui-nav-item"><a href="">退了</a></li>
</ul> -->
  </div>
  
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item">
          <a class="" href="javascript:;">老师管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;" data-url="/back/teach/list">老师列表</a></dd>
            <dd><a href="javascript:;" data-url="/back/course/list">课程信息</a></dd>
            <dd><a href="javascript:;" data-url="/back/course/addAudio">上传音频</a></dd>
            <dd><a href="" data-url="">超链接</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;">用户管理</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;"  data-url="">列表一</a></dd>
            <dd><a href="javascript:;"  data-url="">列表二</a></dd>
            <dd><a href=""  data-url="" >超链接</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="" data-url="">云市场</a></li>
        <li class="layui-nav-item"><a href="" data-url="">发布商品</a></li>
      </ul>
    </div>
  </div>
  
  <div class="layui-body">
    	<iframe src="/back/main" frameborder="0" id="iframebox"></iframe>      
  </div>
  
  <!-- <div class="layui-footer"> www.eyexing.com 中医线上书院 </div> -->
</div>


{%script%}
	
	 require('index.es6').init();
{%endscript%}


