var store = [{
        "title": "[Minimal mistakes] Meta 데이터 변경",
        "excerpt":"Page__meta 수정 Page__meta 데이터중 출력되는 read_time값을 date값으로 변경했습니다. 원본 변경내역 {Github repositories}/_includes/page__meta.html {% assign document = post | default: page %} {% if document.read_time or document.show_date %} &lt;p class=\"page__meta\"&gt; {% if document.show_date and document.date %} {% assign date = document.date %} &lt;span class=\"page__meta-date\"&gt; &lt;i class=\"far {% if include.type == 'grid'...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Minimal mistakes"],
        "url": "/blog/Blog-update-meta/",
        "teaser": null
      },{
        "title": "[Minimal mistakes] UI 번역 수정",
        "excerpt":"UI 번역 수정  게시글의 하단에 출력되는 업데이트를 게시일로 변경했습니다.       원본         변경내역     {Github repositories}/_data/ui-text.yml        ~ ko: &amp;DEFAULT_KO ~ #date_label                 : \"업데이트:\" #date_label값을 \"업데이트\"에서 \"게시일\"로 변경 date_label                 : \"게시일:\"      ~        수정후        ","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Minimal mistakes"],
        "url": "/blog/Blog-Update-data-label/",
        "teaser": null
      },{
        "title": "[Minimal mistakes] 날짜 포맷 수정",
        "excerpt":"날짜 포맷 수정 기존의 날짜 포맷인 March 24 2022가 마음에 안들어서 2022년 3월 24일 포맷으로 변경했습니다. 원본 변경내역 {Github repositories}/_includes/page__date.html &lt;!-- {% assign date_format = site.date_format | default: \"%b %d %y\" %} 아래 양식에 맞춰 원하는 방식대로 date_format을 설정 %b: month(en) %m: month(num) %d: day %Y: year --&gt; {% assign...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Minimal mistakes"],
        "url": "/blog/Blog-Update-date-format/",
        "teaser": null
      },{
        "title": "[Minimal mistakes] footer 위치 변경",
        "excerpt":"Footer를 Header로 변경 태그, 카테고리, 게시일 정보를 게시글 상단으로 이동했습니다. 원본 변경내역 {Github repositories}/_include/single.html ~ &lt;div class=\"page__inner-wrap\"&gt; {% unless page.header.overlay_color or page.header.overlay_image %} &lt;header&gt; {% if page.title %}&lt;h1 id=\"page-title\" class=\"page__title p-name\" itemprop=\"headline\"&gt; &lt;a href=\"{{ page.url | absolute_url }}\" class=\"u-url\" itemprop=\"url\"&gt;{{ page.title | markdownify | remove: \"&lt;p&gt;\" | remove: \"&lt;/p&gt;\" }}&lt;/a&gt;...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Minimal mistakes"],
        "url": "/blog/Blog-footer/",
        "teaser": null
      }]
