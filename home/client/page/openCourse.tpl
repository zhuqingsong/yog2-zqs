{% extends 'home:page/layout.tpl' %}
{% block content %}
     {% set href=2 %}
     {% widget "home:widget/openCourse/openCourse.tpl"%}
     {% widget "home:widget/footer/footer.tpl" with href %}
{% endblock %}
