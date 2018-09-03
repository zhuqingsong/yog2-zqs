{% extends 'home:page/layout.tpl' %}
{% block content %}
     {% set href=0 %}
     {% widget "home:widget/uCenter/uCenter.tpl"%}
     {% widget "home:widget/footer/footer.tpl" with href %}
{% endblock %}
