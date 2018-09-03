<!doctype html>
{% html lang="zh-cn" framework="home:static/js/mod.js"%}
	{% head %}
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<link rel="shortcut icon" href="/static/imgs/favicon.ico">
	    {% require name="home:static/css/basepc.css" %}
	    {% require name="home:static/layui/css/layui.css" %}
	    {% require name="home:static/layui/layui.all.js" %}
	    {% require name="layui-src" %}
			{% block head %}
			{% endblock %}
		{% endhead %}
		{% body %}
			{% block content %}
			{% endblock %}
		{% endbody %}
{% endhtml %}
