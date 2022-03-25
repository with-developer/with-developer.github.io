---
title:  "[Minimal mistakes] Meta 데이터 변경"
excerpt: "read time값을 date값으로 변경"

categories:
  - Blog
tags:
  - [Blog, jekyll, Github, Minimal mistakes]

toc: true
toc_sticky: true
 
date: 2022-03-24
last_modified_at: 2022-03-24
---

## Page__meta 수정

Page__meta 데이터중 출력되는 read_time값을 date값으로 변경했습니다.

<div class="notice--primary" markdown="1">

#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-24-Blog-Update-meta/read_time.png)

#### `변경내역`
{: .text-right }

```
{Github repositories}/_includes/page__meta.html
```

```html
{% raw %}
{% assign document = post | default: page %}
{% if document.read_time or document.show_date %}
  <p class="page__meta">
    {% if document.show_date and document.date %}
      {% assign date = document.date %}
      <span class="page__meta-date">
        <i class="far {% if include.type == 'grid' and document.read_time and document.show_date %}fa-fw {% endif %}fa-calendar-alt" aria-hidden="true"></i>
        {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
        <time datetime="{{ date | date_to_xmlschema }}">{{ date | date: date_format }}</time>
      </span>
    {% endif %}

    {% if document.read_time and document.show_date %}<span class="page__meta-sep"></span>{% endif %}

    {% if document.read_time %}
      {% assign words_per_minute = document.words_per_minute | default: site.words_per_minute | default: 200 %}
      {% assign words = document.content | strip_html | number_of_words %}
    <!--
      <span class="page__meta-readtime">
       <i class="far {% if include.type == 'grid' and document.read_time and document.show_date %}fa-fw {% endif %}fa-clock" aria-hidden="true"></i>
       {% if words < words_per_minute %}
       {{ site.data.ui-text[site.locale].less_than | default: "less than" }} 1 {{ site.data.ui-text[site.locale].minute_read | default: "minute read" }}
       {% elsif words == words_per_minute %}
       1 {{ site.data.ui-text[site.locale].minute_read | default: "minute read" }}
       {% else %}
       {{ words | divided_by: words_per_minute }} {{ site.data.ui-text[site.locale].minute_read | default: "minute read" }}
       {% endif %}
      </span>

      read_time부분을 모두 지우고, date값이 들어있는 span을 생성합니다.
     -->
      <span class="page__meta-date">
        {% assign post_format = "%Y년 %m월 %d일" | default:"%Y %m %d" %}
        <class="page__meta"><i class="far fa-fw fa-calendar-alt" aria-hidden="true"></i> {{ post.date | date:post_format }}</class>
      </span>
    {% endif %}
  </p>
{% endif %}
{% endraw %}
```

#### `수정후`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-24-Blog-Update-meta/post_date2.png)

</div>