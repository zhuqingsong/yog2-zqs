 <div class="@login-layout-box">
            <div class="login-img" ><img src="./img/login-img.png" /></div>
            <div class="form-containt">
                <form class="@layui-form @login-form">
                    <!-- <div class="login_face"><img src="../../images/face.jpg" class="userAvatar"></div> -->
                    <div class="@layui-form-item input-item">
                        <!-- <label for="userName">用户名</label> -->
                        <input type="text" placeholder="请输入用户名" lay-verify="required" autocomplete="off" id="userName" class="layui-input @username-input" >
                    </div>
                    <div class="@layui-form-item input-item">
                        <!-- <label for="password">密码</label> -->
                        <input type="password" placeholder="请输入密码" lay-verify="required" autocomplete="off" id="password" class="layui-input @password-input" >
                    </div>
                    <div class="@tishi-box"><p></p></div>
                    <div class="@layui-form-item">
                        <button class="layui-btn layui-block login-btn" lay-filter="login" lay-submit>登录</button>
                    </div>
                </form>
            </div>
 </div>

 {% script %}
    require('login.es6').init();
{% endscript %}