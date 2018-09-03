{% extends 'home:page/layout.tpl' %}
{% block content %}
     {% set href=1 %}
     {% widget "home:widget/play/play.tpl"%}
     {% widget "home:widget/footer/footer.tpl" with href %}
{% endblock %}
