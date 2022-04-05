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
    } else if (!userName.test(user_name.value) ||
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
    if (!dayCheck.test(day.value) ||
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