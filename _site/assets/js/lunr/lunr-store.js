var store = [{
        "title": "[임시작성글] Markdown Test 001",
        "excerpt":"해당 본문은 Markdown에 익숙해지기 위한 임시 작성글 입니다.      1. 아래는 코드블럭 예제입니다!         안에 코드도 넣을 수 있다. 아래처럼!         public class BootSpringBootApplication {     public static void main(String[] args) {       System.out.println(\"Hello, Honeymon\");     }   }            java 공부를 열심히 하자     Security 공부를 열심히 하자      ","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Git"],
        "url": "/blog/test/",
        "teaser": null
      },{
        "title": "[임시작성글] Jekyll Blog Update List",
        "excerpt":"Updating Blog…. Jekyll &amp; Minimal Mistakes 테마 수정 작업 내역입니다. 1. 날짜 형식을 변경했습니다. 원본 변경내역 {Github repositories}/_includes/page__date.html &lt;!-- {% assign date_format = site.date_format | default: \"%b %d %y\" %} 아래 양식에 맞춰 원하는 방식대로 date_format을 설정 %b: month(en) %m: month(num) %d: day %Y: year --&gt; {% assign date_format =...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Git"],
        "url": "/blog/Blog-UpdateList/",
        "teaser": null
      },{
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
      }]
