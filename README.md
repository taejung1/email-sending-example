# email-sending-example
node.js 에서 이메일의 smtp 서버 를 활용해서 이메일을 보낼수있는 예시.  
nodemailer 모듈을 사용했습니다.  

사용법
======

## config.json , index.js 를 수정하시면 됩니다.  

```json 
{
    "id" : "계정id",
    "pw" : "계정비밀번호",
    "host" : "SMTP 서버 주소"
}
```  

우선 smtp 서버의 세팅을 해야됩니다 ( 저는 네이버로 하겟습니다 )

1. 로그인을 합니다
2. 메일함에 들어가서 환경설정을 들어갑니다  
![image](https://user-images.githubusercontent.com/85492054/162731162-60979858-9ac0-4452-8b06-fbedfe3654d2.png)
3. 환경설정을 들어간뒤 "POP3/IMAP 설정" 에 들어가줍니다  
![image](https://user-images.githubusercontent.com/85492054/162730330-4458e877-c057-48cf-822f-cf483d791795.png)
4. 아래 사진처럼 세팅해줍니다.
![image](https://user-images.githubusercontent.com/85492054/162730724-908c3fda-5754-490d-a39c-2b5035396b44.png)
5. 자기계정에 뜬 정보를 config.json 에 수정해줍니다.  

```json 
{
    "id" : "계정id",
    "pw" : "계정비밀번호",
    "host" : "SMTP 서버명"
}
```  

6. config.json 을 수정하신뒤에 index.js 을 열어줍니다
7. 아래 코드를 수정해줍니다. ( " " 사이를 지우고 넣으면됩니다 )
```js 
const from = "누구에서 메일이 오는지 , 예:(김태정 < taejung@taejung.xyz >"
const to = "이메일을 보낼계정 아아디 , 예 : taejung@taejung.xyz"
const subject = "메일제목"
const text = "메일 내용"
```
8. 위코드를 수정하신뒤 콘솔에 cmd를 열어 npm i 를 입력하고 node . 을 입력해주시면 메일전송이 완료됩니다

##### 오류있으면 깃허브 피드백에 적어주세요 .
