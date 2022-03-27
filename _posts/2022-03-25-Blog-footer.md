---
title:  "[Minimal mistakes] footer 위치 변경"
excerpt: "게시글 하단에 출력되는 데이터를 상단으로 이동했습니다."

categories:
  - Blog
tags:
  - [Blog, jekyll, Github, Minimal mistakes]

toc: true
toc_sticky: true
 
date: 2022-03-24
last_modified_at: 2022-03-24
---
## Footer를 Header로 변경
태그, 카테고리, 게시일 정보를 게시글 상단으로 이동했습니다.

<div class="notice--primary" markdown="1">
#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-25-Blog-footer/footer.png)

#### `변경내역`
{: .text-right }

```
{Github repositories}/_include/single.html
```

```html

~
{% raw %}
<div class="page__inner-wrap">
      {% unless page.header.overlay_color or page.header.overlay_image %}
        <header>
          {% if page.title %}<h1 id="page-title" class="page__title p-name" itemprop="headline">
            <a href="{{ page.url | absolute_url }}" class="u-url" itemprop="url">{{ page.title | markdownify | remove: "<p>" | remove: "</p>" }}</a>
          </h1>{% endif %}
          <meta-data class="page__meta">
          <br>
          {% include page__taxonomy.html %}
          {% include page__date.html %} 
          </meta-data>
          <!-- header 태그에  날짜, 태그 정보를 추가했습니다.-->
          <br>
        </header>
      {% endunless %}

      <section class="page__content e-content" itemprop="text">
        {% if page.toc %}
          <aside class="sidebar__right {% if page.toc_sticky %}sticky{% endif %}">
            <nav class="toc">
              <header><h4 class="nav__title"><i class="fas fa-{{ page.toc_icon | default: 'file-alt' }}"></i> {{ page.toc_label | default: site.data.ui-text[site.locale].toc_label | default: "On this page" }}</h4></header>
              {% include toc.html sanitize=true html=content h_min=1 h_max=6 class="toc__menu" skip_no_ids=true %}
            </nav>
          </aside>
        {% endif %}
        {{ content }}
        {% if page.link %}<div><a href="{{ page.link }}" class="btn btn--primary">{{ site.data.ui-text[site.locale].ext_link_label | default: "Direct Link" }}</a></div>{% endif %}
      </section>

      <footer class="page__meta">
        {% if site.data.ui-text[site.locale].meta_label %}
          <h4 class="page__meta-title">{{ site.data.ui-text[site.locale].meta_label }}</h4>
        {% endif %}
        <!--
        {% include page__taxonomy.html %}
        {% include page__date.html %}
        footer 태그에 출력되던 기존의 날짜, 태그 정보를 삭제했습니다.
        -->
      </footer>

      {% if page.share %}{% include social-share.html %}{% endif %}
      {% endraw %}
~

```

#### `수정후`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-25-Blog-footer/header.png)



</div>