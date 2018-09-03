{% extends 'home:page/layout.tpl' %}
{% block content %}
      {% set href=1 %}
      {% widget "home:widget/all_book/all_book.tpl"%}
      {% widget "home:widget/footer/footer.tpl" width href %}
{% endblock %}
