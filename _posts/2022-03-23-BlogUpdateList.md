---
title:  "[임시작성글] Jekyll Blog Update List"
excerpt: "Jekyll 블로그 업데이트 리스트 "

categories:
  - Blog
tags:
  - [Blog, jekyll, Github, Git]

toc: true
toc_sticky: true
 
date: 2022-03-23
last_modified_at: 2022-03-23
---

## Updating Blog....
Jekyll & Minimal Mistakes 테마 수정 작업 내역입니다.

### 1. 날짜 형식을 변경했습니다.

<div class="notice--primary" markdown="1">

#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-23-BlogUpdateList/month_day_year.png)

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
![ex_screenshot](/assets/images/2022-03-23-BlogUpdateList/year_month_day.png)

</div>

---

### 2. 게시글의 하단에 출력되는 `업데이트`를 `게시일`로 변경했습니다.

<div class="notice--primary" markdown="1">

#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-23-BlogUpdateList/post_update.png)

#### `변경내역`
{: .text-right }

```
{Github repositories}/_data/ui-text.yml
```

```yml

~
ko: &DEFAULT_KO
~
#date_label                 : "업데이트:"
#date_label값을 "업데이트"에서 "게시일"로 변경
date_label                 : "게시일:"     
~

```

#### `수정후`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-23-BlogUpdateList/post_date.png)



</div>

---

### 3. `Read Time`값을 `Date`값으로 변경했습니다.

<div class="notice--primary" markdown="1">

#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-23-BlogUpdateList/read_time.png)

#### `변경내역`
{: .text-right }

```
{Github repositories}/_data/ui-text.yml
```

```yml

~

~

```

#### `수정후`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-23-BlogUpdateList/post_date2.png)

</div>


---

### 4. 게시글의 하단에 출력되는 `게시일`을 상단에서도 볼 수 있게 수정했습니다.

---