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
<br>
# 블로그 업데이트 기록

### 1. 게시글의 하단에 출력되는 `업데이트`를 `게시일`로 변경했습니다.

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

### 2. 게시글의 하단에 출력되는 `게시일`을 상단에서도 볼 수 있게 수정했습니다.