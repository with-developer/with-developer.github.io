---
title:  "[Minimal mistakes] UI 번역 수정"
excerpt: "업데이트를 게시일로 변경했습니다."

categories:
  - Blog
tags:
  - [Blog, jekyll, Github, Minimal mistakes]

toc: true
toc_sticky: true
 
date: 2022-03-24
last_modified_at: 2022-03-24
---

## UI 번역 수정
게시글의 하단에 출력되는 `업데이트`를 `게시일`로 변경했습니다.

<div class="notice--primary" markdown="1">

#### `원본`
{: .text-right }
![ex_screenshot](/assets/images/2022-03-24-Blog-Update-data-label/post_update.png)

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
![ex_screenshot](/assets/images/2022-03-24-Blog-Update-data-label/post_date.png)



</div>