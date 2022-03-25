---
title:  "[Minimal mistakes] 날짜 포맷 수정"
excerpt: "날짜 포맷을 수정했습니다."

categories:
  - Blog
tags:
  - [Blog, jekyll, Github, Minimal mistakes]

toc: true
toc_sticky: true
 
date: 2022-03-24
last_modified_at: 2022-03-24
---


## 날짜 포맷 수정
기존의 날짜 포맷인 `March 24 2022`가 마음에 안들어서 `2022년 3월 24일` 포맷으로 변경했습니다.


<div class="notice--primary" markdown="1">

#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-24-Blog-Update-date-format/month_day_year.png)

#### `변경내역`
{: .text-right }

```
{Github repositories}/_includes/page__date.html
```

```html
<!-- 
  {% raw %}
  {% assign date_format = site.date_format | default: "%b %d %y" %}
{% endraw %}
  아래 양식에 맞춰 원하는 방식대로 date_format을 설정
  %b: month(en)
  %m: month(num)
  %d: day
  %Y: year
-->
{% raw %}
{% assign date_format = site.date_format | default: "%Y년 %m월 %d일" %}
{% if page.last_modified_at %}
  <p class="page__date"><strong><i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i> {{ site.data.ui-text[site.locale].date_label | default: "Updated:" }}</strong> <time class="dt-published" datetime="{{ page.last_modified_at | date: "%Y-%m-%d" }}">{{ page.last_modified_at | date: date_format }}</time></p>
{% elsif page.date %}
  <p class="page__date"><strong><i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i> {{ site.data.ui-text[site.locale].date_label | default: "Updated:" }}</strong> <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: date_format }}</time></p>
{% endif %}
{% endraw %}

```

#### `수정후`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-24-Blog-Update-date-format/year_month_day.png)

</div>