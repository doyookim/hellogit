# 김도유 UI구현

> 2022-03-29

### 공통 CSS

```css
/* 공통 CSS */
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background: #f5f6f7;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

h3 {
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
}

input {
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

input:focus {
  outline: none;
}

/* span hover css */
span:hover {
  outline: 1px solid #03c75a;
}

/* select css */
select {
  width: 100%;
  height: 29px;
  font-size: 15px;
  background-size: 20px 8px;
  display: inline-block;
  text-align: start;
  border: none;
  cursor: default;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}
/* 공통 CSS */

/* span css */
.join_span {
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
}

/* input css */
.join_input {
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
}

/* 경고 문구 span */
.join_error_span {
  margin-top: 9px;
  font-size: 12px;
  color: red;
  display: none;
}
```

### 문제1

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - input
    - span
  - span

html

```html
<!--ID 입력-->
<div id="join_id">
  <h3>
    <label for="id">아이디</label>
  </h3>
  <span class="join_span id">
    <input type="text" id="user_id" class="join_input" maxlength="20" />
    <span class="naver_email_url">@naver.com</span>
  </span>
  <span class="join_error_span"></span>
</div>
```

js

```js
/* Id 체크 */
var user_id = document.querySelector("#user_id");
user_id.addEventListener("focusout", checkUserId);

function checkUserId() {
  var userId = /[a-zA-Z0-9_-]{5,20}/;
  if (user_id.value === "") {
    errorText[0].innerHTML = "필수 정보입니다.";
    errorText[0].style.display = "block";
  } else if (!userId.test(user_id.value)) {
    errorText[0].innerHTML =
      "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    errorText[0].style.display = "block";
  } else {
    errorText[0].innerHTML = "멋진 아이디네요!";
    errorText[0].style.color = "#08A600";
    errorText[0].style.display = "block";
  }
}
```

css

```css
.join_span .id {
  padding-right: 110px;
}
.naver_email_url {
  position: absolute;
  top: 16px;
  right: 13px;
  font-size: 15px;
  color: #8e8e8e;
}
```

![실행결과](캡쳐이미지/01_01.jpg)
![실행결과](캡쳐이미지/01_02.jpg)

### 문제2

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - input
    - span
  - span

html

```html
<!-- 비밀번호 입력 -->
<div>
  <h3>
    <label for="password">비밀번호</label>
  </h3>
  <span class="join_span pass">
    <input type="password" id="user_pass" class="join_input" maxlength="20" />
    <span id="join_not_txt">사용불가</span>
    <img src="img/icon_password.png" id="password_not_img" class="pass_img" />
  </span>
  <span class="join_error_span"></span>
</div>
```

js

```js
/* 패스워드 체크 */
var user_pass = document.querySelector("#user_pass");
var joinNotTxt = document.querySelector("#join_not_txt");

user_pass.addEventListener("focusout", checkPass);

function checkPass() {
  var userPass = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
  if (user_pass.value === "") {
    errorText[1].innerHTML = "필수 정보입니다.";
    errorText[1].style.display = "block";
  } else if (!userPass.test(user_pass.value)) {
    errorText[1].innerHTML =
      "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
    joinNotTxt.innerHTML = "사용불가";
    errorText[1].style.display = "block";

    joinNotTxt.style.display = "block";
    password_not_img.src = "../img/icon_join_not_text.png";
  } else {
    errorText[1].style.display = "none";
    joinNotTxt.innerHTML = "안전";
    joinNotTxt.style.display = "block";
    joinNotTxt.style.color = "#03c75a";
    password_not_img.src = "../img/icon_safe.png";
  }
}
```

css

```css
/* 비밀번호, 비밀번호 확인 */
.join_span .pass {
  padding-right: 40px;
}
.pass_img {
  width: 18px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 16px;
  margin-top: -10px;
  cursor: pointer;
}
```

![실행결과](캡쳐이미지/02_01.jpg)
![실행결과](캡쳐이미지/02_02.jpg)
![실행결과](캡쳐이미지/02_03.jpg)

### 문제3

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - input
    - img
  - span

html

```html
<!-- 비밀번호 재확인 -->
<div>
  <h3>
    <label for="password_check">비밀번호 재확인</label>
  </h3>
  <span class="join_span pass">
    <input
      type="password"
      id="password_check"
      class="join_input"
      maxlength="20"
    />
    <img
      src="img/icon_check_disable.png"
      id="pass_check_img"
      class="pass_img"
    />
  </span>
  <span class="join_error_span"></span>
</div>
```

js

```js
/* 비밀번호 재확인 */
var password_check = document.querySelector("#password_check");
var pass_check_img = document.querySelector("#pass_check_img");
password_check.addEventListener("focusout", comparePassWord);

function comparePassWord() {
  if (password_check.value === user_pass.value && password_check.value != "") {
    pass_check_img.src = "../img/icon_check_enable.png";
    errorText[2].style.display = "none";
  } else if (password_check.value !== user_pass.value) {
    pass_check_img.src = "../img/icon_check_disable.png";
    errorText[2].innerHTML = "비밀번호가 일치하지 않습니다.";
    errorText[2].style.display = "block";
  }

  if (password_check.value === "") {
    errorText[2].innerHTML = "필수 정보입니다.";
    errorText[2].style.display = "block";
  }
}
```

![실행결과](캡쳐이미지/03-01.jpg)
![실행결과](캡쳐이미지/03-02.jpg)
![실행결과](캡쳐이미지/03-03.jpg)

### 문제4

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - input
  - span

html

```html
<!-- 이름 -->
<div>
  <h3>
    <label for="name">이름</label>
  </h3>
  <span class="join_span">
    <input type="text" id="user_name" class="join_input" maxlength="20" />
  </span>
  <span class="join_error_span"></span>
</div>
```

js

```js
/* 이름 확인 */
var user_name = document.querySelector("#user_name");
user_name.addEventListener("focusout", checkName);

function checkName() {
  var userName = /[a-zA-Z가-힣]/;
  if (user_name.value === "") {
    errorText[3].innerHTML = "필수 정보입니다.";
    errorText[3].style.display = "block";
  } else if (
    !userName.test(user_name.value) ||
    user_name.value.indexOf(" ") > -1
  ) {
    errorText[3].innerHTML =
      "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
    errorText[3].style.display = "block";
  } else {
    errorText[3].style.display = "none";
  }
}
```

![실행결과](캡쳐이미지/04-01.jpg)
![실행결과](캡쳐이미지/04-02.jpg)
![실행결과](캡쳐이미지/04-03.jpg)

### 문제5

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - div
    - div
      - span
        - input
  - div
    - span
      - select
        - option
  - div
    - span
      - input
  - span

```html
<!-- 생년월일 -->
<div>
  <h3>
    <label for="birth">생년월일</label>
  </h3>

  <div id="birth_content">
    <!-- 년 -->
    <div id="birth_year">
      <span class="join_span">
        <input
          type="text"
          id="year"
          class="join_input"
          maxlength="4"
          placeholder="년(4자)"
        />
      </span>
    </div>

    <!-- 월 -->
    <div id="birth_month">
      <span class="join_span">
        <select id="month">
          <option>월</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </span>
    </div>

    <!-- 일 -->
    <div id="birth_day">
      <span class="join_span">
        <input
          type="text"
          id="day"
          class="join_input"
          maxlength="2"
          placeholder="일"
        />
      </span>
    </div>
  </div>
  <span class="join_error_span"></span>
</div>
```

```js
/* 생년월일 확인 */

var year = document.querySelector("#year");
var month = document.querySelector("#month");
var day = document.querySelector("#day");

year.addEventListener("focusout", brithCheck);
month.addEventListener("focusout", brithCheck);
day.addEventListener("focusout", brithCheck);

function brithCheck() {
  var yearCheck = /[0-9]{4}/;

  if (!yearCheck.test(year.value)) {
    errorText[4].innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
    errorText[4].style.display = "block";
  } else {
    monthCheck();
  }

  function monthCheck() {
    if (month.value === "월") {
      errorText[4].innerHTML = "태어난 월을 선택하세요.";
    } else {
      dayCheck();
    }
  }

  function dayCheck() {
    if (day.value === "") {
      errorText[4].innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
    } else {
      birthCheckRight();
    }
  }
}

function birthCheckRight() {
  var dayCheck = /\d{1,2}/;
  if (
    !dayCheck.test(day.value) ||
    Number(day.value) < 1 ||
    Number(day.value) > 31
  ) {
    errorText[4].innerHTML = "생년월일을 다시 확인해주세요.";
  } else {
    checkAge();
  }
}

function checkAge() {
  if (Number(year.value) < 1921) {
    errorText[4].innerHTML = "정말이세요?";
    errorText[4].style.display = "block";
  } else if (Number(year.value) > 2023) {
    errorText[4].innerHTML = "미래에서 오셨군요. ^^";
    errorText[4].style.display = "block";
  } else if (Number(year.value) > 2009) {
    errorText[4].innerHTML =
      "만 14세 미만의 어린이는 보호자 동의가 필요합니다.";
    errorText[4].style.display = "block";
  } else {
    errorText[4].style.display = "none";
  }
}
```

css

```css
#birth_content {
  display: table;
  width: 100%;
}

#birth_year {
  display: table-cell;
  width: 147px;
}

#birth_month {
  display: table-cell;
  width: 147px;
  vertical-align: middle;
  padding-left: 10px;
}

#birth_day {
  display: table-cell;
  width: 147px;
  padding-left: 10px;
}
```

![실행결과](캡쳐이미지/05-01.jpg)
![실행결과](캡쳐이미지/05-02.jpg)
![실행결과](캡쳐이미지/05-03.jpg)

### 문제6

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - select
      - option
  - span

```html
<!-- 성별 -->
<div>
  <h3>
    <label for="gender">성별</label>
  </h3>
  <span class="join_span">
    <select id="user_gender">
      <option>성별</option>
      <option value="M">남자</option>
      <option value="F">여자</option>
      <option value="U">선택 안함</option>
    </select>
  </span>
  <span class="join_error_span"></span>
</div>
```

```js
/* 성별 확인 */
var user_gender = document.querySelector("#user_gender");
user_gender.addEventListener("focusout", checkGender);

function checkGender() {
  if (user_gender.value === "성별") {
    errorText[5].innerHTML = "필수 정보입니다.";
    errorText[5].style.display = "block";
  } else {
    errorText[5].style.display = "none";
  }
}
```

![실행결과](캡쳐이미지/06-01.jpg)
![실행결과](캡쳐이미지/06-02.jpg)
![실행결과](캡쳐이미지/06-03.jpg)

### 문제7

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - input
  - span

```html
<!-- 이메일 -->
<div>
  <h3>
    <label for="email">본인확인 이메일<span id="email_sel">(선택)</span></label>
  </h3>
  <span class="join_span">
    <input
      type="text"
      id="user_email"
      class="join_input"
      maxlength="100"
      placeholder="선택입력"
    />
  </span>
  <span class="join_error_span"></span>
</div>
```

```js
/* 이메일 확인 */
var user_email = document.querySelector("#user_email");
user_email.addEventListener("focusout", emailCheck);

function emailCheck() {
  var email_check = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

  if (user_email.value === "") {
    errorText[6].style.display = "none";
  } else if (!email_check.test(user_email.value)) {
    errorText[6].innerHTML = "이메일 주소를 다시 확인해주세요.";
    errorText[6].style.display = "block";
  } else {
    errorText[6].style.display = "none";
  }
}
```

css

```css
#email_sel {
  font-size: 12px;
  font-weight: 400;
  color: #8e8e8e;
}
```

![실행결과](캡쳐이미지/07-01.jpg)
![실행결과](캡쳐이미지/07-02.jpg)
![실행결과](캡쳐이미지/07-03.jpg)

### 문제8

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - h3
    - label
  - span
    - select
      - option

```html
<!-- 휴대전화 -->
<div>
  <h3>
    <label for="mobile">휴대전화</label>
  </h3>
  <span class="join_span">
    <select id="mobile" class="sel">
      <option value="82" selected>대한민국 +82</option>
      <option value="81">일본 +81</option>
      <option value="86">중국 +86</option>
    </select>
  </span>
</div>
```

![실행결과](캡쳐이미지/08-01.jpg)
![실행결과](캡쳐이미지/08-02.jpg)

### 문제9

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - span
    - input
  - span
  - span

```html
<!-- 전화번호 입력 -->

<div class="mobile_div">
  <span class="join_span mobile">
    <input
      type="tel"
      id="phone_num"
      name="phone_num"
      placeholder="전화번호 입력"
      class="join_input"
      maxlength="16"
    />
  </span>
  <span class="join_phone_btn" id="phone_btn">인증번호 받기</span>
  <span class="join_error_span"></span>
</div>
```

```js
/* 핸드폰 번호 확인 */
var phone_num = document.querySelector("#phone_num");
phone_num.addEventListener("focusout", phoneCheck);

function phoneCheck() {
  var phoneNumCheck = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

  if (phone_num.value === "") {
    errorText[7].innerHTML = "필수 정보입니다.";
    errorText[7].style.display = "block";
  } else if (!phoneNumCheck.test(phone_num.value)) {
    errorText[7].innerHTML = "형식에 맞지 않는 번호입니다.";
    errorText[7].style.display = "block";
  } else {
    errorText[7].style.display = "none";
  }
}

/* 인증번호 확인 */
var phone_btn = document.querySelector("#phone_btn");
var phone_num = document.querySelector("#phone_num");

var phone_num_check = document.querySelector("#phone_num_check");
var check_num = document.querySelector("#check_num");

phone_btn.addEventListener("click", phoneNumCheck);

function phoneNumCheck() {
  if (phone_num.value === "") {
    errorText[8].innerHTML = "형식에 맞지 않는 번호입니다.";
    errorText[8].style.display = "block";
  } else {
    phone_num_check.style.background = "#fff";
    check_num.style.background = "#fff";
    check_num.removeAttribute("disabled");
    errorText[8].innerHTML = " 인증번호를 발송했습니다.(유효시간 30분)<br>\n";
    errorText[8].innerHTML +=
      "인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br>\n";
    errorText[8].innerHTML +=
      "이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.";
    errorText[8].style.color = "#08a600";
    errorText[8].style.display = "block";
  }
}
```

css

```css
.mobile_div {
  position: relative;
  margin-top: 10px;
  padding: 0 125px 0 0;
}
.join_phone_btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 115px;
  height: 51px;
  padding: 18px 0 16px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  font-size: 15px;
  cursor: pointer;
  color: #fff;
  border: solid 1px rgba(0, 0, 0, 0.08);
  background-color: #03c75a;
}
```

![실행결과](캡쳐이미지/09-01.jpg)
![실행결과](캡쳐이미지/09-02.jpg)
![실행결과](캡쳐이미지/09-03.jpg)

### 문제10

영역에 대한 DOM구조를 설명하고 해당 영역에 대해 직접 작성한 HTML, CSS, JS 소스코드와 실행 결과를 제시하시오.

#### DOM구조

- div
  - span
    - input
  - span

```html
<!-- 인증번호 입력 -->
<div style="margin-top: 10px;">
  <span class="join_span" id="phone_num_check">
    <input
      type="text"
      id="check_num"
      class="join_input"
      placeholder="인증번호 입력하세요"
      disabled
    />
  </span>
  <span class="join_error_span"></span>
</div>
```

```js
var check_num = document.querySelector("#check_num");

check_num.addEventListener("focusout", checkNumInput);

function checkNumInput() {
  var checkNum = /([0-9]{4})/;
  if (check_num.value === "") {
    errorText[8].innerHTML = "필수 정보입니다.";
    errorText[8].style.display = "block";
    errorText[8].style.color = "#FF0000";
  } else if (!checkNum.test(check_num.value)) {
    errorText[8].innerHTML = "형식에 맞지 않는 번호입니다.";
    errorText[8].style.display = "block";
    errorText[8].style.color = "#FF0000";
  } else {
    errorText[8].style.display = "none";
  }
}
```

![실행결과](캡쳐이미지/10-01.jpg)
![실행결과](캡쳐이미지/10-02.jpg)
![실행결과](캡쳐이미지/10-03.jpg)

## 참조

네이버 가입하기 홈페이지

> https://nid.naver.com/user2/V2Join?token_sjoin=aFVZbq2OfEuFwTL2&langSelect=ko_KR&chk_all=on&termsService=on&termsPrivacy=on&termsLocation=Y&termsEmail=Y

참조소스

> https://github.com/dev-seomoon/naver_join

## 원본 파일

```html
<!--
    @filename : naver_join_ui.html
    @author : 김도유(jeje_k@naver.com)
    @description : 네이버 회원가입 html 페이지
-->
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

    <title>네이버 : 회원가입</title>
    <link rel="stylesheet" href="css/naver_join_ui.css">
</head>

<body>
    <!-- header - logo -->
    <div id="header">
        <a href="http://www.naver.com"><img src="img/naver_logo.png" id="naver_logo" /> </a>
    </div>

    <!-- container -->
    <div id="container">
        <!-- content-->
        <div id="content">
            <form name="join_form" id="join_form">
                <!--ID 입력-->
                <div id="join_id">
                    <h3>
                        <label for="id">아이디</label>
                    </h3>
                    <span class="join_span id">
                        <input type="text" id="user_id" class="join_input" maxlength="20">
                        <span class="naver_email_url">@naver.com</span>
                    </span>
                    <span class="join_error_span"></span>
                </div>

                <!-- 비밀번호 입력 -->
                <div>
                    <h3>
                        <label for="password">비밀번호</label>
                    </h3>
                    <span class="join_span pass">
                        <input type="password" id="user_pass" class="join_input" maxlength="20">
                        <span id="join_not_txt">사용불가</span>
                    <img src="img/icon_password.png" id="password_not_img" class="pass_img">
                    </span>
                    <span class="join_error_span"></span>
                </div>

                <!-- 비밀번호 재확인 -->
                <div>
                    <h3>
                        <label for="password_check">비밀번호 재확인</label>
                    </h3>
                    <span class="join_span pass">
                        <input type="password" id="password_check" class="join_input" maxlength="20">
                        <img src="img/icon_check_disable.png" id="pass_check_img" class="pass_img">
                    </span>
                    <span class="join_error_span"></span>
                </div>

                <!-- 이름 -->
                <div>
                    <h3>
                        <label for="name">이름</label>
                    </h3>
                    <span class="join_span">
                        <input type="text" id="user_name" class="join_input" maxlength="20">
                    </span>
                    <span class="join_error_span"></span>
                </div>

                <!-- 생년월일 -->
                <div>
                    <h3>
                        <label for="birth">생년월일</label>
                    </h3>

                    <div id="birth_content">
                        <!-- 년 -->
                        <div id="birth_year">
                            <span class="join_span">
                                <input type="text" id="year" class="join_input" maxlength="4" placeholder="년(4자)">
                            </span>
                        </div>

                        <!-- 월 -->
                        <div id="birth_month">
                            <span class="join_span">
                                <select id="month">
                                    <option>월</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </span>
                        </div>

                        <!-- 일 -->
                        <div id="birth_day">
                            <span class="join_span">
                                <input type="text" id="day" class="join_input" maxlength="2" placeholder="일">
                            </span>
                        </div>

                    </div>
                    <span class="join_error_span"></span>
                </div>


                <!-- 성별 -->
                <div>
                    <h3>
                        <label for="gender">성별</label>
                    </h3>
                    <span class="join_span">
                        <select id="user_gender">
                            <option>성별</option>
                            <option value="M">남자</option>
                            <option value="F">여자</option>
                            <option value="U">선택 안함</option>
                        </select>
                    </span>
                    <span class="join_error_span"></span>
                </div>

                <!-- 이메일 -->
                <div>
                    <h3>
                        <label for="email">본인확인 이메일<span id="email_sel">(선택)</span></label>
                    </h3>
                    <span class="join_span">
                        <input type="text" id="user_email" class="join_input" maxlength="100" placeholder="선택입력">
                    </span>
                    <span class="join_error_span"></span>
                </div>

                <!-- 휴대전화 -->
                <div>
                    <h3>
                        <label for="mobile">휴대전화</label>
                    </h3>
                    <span class="join_span">
                        <select id="mobile" class="sel">
                            <option value="82" selected>
                                대한민국 +82
                            </option>
                            <option value="81">
                                일본 +81
                            </option>
                            <option value="86">
                                중국 +86
                            </option>
                        </select>
                    </span>
                </div>

                <!-- 전화번호 입력 -->

                <div class="mobile_div">

                    <span class="join_span mobile">
                        <input type="tel" id="phone_num" name="phone_num" placeholder="전화번호 입력" class="join_input"
                            maxlength="16">
                    </span>

                    <span class="join_phone_btn" id="phone_btn">인증번호 받기</span>

                    <span class="join_error_span"></span>
                </div>

                <!-- 인증번호 입력 -->
                <div style="margin-top: 10px;">

                    <span class="join_span" id="phone_num_check">
                        <input type="text" id="check_num" class="join_input" placeholder="인증번호 입력하세요" disabled>
                    </span>

                    <span class="join_error_span"></span>
                </div>

                <!-- 가입 버튼 -->
                <div class="join_btn_div">
                    <button type="button" id="join_btn">
                        <span>가입하기</span>
                    </button>
                </div>

                <!-- footer -->
                <div id="footer">
                    <ul>
                        <li><a href="http://policy.naver.com/rules/service.html">이용약관</a></li>
                        <li><strong><a href="http://policy.naver.com/policy/privacy.html">개인정보처리방침</a></strong></li>
                        <li><a href="http://policy.naver.com/rules/disclaimer.html">책임의 한계와 법적고지</a></li>
                        <li><a href="https://help.naver.com/support/alias/membership/p.membership/p.membership_26.naver" target="_blank">회원정보 고객센터 </a></li>
                    </ul>
                    <address>
                        <em><a href="https://www.navercorp.com/" target="_blank" class="logo"></a></em>
                        <em Copyright</em>
                            <em>&copy;</em>
                            <a href="https://www.navercorp.com/" target="_blank">NAVER Corp.</a>
                            <span>All Rights Reserved.</span>
                    </address>
                </div>
                <!-- //footer -->
            </form>

            <script src="js/naver_join.js"></script>



        </div>

        <body>
        </body>

</html>
```

```js
/**
 * @filename : naver_join.js
 * @author : 김도유(jeje_k@naver.com)
 * @description : 네이버 회원가입 정규식 확인 및 이벤트리스너 js
 */

/* 에러 메시지 출력 */
var errorText = document.querySelectorAll(".join_error_span");

/* Id 체크 */
var user_id = document.querySelector("#user_id");
user_id.addEventListener("focusout", checkUserId);

function checkUserId() {
  var userId = /[a-zA-Z0-9_-]{5,20}/;
  if (user_id.value === "") {
    errorText[0].innerHTML = "필수 정보입니다.";
    errorText[0].style.display = "block";
  } else if (!userId.test(user_id.value)) {
    errorText[0].innerHTML =
      "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    errorText[0].style.display = "block";
  } else {
    errorText[0].innerHTML = "멋진 아이디네요!";
    errorText[0].style.color = "#08A600";
    errorText[0].style.display = "block";
  }
}

/* 패스워드 체크 */
var user_pass = document.querySelector("#user_pass");
var joinNotTxt = document.querySelector("#join_not_txt");

user_pass.addEventListener("focusout", checkPass);

function checkPass() {
  var userPass = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
  if (user_pass.value === "") {
    errorText[1].innerHTML = "필수 정보입니다.";
    errorText[1].style.display = "block";
  } else if (!userPass.test(user_pass.value)) {
    errorText[1].innerHTML =
      "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
    joinNotTxt.innerHTML = "사용불가";
    errorText[1].style.display = "block";

    joinNotTxt.style.display = "block";
    password_not_img.src = "../img/icon_join_not_text.png";
  } else {
    errorText[1].style.display = "none";
    joinNotTxt.innerHTML = "안전";
    joinNotTxt.style.display = "block";
    joinNotTxt.style.color = "#03c75a";
    password_not_img.src = "../img/icon_safe.png";
  }
}

/* 비밀번호 재확인 */
var password_check = document.querySelector("#password_check");
var pass_check_img = document.querySelector("#pass_check_img");
password_check.addEventListener("focusout", comparePassWord);

function comparePassWord() {
  if (password_check.value === user_pass.value && password_check.value != "") {
    pass_check_img.src = "../img/icon_check_enable.png";
    errorText[2].style.display = "none";
  } else if (password_check.value !== user_pass.value) {
    pass_check_img.src = "../img/icon_check_disable.png";
    errorText[2].innerHTML = "비밀번호가 일치하지 않습니다.";
    errorText[2].style.display = "block";
  }

  if (password_check.value === "") {
    errorText[2].innerHTML = "필수 정보입니다.";
    errorText[2].style.display = "block";
  }
}

/* 이름 확인 */
var user_name = document.querySelector("#user_name");
user_name.addEventListener("focusout", checkName);

function checkName() {
  var userName = /[a-zA-Z가-힣]/;
  if (user_name.value === "") {
    errorText[3].innerHTML = "필수 정보입니다.";
    errorText[3].style.display = "block";
  } else if (
    !userName.test(user_name.value) ||
    user_name.value.indexOf(" ") > -1
  ) {
    errorText[3].innerHTML =
      "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
    errorText[3].style.display = "block";
  } else {
    errorText[3].style.display = "none";
  }
}

/* 생년월일 확인 */

var year = document.querySelector("#year");
var month = document.querySelector("#month");
var day = document.querySelector("#day");

year.addEventListener("focusout", brithCheck);
month.addEventListener("focusout", brithCheck);
day.addEventListener("focusout", brithCheck);

function brithCheck() {
  var yearCheck = /[0-9]{4}/;

  if (!yearCheck.test(year.value)) {
    errorText[4].innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
    errorText[4].style.display = "block";
  } else {
    monthCheck();
  }

  function monthCheck() {
    if (month.value === "월") {
      errorText[4].innerHTML = "태어난 월을 선택하세요.";
    } else {
      dayCheck();
    }
  }

  function dayCheck() {
    if (day.value === "") {
      errorText[4].innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
    } else {
      birthCheckRight();
    }
  }
}

function birthCheckRight() {
  var dayCheck = /\d{1,2}/;
  if (
    !dayCheck.test(day.value) ||
    Number(day.value) < 1 ||
    Number(day.value) > 31
  ) {
    errorText[4].innerHTML = "생년월일을 다시 확인해주세요.";
  } else {
    checkAge();
  }
}

function checkAge() {
  if (Number(year.value) < 1921) {
    errorText[4].innerHTML = "정말이세요?";
    errorText[4].style.display = "block";
  } else if (Number(year.value) > 2023) {
    errorText[4].innerHTML = "미래에서 오셨군요. ^^";
    errorText[4].style.display = "block";
  } else if (Number(year.value) > 2009) {
    errorText[4].innerHTML =
      "만 14세 미만의 어린이는 보호자 동의가 필요합니다.";
    errorText[4].style.display = "block";
  } else {
    errorText[4].style.display = "none";
  }
}

/* 성별 확인 */
var user_gender = document.querySelector("#user_gender");
user_gender.addEventListener("focusout", checkGender);

function checkGender() {
  if (user_gender.value === "성별") {
    errorText[5].innerHTML = "필수 정보입니다.";
    errorText[5].style.display = "block";
  } else {
    errorText[5].style.display = "none";
  }
}

/* 이메일 확인 */
var user_email = document.querySelector("#user_email");
user_email.addEventListener("focusout", emailCheck);

function emailCheck() {
  var email_check = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

  if (user_email.value === "") {
    errorText[6].style.display = "none";
  } else if (!email_check.test(user_email.value)) {
    errorText[6].innerHTML = "이메일 주소를 다시 확인해주세요.";
    errorText[6].style.display = "block";
  } else {
    errorText[6].style.display = "none";
  }
}

/* 핸드폰 번호 확인 */
var phone_num = document.querySelector("#phone_num");
phone_num.addEventListener("focusout", phoneCheck);

function phoneCheck() {
  var phoneNumCheck = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

  if (phone_num.value === "") {
    errorText[7].innerHTML = "필수 정보입니다.";
    errorText[7].style.display = "block";
  } else if (!phoneNumCheck.test(phone_num.value)) {
    errorText[7].innerHTML = "형식에 맞지 않는 번호입니다.";
    errorText[7].style.display = "block";
  } else {
    errorText[7].style.display = "none";
  }
}

/* 인증번호 확인 */
var phone_btn = document.querySelector("#phone_btn");
var phone_num = document.querySelector("#phone_num");

var phone_num_check = document.querySelector("#phone_num_check");
var check_num = document.querySelector("#check_num");

phone_btn.addEventListener("click", phoneNumCheck);

function phoneNumCheck() {
  if (phone_num.value === "") {
    errorText[8].innerHTML = "형식에 맞지 않는 번호입니다.";
    errorText[8].style.display = "block";
  } else {
    phone_num_check.style.background = "#fff";
    check_num.style.background = "#fff";
    check_num.removeAttribute("disabled");
    errorText[8].innerHTML = " 인증번호를 발송했습니다.(유효시간 30분)<br>\n";
    errorText[8].innerHTML +=
      "인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br>\n";
    errorText[8].innerHTML +=
      "이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.";
    errorText[8].style.color = "#08a600";
    errorText[8].style.display = "block";
  }
}

check_num.addEventListener("focusout", checkNumInput);

function checkNumInput() {
  var checkNum = /([0-9]{4})/;
  if (check_num.value === "") {
    errorText[8].innerHTML = "필수 정보입니다.";
    errorText[8].style.display = "block";
    errorText[8].style.color = "#FF0000";
  } else if (!checkNum.test(check_num.value)) {
    errorText[8].innerHTML = "형식에 맞지 않는 번호입니다.";
    errorText[8].style.display = "block";
    errorText[8].style.color = "#FF0000";
  } else {
    errorText[8].style.display = "none";
  }
}

/* 가입하기 버튼 */

var join_btn = document.querySelector("#join_btn");
join_btn.addEventListener("click", allCheck);

function allCheck() {
  checkUserId();
  checkPass();
  comparePassWord();
  checkName();
  brithCheck();
  checkGender();
  emailCheck();
  phoneCheck();
  phoneNumCheck();
}
```

```css
/*
 * @filename : naver_join_ui.css
 * @author : 김도유(jeje_k@naver.com)
 * @description : 네이버 회원가입 css
 */

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background: #f5f6f7;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

h3 {
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
}

input {
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

input:focus {
  outline: none;
}

span:hover {
  outline: 1px solid #03c75a;
}

select {
  width: 100%;
  height: 29px;
  font-size: 15px;
  background-size: 20px 8px;
  display: inline-block;
  text-align: start;
  border: none;
  cursor: default;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

#header {
  padding-top: 62px;
  padding-bottom: 20px;
  text-align: center;
}

#naver_logo {
  width: 240px;
  height: 44px;
  cursor: pointer;
}

#container {
  position: relative;
  height: 100%;
}

#content {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 460px;
}

.join_span {
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
}

.join_input {
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
}

.join_span .id {
  padding-right: 110px;
}

.join_span .pass {
  padding-right: 40px;
}

.join_span .mobile {
  display: inline-block;
  width: 100%;
  padding: 10px 15px 10px 14px;
  vertical-align: top;
}

#phone_num_check,
#check_num {
  background: #f7f7f7;
}

.naver_email_url {
  position: absolute;
  top: 16px;
  right: 13px;
  font-size: 15px;
  color: #8e8e8e;
}

.pass_img {
  width: 18px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 16px;
  margin-top: -10px;
  cursor: pointer;
}

#birth_content {
  display: table;
  width: 100%;
}

#birth_year {
  display: table-cell;
  width: 147px;
}

#birth_month {
  display: table-cell;
  width: 147px;
  vertical-align: middle;
  padding-left: 10px;
}

#birth_day {
  display: table-cell;
  width: 147px;
  padding-left: 10px;
}

#email_sel {
  font-size: 12px;
  font-weight: 400;
  color: #8e8e8e;
}

.mobile_div {
  position: relative;
  margin-top: 10px;
  padding: 0 125px 0 0;
}

.join_phone_btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 115px;
  height: 51px;
  padding: 18px 0 16px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  font-size: 15px;
  cursor: pointer;
  color: #fff;
  border: solid 1px rgba(0, 0, 0, 0.08);
  background-color: #03c75a;
}

.join_btn_div {
  margin: 30px 0 91px;
}

#join_btn {
  width: 100%;
  padding: 21px 0 17px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #08a600;
  font-size: 20px;
  font-weight: 400;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

#footer * {
  text-align: center;
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #333;
  text-decoration: none;
}

#footer ul {
  margin: 0 0 9px 0;
}

#footer ul li {
  font-size: 12px;
  position: relative;
  display: inline;
  padding: 0 3px 0 7px;
  white-space: nowrap;
  background: url(../img/bu_bar_2x.gif) left 50% no-repeat;
  background-size: 1px 10px;
}

#footer ul li:first-child {
  background: 0 0;
}

#footer ul li a:hover,
#footer ul li a:hover strong {
  color: #438a01;
}

#footer address .logo {
  position: relative;
  display: inline-block;
  width: 63px;
  height: 12px;
  background: url(../img/naver_logo.png);
  background-size: 63px 12px;
}

#footer address a {
  font: bold 9px Verdana;
  color: #333;
}

#footer address em {
  font: 9px verdana;
  padding-left: 4px;
}

#footer address span {
  font: 9px/14px Verdana;
  padding-left: 2px;
}

#footer span {
  outline: none;
}

.join_error_span {
  margin-top: 9px;
  font-size: 12px;
  color: red;
  display: none;
}

#footer {
  clear: both;
  margin: 0 auto;
  padding: 30px 0 15px 0;
  text-align: center;
}

#join_not_txt {
  position: absolute;
  top: 19px;
  right: 38px;
  font-size: 12px;
  color: red;
  display: none;
}
```
