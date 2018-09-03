<!doctype html>
{% html lang="zh-cn" framework="home:static/js/mod.js"%}
	{% head %}
		<meta charset="utf-8"/>
		  <meta content="yes" name="apple-mobile-web-app-capable" />
		  <meta content="black" name="apple-mobile-web-app-status-bar-style" />
		  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		  <meta content="telephone=no" name="format-detection" />
    	{% require name="home:static/css/base.css" %}
    	{% require name="home:static/js/flexible.js" %}
		{% block head %}
		{% endblock %}
	{% endhead %}
	{% body %}
		{% block content %}
		{% endblock %}
	{% endbody %}
{% endhtml %}
