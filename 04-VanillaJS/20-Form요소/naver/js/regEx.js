//region define, setter
var idFlag = false;
var pwFlag = false;
var authFlag = false;
var submitFlag = false;

var properties = {
    keyboard: [
        { id: "id" },
        { id: "pswd1", secureMode: true },
        { id: "pswd2", secureMode: true },
    ],
    modeProperties: {
        mode: 4,
    },
};
var desk = new sofa.Koop(properties);

$(document).ready(function() {
    defaultScript();

    if ($("#yy").val() != "") {
        checkBirthday();
    }

    //region unreal id
    $("#id").blur(function() {
        idFlag = false;
        checkId("first");
    });

    $("#pswd1")
        .blur(function() {
            pwFlag = false;
            checkPswd1();
        })
        .keyup(function(event) {
            checkShiftUp(event);
        })
        .keypress(function(event) {
            checkCapslock(event);
        })
        .keydown(function(event) {
            checkShiftDown(event);
        });

    $("#pswd2")
        .blur(function() {
            checkPswd2();
        })
        .keyup(function(event) {
            checkShiftUp(event);
        })
        .keypress(function(event) {
            checkCapslock2(event);
        })
        .keydown(function(event) {
            checkShiftDown(event);
        });

    $("#name").blur(function() {
        checkName();
    });

    $("#name1").blur(function() {
        checkName();
    });

    $("#name2").blur(function() {
        checkName();
    });

    $("#yy").blur(function() {
        checkBirthday();
    });

    $("#mm").change(function() {
        checkBirthday();
    });

    $("#dd").blur(function() {
        checkBirthday();
    });

    $("#gender").change(function() {
        checkGender();
    });

    $("#email").blur(function() {
        checkEmail();
    });

    $("#phoneNo").blur(function() {
        checkPhoneNo();
    });

    $("#btnSend").click(function() {
        sendSmsButton();
        return false;
    });

    $("#authNo").blur(function() {
        authFlag = false;
        checkAuthNo();
    });

    $("#tabPrtsMobile").click(function() {
        showJuniverMobileTab();
        return false;
    });

    $("#tabPrtsIpin").click(function() {
        showJuniverIpinTab();
        return false;
    });
    //endregion

    //region prts mobile
    $("#pagree_all").click(function() {
        setPrtsTerms();
    });
    $("#pagree_01").click(function() {
        viewPrtsTerms();
    });
    $("#pagree_02").click(function() {
        viewPrtsTerms();
    });
    $("#pagree_03").click(function() {
        viewPrtsTerms();
    });
    $("#pagree_04").click(function() {
        viewPrtsTerms();
    });
    $("#pagree_05").click(function() {
        viewPrtsTerms();
    });

    $("#pname").blur(function() {
        checkPrtsName();
    });

    $("#pyy").blur(function() {
        checkPrtsBirthday();
    });

    $("#pmm").change(function() {
        checkPrtsBirthday();
    });

    $("#pdd").blur(function() {
        checkPrtsBirthday();
    });

    $("#pgender").change(function() {
        checkPrtsGender();
    });

    $("#pphoneNo").blur(function() {
        checkPrtsPhoneNo();
    });

    $("#btnPrtsSend").click(function() {
        sendPrtsSmsButton();
        return false;
    });

    $("#pauthNo").blur(function() {
        authFlag = false;
        checkPrtsAuthNo();
    });
    //endregion

    //region ipin popup
    $("#iagree_all").click(function() {
        checkIpinAgree();
    });

    $("#btnIpinPopup").click(function() {
        openIpinPopup();
    });

    $("#iphoneNo").blur(function() {
        checkIpinPhoneNo();
    });

    $("#btnIpinSend").click(function() {
        sendIpinSmsButton();
        return false;
    });

    $("#iauthNo").blur(function() {
        authFlag = false;
        checkIpinAuthNo();
    });
    //endregion

    $("#btnJoin").click(function(event) {
        clickcr(this, "sup.signup", "", "", event);
        submitClose();
        if (idFlag && pwFlag && authFlag) {
            mainSubmit();
        } else {
            setTimeout(function() {
                mainSubmit();
            }, 700);
        }
    });
});
//endregion

//region mainSubmit
function mainSubmit() {
    var joinMode = $("#joinMode").val();

    if (joinMode == "juniverMobile") {
        if (!checkPrtsMobileInput()) {
            submitOpen();
            return false;
        }
    } else if (joinMode == "juniverIpin") {
        if (!checkPrtsIpinInput()) {
            submitOpen();
            return false;
        }
    } else {
        if (!checkUnrealInput()) {
            submitOpen();
            return false;
        }
    }

    if (idFlag && pwFlag && authFlag) {
        try {
            desk.f(function(a) {
                $("#nid_kb2").val(a);
                $("#join_form").submit();
            });
        } catch (e) {
            $("#nid_kb2").val("join v2 error: " + e.name + ", " + e.message);
            $("#join_form").submit();
        }
    } else {
        submitOpen();
        return false;
    }
}

function checkUnrealInput() {
    if (
        checkId("join") &
        checkPswd1() &
        checkPswd2() &
        checkName() &
        checkBirthday() &
        checkGender() &
        checkEmail() &
        checkPhoneNo() &
        checkAuthNo()
    ) {
        return true;
    } else {
        return false;
    }
}

function checkPrtsMobileInput() {
    if (
        checkId("join") &
        checkPswd1() &
        checkPswd2() &
        checkName() &
        checkBirthday() &
        checkGender() &
        checkEmail() &
        checkPrtsAgree() &
        checkPrtsName() &
        checkPrtsBirthday() &
        checkPrtsGender() &
        checkPrtsPhoneNo() &
        checkPrtsAuthNo()
    ) {
        return true;
    } else {
        return false;
    }
}

function checkPrtsIpinInput() {
    if (
        checkId("join") &
        checkPswd1() &
        checkPswd2() &
        checkName() &
        checkBirthday() &
        checkGender() &
        checkEmail() &
        checkIpinAgree() &
        checkIpinPopup() &
        checkIpinPhoneNo() &
        checkIpinAuthNo()
    ) {
        return true;
    } else {
        return false;
    }
}
//endregion

//region unreal 가입
function checkId(event) {
    if (idFlag) return true;

    var id = $("#id").val();
    var oMsg = $("#idMsg");
    var oInput = $("#id");

    if (id == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        setFocusToInputObject(oInput);
        return false;
    }

    var isID = /^[a-z0-9][a-z0-9_\-]{4,19}$/;
    if (!isID.test(id)) {
        showErrorMsg(
            oMsg,
            "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
        );
        setFocusToInputObject(oInput);
        return false;
    }

    idFlag = false;
    var key = $("#token_sjoin").val();

    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=checkId&id=" + id + "&key=" + key,
        success: function(data) {
            var result = data.substr(4);

            if (result == "Y") {
                if (event == "first") {
                    showSuccessMsg(oMsg, "멋진 아이디네요!");
                } else {
                    hideMsg(oMsg);
                }
                idFlag = true;
            } else {
                showErrorMsg(oMsg, "이미 사용중이거나 탈퇴한 아이디입니다.");
                setFocusToInputObject(oInput);
            }
        },
    });
    return true;
}

function checkPswd1() {
    if (pwFlag) return true;

    var id = $("#id").val();
    var pw = $("#pswd1").val();
    var oImg = $("#pswd1Img");
    var oSpan = $("#pswd1Span");
    var oMsg = $("#pswd1Msg");
    var oInput = $("#pswd1");

    if (pw == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        setFocusToInputObject(oInput);
        return false;
    }
    if (isValidPasswd(pw) != true) {
        showPasswd1ImgByStep(oImg, oSpan, 1);
        showErrorMsg(oMsg, "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.");
        setFocusToInputObject(oInput);
        return false;
    }

    pwFlag = false;
    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=checkPswd&id=" +
            escape(encodeURIComponent(id)) +
            "&pw=" +
            escape(encodeURIComponent(pw)),
        success: function(data) {
            var result = data.substr(4);
            if (result == 1) {
                showPasswd1ImgByStep(oImg, oSpan, 1);
                showErrorMsg(
                    oMsg,
                    "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
                );
                setFocusToInputObject(oInput);
                return false;
            } else if (result == 2) {
                showPasswd1ImgByStep(oImg, oSpan, 2);
                showErrorMsg(
                    oMsg,
                    "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
                );
                setFocusToInputObject(oInput);
            } else if (result == 3) {
                showPasswd1ImgByStep(oImg, oSpan, 3);
                oMsg.hide();
            } else if (result == 4) {
                showPasswd1ImgByStep(oImg, oSpan, 4);
                oMsg.hide();
            } else {
                showPasswd1ImgByStep(oImg, oSpan, 0);
                oMsg.hide();
            }
            pwFlag = true;
            createRsaKey();
        },
    });
    return true;
}

function checkPswd2() {
    var pswd1 = $("#pswd1");
    var pswd2 = $("#pswd2");
    var oMsg = $("#pswd2Msg");
    var oImg = $("#pswd2Img");
    var oBlind = $("#pswd2Blind");
    var oInput = $("#pswd2");

    if (pswd2.val() == "") {
        showPasswd2ImgByDiff(oImg, false);
        showErrorMsg(oMsg, "필수 정보입니다.");
        oBlind.html(
            "설정하려는 비밀번호가 맞는지 확인하기 위해 다시 입력 해주세요."
        );
        setFocusToInputObject(oInput);
        return false;
    }
    if (pswd1.val() != pswd2.val()) {
        showPasswd2ImgByDiff(oImg, false);
        showErrorMsg(oMsg, "비밀번호가 일치하지 않습니다.");
        oBlind.html(
            "설정하려는 비밀번호가 맞는지 확인하기 위해 다시 입력 해주세요."
        );
        setFocusToInputObject(oInput);
        return false;
    } else {
        showPasswd2ImgByDiff(oImg, true);
        oBlind.html("일치합니다");
        hideMsg(oMsg);
        return true;
    }

    return true;
}

function checkName() {
    var oMsg = $("#nameMsg");
    var nonchar = /[^가-힣a-zA-Z0-9]/gi;

    var name = $("#name").val();
    var oInput = $("#name");
    if (name == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        setFocusToInputObject(oInput);
        return false;
    }
    if (name != "" && nonchar.test(name)) {
        showErrorMsg(
            oMsg,
            "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
        );
        setFocusToInputObject(oInput);
        return false;
    }

    hideMsg(oMsg);
    return true;
}

function checkBirthday() {
    var birthday;
    var yy = $("#yy").val();
    var mm = $("#mm option:selected").val();
    var dd = $("#dd").val();
    var oMsg = $("#birthdayMsg");
    var lang = "ko_KR";

    var oyy = $("#yy");
    var omm = $("#mm");
    var odd = $("#dd");

    if (yy == "" && mm == "" && dd == "") {
        showErrorMsg(oMsg, "태어난 년도 4자리를 정확하게 입력하세요.");
        setFocusToInputObject(oyy);
        return false;
    }

    if (mm.length == 1) {
        mm = "0" + mm;
    }
    if (dd.length == 1) {
        dd = "0" + dd;
    }

    if (yy == "") {
        showErrorMsg(oMsg, "태어난 년도 4자리를 정확하게 입력하세요.");
        setFocusToInputObject(oyy);
        return false;
    }
    if (yy.length != 4 || yy.indexOf("e") != -1 || yy.indexOf("E") != -1) {
        showErrorMsg(oMsg, "태어난 년도 4자리를 정확하게 입력하세요.");
        setFocusToInputObject(oyy);
        return false;
    }
    if (mm == "") {
        showErrorMsg(oMsg, "태어난 월을 선택하세요.");
        setFocusToInputObject(omm);
        return false;
    }
    if (dd == "") {
        showErrorMsg(oMsg, "태어난 일(날짜) 2자리를 정확하게 입력하세요.");
        setFocusToInputObject(odd);
        return false;
    }
    if (dd.length != 2 || dd.indexOf("e") != -1 || dd.indexOf("E") != -1) {
        showErrorMsg(oMsg, "태어난 일(날짜) 2자리를 정확하게 입력하세요.");
        setFocusToInputObject(odd);
        return false;
    }

    birthday = yy + mm + dd;
    if (!isValidDate(birthday)) {
        showErrorMsg(oMsg, "생년월일을 다시 확인해주세요.");
        setFocusToInputObject(oyy);
        return false;
    }
    $("#birthday").val(birthday);

    var age = calcAge(birthday);
    if (age < 0) {
        showErrorMsg(oMsg, "미래에서 오셨군요. ^^");
        setFocusToInputObject(oyy);
        return false;
    } else if (age >= 100) {
        showErrorMsg(oMsg, "정말이세요?");
        setFocusToInputObject(oyy);
        return false;
    } else if (age < 14) {
        showErrorMsg(oMsg, "만 14세 미만의 어린이는 보호자 동의가 필요합니다.");
        if (lang == "ko_KR") {
            if ($("#joinMode").val() == "unreal") {
                showJuniverMobileTab();
            }
            return true;
        } else {
            hideJuniverTab();
            return false;
        }
    } else {
        hideMsg(oMsg);
        hideJuniverTab();
        return true;
    }
    return true;
}

function checkGender() {
    var gender = $("#gender").val();
    var oMsg = $("#genderMsg");
    var oInput = $("#gender");

    if (gender == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        setFocusToInputObject(oInput);
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function checkEmail() {
    var id = $("#id").val();
    var email = $("#email").val();
    var oMsg = $("#emailMsg");

    if (email == "") {
        hideMsg(oMsg);
        return true;
    }

    var isEmail =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isHan = /[ㄱ-ㅎ가-힣]/g;
    if (!isEmail.test(email) || isHan.test(email)) {
        showErrorMsg(oMsg, "이메일 주소를 다시 확인해주세요.");
        return false;
    }
    if (email == id + "@naver.com") {
        showErrorMsg(oMsg, "가입중인 아이디는 사용하실 수 없습니다.");
        return false;
    }

    hideMsg(oMsg);
    return true;
}

function checkPhoneNo() {
    var phoneNo = $("#phoneNo").val();
    var oMsg = $("#phoneNoMsg");
    var oInput = $("#phoneNo");

    if (phoneNo == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        setFocusToInputObject(oInput);
        return false;
    }

    hideMsg(oMsg);
    return true;
}

function sendSmsButton() {
    var nationNo = $("#nationNo").val();
    var phoneNo = $("#phoneNo").val();
    var key = $("#token_sjoin").val();
    var oMsg = $("#phoneNoMsg");
    var lang = "ko_KR";
    var id = $("#id").val();

    phoneNo = phoneNo.replace(/ /gi, "").replace(/-/gi, "");
    $("#phoneNo").val(phoneNo);
    authFlag = false;

    $("#authNoMsg").hide();
    if (nationNo == "82" && !isCellPhone(phoneNo)) {
        showErrorMsg(oMsg, "형식에 맞지 않는 번호입니다.");
        return false;
    }
    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=sendAuthno&nationNo=" +
            nationNo +
            "&mobno=" +
            phoneNo +
            "&lang=" +
            lang +
            "&key=" +
            key +
            "&id=" +
            id,
        success: function(data) {
            var result = data.substr(4);
            if (result == "S") {
                showSuccessMsg(
                    oMsg,
                    "인증번호를 발송했습니다.(유효시간 30분)<br>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다."
                );
                $("#authNo").attr("disabled", false);
                var oBox = $("#authNoBox");
                var oCode = $("#authNoCode");
                showAuthDefaultBox(oBox, oCode);
            } else {
                showErrorMsg(oMsg, "전화번호를 다시 확인해주세요.");
            }
        },
    });
    return false;
}

function checkAuthNo() {
    var authNo = $("#authNo").val();
    var oMsg = $("#authNoMsg");
    var oBox = $("#authNoBox");
    var oCode = $("#authNoCode");
    var oInput = $("#authNo");

    if (authNo == "") {
        showErrorMsg(oMsg, "인증이 필요합니다.");
        setFocusToInputObject(oInput);
        return false;
    }

    if (authFlag) {
        showSuccessMsg(oMsg, "인증이 성공했습니다.");
        showAuthSuccessBox(oBox, oCode, "일치");
        $("#phoneNoMsg").hide();
        return true;
    } else {
        checkAuthnoByAjax();
    }
    return true;
}

function checkAuthnoByAjax() {
    var authNo = $("#authNo").val();
    var key = $("#token_sjoin").val();
    var oMsg = $("#authNoMsg");
    var oBox = $("#authNoBox");
    var oCode = $("#authNoCode");
    var oInput = $("#authNo");

    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=checkAuthno&authno=" + authNo + "&key=" + key,
        success: function(data) {
            var result = data.substr(4);
            if (result == "S") {
                showSuccessMsg(oMsg, "인증이 성공했습니다.");
                showAuthSuccessBox(oBox, oCode, "일치");
                $("#phoneNoMsg").hide();
                authFlag = true;
            } else if (result == "Cnt") {
                showErrorMsg(oMsg, "인증을 다시 진행해주세요.");
                showAuthErrorBox(oBox, oCode, "불일치");
                setFocusToInputObject(oInput);
            } else {
                showErrorMsg(oMsg, "인증번호를 다시 확인해주세요.");
                showAuthErrorBox(oBox, oCode, "불일치");
                setFocusToInputObject(oInput);
            }
        },
    });
    return true;
}

function hideJuniverTab() {
    $("#joinMode").val("unreal");
    $("#mobDiv").show();
    $("#pmobDiv").hide();
    $("#pipinDiv").hide();
    return true;
}

function showJuniverMobileTab() {
    $("#joinMode").val("juniverMobile");
    $("#mobDiv").hide();
    $("#pmobDiv").show();
    $("#pipinDiv").hide();
    return true;
}

function showJuniverIpinTab() {
    $("#joinMode").val("juniverIpin");
    $("#mobDiv").hide();
    $("#pmobDiv").hide();
    $("#pipinDiv").show();
    return true;
}
//endregion

//region joinPrtsMobile
function checkPrtsAgree() {
    var oMsg = $("#pagreeMsg");
    if (!$("#pagree_all").is(":checked")) {
        showErrorMsg(oMsg, "약관에 모두 동의해주세요.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function setPrtsTerms() {
    if ($("#pagree_all").is(":checked")) {
        $("#pagree_01").prop("checked", true);
        $("#pagree_02").prop("checked", true);
        $("#pagree_03").prop("checked", true);
        $("#pagree_04").prop("checked", true);
        $("#pagree_05").prop("checked", true);
    } else {
        $("#pagree_01").prop("checked", false);
        $("#pagree_02").prop("checked", false);
        $("#pagree_03").prop("checked", false);
        $("#pagree_04").prop("checked", false);
        $("#pagree_05").prop("checked", false);
    }
    checkPrtsAgree();
    return true;
}

function viewPrtsTerms() {
    if (!$("#pagree_01").is(":checked") ||
        !$("#pagree_02").is(":checked") ||
        !$("#pagree_03").is(":checked") ||
        !$("#pagree_04").is(":checked") ||
        !$("#pagree_05").is(":checked")
    ) {
        $("#pagree_all").prop("checked", false);
    }
    if (
        $("#pagree_01").is(":checked") &&
        $("#pagree_02").is(":checked") &&
        $("#pagree_03").is(":checked") &&
        $("#pagree_04").is(":checked") &&
        $("#pagree_05").is(":checked")
    ) {
        $("#pagree_all").prop("checked", true);
    }
    checkPrtsAgree();
    return true;
}

function checkPrtsName() {
    var pname = $("#pname").val();
    var oMsg = $("#pnameMsg");
    if (pname == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function checkPrtsBirthday() {
    var birthday = $("#birthday").val();
    var pyy = $("#pyy").val();
    var pmm = $("#pmm").val();
    var pdd = $("#pdd").val();
    var oMsg = $("#pbirthdayMsg");

    if (pyy == "" && pmm == "" && pdd == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        return false;
    }
    if (
        pyy == "" ||
        pmm == "" ||
        pdd == "" ||
        pdd.indexOf("e") != -1 ||
        pdd.indexOf("E") != -1
    ) {
        showErrorMsg(oMsg, "생년월일을 다시 확인해주세요.");
        return false;
    }
    if (pmm.length == 1) {
        pmm = "0" + pmm;
    }
    if (pdd.length == 1) {
        pdd = "0" + pdd;
    }

    var pbirthday = pyy + pmm + pdd;
    if (!isValidDate(pbirthday)) {
        showErrorMsg(oMsg, "생년월일을 다시 확인해주세요.");
        return false;
    }
    $("#pbirthday").val(pbirthday);

    var age = calcAge(birthday);
    var page = calcAge(pbirthday);
    if (page < 0) {
        showErrorMsg(oMsg, "미래에서 오셨군요. ^^");
        return false;
    } else if (page >= 100) {
        showErrorMsg(oMsg, "정말이세요?");
        return false;
    } else if (page - age < 19) {
        showErrorMsg(oMsg, "보호자(법정대리인) 동의 기준이 맞지 않습니다.");
        return false;
    } else {
        hideMsg(oMsg);
        return true;
    }
    return true;
}

function checkPrtsGender() {
    var pgender = $("#pgender").val();
    var oMsg = $("#pgenderMsg");

    if (pgender == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function checkPrtsPhoneNo() {
    var pphoneNo = $("#pphoneNo").val();
    var oMsg = $("#pphoneNoMsg");
    if (pphoneNo == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function sendPrtsSmsButton() {
    var pname = $("#pname").val();
    var pForeign;
    if ($("#pforeign").val() == 0) {
        pForeign = "N";
    } else {
        pForeign = "Y";
    }
    var pGender;
    if ($("#pgender").val() == 0) {
        pGender = "M";
    } else {
        pGender = "F";
    }
    var pbirthday = $("#pbirthday").val();
    var ptelecom = $("#ptelecom").val();
    var pphoneNo = $("#pphoneNo").val();
    var key = $("#token_sjoin").val();
    var oMsg = $("#pphoneNoMsg");

    $("#pauthNoMsg").hide();
    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=sendPrtsAuthno&psex=" +
            pGender +
            "&pForeign=" +
            pForeign +
            "&pbirthday=" +
            pbirthday +
            "&ptelecom=" +
            ptelecom +
            "&pmobno=" +
            pphoneNo +
            "&key=" +
            key +
            "&pnm=" +
            escape(encodeURIComponent(pname)),
        success: function(data) {
            var result = data.substr(4);
            if (result == "S") {
                showSuccessMsg(
                    oMsg,
                    "인증번호를 발송했습니다.(유효시간 30분)<br>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다."
                );
                $("#pauthNo").attr("disabled", false);
                var oBox = $("#pauthNoBox");
                var oCode = $("#pauthNoCode");
                showAuthDefaultBox(oBox, oCode);
            } else {
                showErrorMsg(oMsg, "전화번호를 다시 확인해주세요.");
            }
        },
    });
    return false;
}

function checkPrtsAuthNo() {
    var pauthNo = $("#pauthNo").val();
    var oMsg = $("#pauthNoMsg");
    var oBox = $("#pauthNoBox");
    var oCode = $("#pauthNoCode");

    if (pauthNo == "") {
        showErrorMsg(oMsg, "인증이 필요합니다.");
        return false;
    }

    if (authFlag) {
        showSuccessMsg(oMsg, "인증이 성공했습니다.");
        showAuthSuccessBox(oBox, oCode, "일치");
        $("#pphoneNoMsg").hide();
        return true;
    } else {
        checkPrtsAuthnoByAjax();
    }
    return true;
}

function checkPrtsAuthnoByAjax() {
    var pname = $("#pname").val();
    var pForeign;
    if ($("#pforeign").val() == 0) {
        pForeign = "N";
    } else {
        pForeign = "Y";
    }
    var pGender;
    if ($("#pgender").val() == 0) {
        pGender = "M";
    } else {
        pGender = "F";
    }
    var pbirthday = $("#pbirthday").val();
    var ptelecom = $("#ptelecom").val();
    var pphoneNo = $("#pphoneNo").val();
    var pauthNo = $("#pauthNo").val();
    var key = $("#token_sjoin").val();
    var oMsg = $("#pauthNoMsg");
    var oBox = $("#pauthNoBox");
    var oCode = $("#pauthNoCode");

    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=checkPrtsAuthno&psex=" +
            pGender +
            "&pForeign=" +
            pForeign +
            "&pbirthday=" +
            pbirthday +
            "&ptelecom=" +
            ptelecom +
            "&pmobno=" +
            pphoneNo +
            "&pauthno=" +
            pauthNo +
            "&key=" +
            key +
            "&pnm=" +
            escape(encodeURIComponent(pname)),
        success: function(data) {
            var result = data.substr(4);
            if (result == "S") {
                showSuccessMsg(oMsg, "인증이 성공했습니다.");
                showAuthSuccessBox(oBox, oCode, "일치");
                $("#pphoneNoMsg").hide();
                authFlag = true;
            } else if (result == "Cnt") {
                showErrorMsg(oMsg, "인증을 다시 진행해주세요.");
                showAuthErrorBox(oBox, oCode, "불일치");
            } else {
                showErrorMsg(oMsg, "인증번호를 다시 확인해주세요.");
                showAuthErrorBox(oBox, oCode, "불일치");
            }
        },
    });
    return true;
}
//endregion

//region joinPrtsIpin
function checkIpinAgree() {
    var oMsg = $("#iagreeMsg");
    if (!$("#iagree_all").is(":checked")) {
        showErrorMsg(oMsg, "동의사항에 체크해 주세요.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function openIpinPopup() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (/crios/.test(ua) && /ipad/.test(ua)) {
        alert("접속하신 브라우저에서는 아이핀 인증이 진행되지 않습니다.");
        return false;
    }

    winOpenAtCenter("", "popup", 448, 500, "auto");
    document.form_ipin.target = "popup";
    document.form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
    document.form_ipin.submit();
    return true;
}

function checkIpinPopup() {
    var ipinFlag = $("#ipinFlag").val();
    var oMsg = $("#ipopupMsg");

    if (ipinFlag != "Y") {
        showErrorMsg(oMsg, "아이핀 인증이 필요합니다.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function checkIpinPhoneNo() {
    var phoneNo = $("#iphoneNo").val();
    var oMsg = $("#iphoneNoMsg");

    if (phoneNo == "") {
        showErrorMsg(oMsg, "필수 정보입니다.");
        return false;
    }
    hideMsg(oMsg);
    return true;
}

function sendIpinSmsButton() {
    var nationNo = "82";
    var phoneNo = $("#iphoneNo").val();
    var key = $("#token_sjoin").val();
    var oMsg = $("#iphoneNoMsg");
    var lang = "ko_KR";

    phoneNo = phoneNo.replace(/ /gi, "").replace(/-/gi, "");
    $("#iphoneNo").val(phoneNo);
    authFlag = false;

    $("#iauthNoMsg").hide();
    if (nationNo == "82" && !isCellPhone(phoneNo)) {
        showErrorMsg(oMsg, "형식에 맞지 않는 번호입니다.");
        return false;
    }
    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=sendAuthno&nationNo=" +
            nationNo +
            "&mobno=" +
            phoneNo +
            "&lang=" +
            lang +
            "&key=" +
            key,
        success: function(data) {
            var result = data.substr(4);
            if (result == "S") {
                showSuccessMsg(
                    oMsg,
                    "인증번호를 발송했습니다.(유효시간 30분)<br>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다."
                );
                $("#iauthNo").attr("disabled", false);
                var oBox = $("#iauthNoBox");
                var oCode = $("#iauthNoCode");
                showAuthDefaultBox(oBox, oCode);
            } else {
                showErrorMsg(oMsg, "전화번호를 다시 확인해주세요.");
            }
        },
    });
    return true;
}

function checkIpinAuthNo() {
    var authNo = $("#iauthNo").val();
    var oMsg = $("#iauthNoMsg");
    var oBox = $("#iauthNoBox");
    var oCode = $("#iauthNoCode");

    if (authNo == "") {
        showErrorMsg(oMsg, "인증이 필요합니다.");
        return false;
    }

    if (authFlag) {
        showSuccessMsg(oMsg, "인증이 성공했습니다.");
        showAuthSuccessBox(oBox, oCode, "일치");
        hideMsg(oMsg);
        return true;
    } else {
        checkIpinAuthnoByAjax();
    }
    return true;
}

function checkIpinAuthnoByAjax() {
    var authNo = $("#iauthNo").val();
    var key = $("#token_sjoin").val();
    var oMsg = $("#iauthNoMsg");
    var oBox = $("#iauthNoBox");
    var oCode = $("#iauthNoCode");

    $.ajax({
        type: "GET",
        url: "/user2/joinAjax?m=checkAuthno&authno=" + authNo + "&key=" + key,
        success: function(data) {
            var result = data.substr(4);
            if (result == "S") {
                showSuccessMsg(oMsg, "인증이 성공했습니다.");
                showAuthSuccessBox(oBox, oCode, "일치");
                $("#iphoneNoMsg").hide();
                authFlag = true;
            } else if (result == "Cnt") {
                showErrorMsg(oMsg, "인증을 다시 진행해주세요.");
                showAuthErrorBox(oBox, oCode, "불일치");
            } else {
                showErrorMsg(oMsg, "인증번호를 다시 확인해주세요.");
                showAuthErrorBox(oBox, oCode, "불일치");
            }
        },
    });
    return true;
}

function setIpinFlag(val) {
    var oMsg = $("#ipopupMsg");

    $("#ipinFlag").val(val);
    if (val == "Y") {
        showSuccessMsg(oMsg, "인증이 성공했습니다.");
        return true;
    } else {
        showErrorMsg(oMsg, "인증에 실패했습니다.");
        return false;
    }
}
//endregion

//region 공통 함수
function getLenChar(texts) {
    texts = texts + "";
    return String.fromCharCode(texts.length);
}

function createRsaKey() {
    var rsa = new RSAKey();
    var sessionKey = "8ZmSap1pL1iyRct1";
    var keyName = "100017447";
    var eValue =
        "dd0cc677b2acc37ba504e4d4b3a246dc81a8556a6509bf937b8720c6d7db98d6724a815ac631d0dba0ef39f1b24037b6f73c9204e4971cff42dc9720e91bbbb9b9fd09956ebc58167397395ddc5fba28475553d172c731c6ec9600f628b28e512d74058821d54e6a05ea9238df18bdb522c6a3bec066599ae544b98a3ee021a1";
    var nValue = "010001";

    var id = $("#id").val();
    var pw = $("#pswd1").val();
    rsa.setPublic(eValue, nValue);

    var comVal = getLenChar(sessionKey) + sessionKey + getLenChar(id) + id;
    $("#encPswd").val(rsa.encrypt(comVal + getLenChar(pw) + pw));
    $("#encKey").val(keyName);
}

function checkSpace(str) {
    if (str.search(/\s/) != -1) {
        return true;
    } else {
        return false;
    }
}

function isValidPasswd(str) {
    var cnt = 0;
    if (str == "") {
        return false;
    }

    /* check whether input value is included space or not */
    var retVal = checkSpace(str);
    if (retVal) {
        return false;
    }
    if (str.length < 8) {
        return false;
    }
    for (var i = 0; i < str.length; ++i) {
        if (str.charAt(0) == str.substring(i, i + 1)) ++cnt;
    }
    if (cnt == str.length) {
        return false;
    }

    var isPW =
        /^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{8,16}$/;
    if (!isPW.test(str)) {
        return false;
    }

    return true;
}

var isShift = false;

function checkShiftUp(e) {
    if (e.which && e.which == 16) {
        isShift = false;
    }
}

function checkShiftDown(e) {
    if (e.which && e.which == 16) {
        isShift = true;
    }
}

function checkCapslock(e) {
    var myKeyCode = 0;
    var myShiftKey = false;
    if (window.event) {
        // IE
        myKeyCode = e.keyCode;
        myShiftKey = e.shiftKey;
    } else if (e.which) {
        // netscape ff opera
        myKeyCode = e.which;
        myShiftKey = isShift;
    }

    var oMsg = $("#pswd1Msg");
    if (myKeyCode >= 65 && myKeyCode <= 90 && !myShiftKey) {
        showErrorMsg(oMsg, "Caps Lock이 켜져 있습니다.");
    } else if (myKeyCode >= 97 && myKeyCode <= 122 && myShiftKey) {
        showErrorMsg(oMsg, "Caps Lock이 켜져 있습니다.");
    } else {
        hideMsg(oMsg);
    }
}

function checkCapslock2(e) {
    var myKeyCode = 0;
    var myShiftKey = false;
    if (window.event) {
        // IE
        myKeyCode = e.keyCode;
        myShiftKey = e.shiftKey;
    } else if (e.which) {
        // netscape ff opera
        myKeyCode = e.which;
        myShiftKey = isShift;
    }

    var oMsg = $("#pswd2Msg");
    if (myKeyCode >= 65 && myKeyCode <= 90 && !myShiftKey) {
        showErrorMsg(oMsg, "Caps Lock이 켜져 있습니다.");
    } else if (myKeyCode >= 97 && myKeyCode <= 122 && myShiftKey) {
        showErrorMsg(oMsg, "Caps Lock이 켜져 있습니다.");
    } else {
        hideMsg(oMsg);
    }
}

function defaultScript() {
    $(".ps_box")
        .click(function() {
            $(this).children("input").focus();
            $(this).addClass("focus");
        })
        .focusout(function() {
            var welInputText = $(".ps_box");
            welInputText.removeClass("focus");
        });
}

function submitClose() {
    submitFlag = true;
    $("#btnJoin").attr("disabled", true);
}

function submitOpen() {
    $("#btnJoin").attr("disabled", false);
}

function setFocusToInputObject(obj) {
    if (submitFlag) {
        submitFlag = false;
        obj.focus();
    }
}

function showErrorMsg(obj, msg) {
    obj.attr("class", "error_next_box");
    obj.html(msg);
    obj.show();
}

function showSuccessMsg(obj, msg) {
    obj.attr("class", "error_next_box green");
    obj.html(msg);
    obj.show();
}

function showAuthDefaultBox(oBox, oCode) {
    oBox.attr("class", "ps_box");
    oCode.html("");
    oCode.hide();
}

function showAuthSuccessBox(oBox, oCode, msg) {
    oBox.attr("class", "ps_box accord");
    oCode.html(msg);
    oCode.show();
}

function showAuthErrorBox(oBox, oCode, msg) {
    oBox.attr("class", "ps_box discord");
    oCode.html(msg);
    oCode.show();
}

function hideMsg(obj) {
    obj.hide();
}

function showPasswd1ImgByStep(oImg, oSpan, step) {
    if ("IE8" == "") {
        return false;
    }
    if (step == 1) {
        oImg.attr("class", "ps_box int_pass_step1");
        oSpan.attr("class", "step_txt txt_red");
        oSpan.html("사용불가");
    } else if (step == 2) {
        oImg.attr("class", "ps_box int_pass_step2");
        oSpan.attr("class", "step_txt txt_orange");
        oSpan.html("위험");
    } else if (step == 3) {
        oImg.attr("class", "ps_box int_pass_step3");
        oSpan.attr("class", "step_txt txt_yellow");
        oSpan.html("보통");
    } else if (step == 4) {
        oImg.attr("class", "ps_box int_pass_step4");
        oSpan.attr("class", "step_txt txt_green");
        oSpan.html("안전");
    } else {
        oImg.attr("class", "ps_box int_pass");
        oSpan.attr("class", "step_txt");
        oSpan.html("");
    }
}

function showPasswd2ImgByDiff(oImg, diff) {
    if ("IE8" == "") {
        return false;
    }
    if (diff == false) {
        oImg.attr("class", "ps_box int_pass_check");
    } else {
        oImg.attr("class", "ps_box int_pass_check2");
    }
}

function calcAge(birth) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var monthDay = month + "" + day;

    birth = birth.replace("-", "").replace("-", "");
    var birthdayy = birth.substr(0, 4);
    var birthdaymd = birth.substr(4, 4);

    var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
    return age;
}

function isValidDate(param) {
    try {
        param = param.replace(/-/g, "");

        // 자리수가 맞지않을때
        if (isNaN(param) || param.length != 8) {
            return false;
        }

        var year = Number(param.substring(0, 4));
        var month = Number(param.substring(4, 6));
        var day = Number(param.substring(6, 8));

        if (month < 1 || month > 12) {
            return false;
        }

        var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var maxDay = maxDaysInMonth[month - 1];

        // 윤년 체크
        if (month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
            maxDay = 29;
        }

        if (day <= 0 || day > maxDay) {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}

function isCellPhone(p) {
    var regPhone = /^((01[1|6|7|8|9])[1-9][0-9]{6,7})$|(010[1-9][0-9]{7})$/;
    return regPhone.test(p);
}

function winOpenAtCenter(sURL, sWindowName, w, h, sScroll) {
    // 화면 중앙으로 Popup 띄우기.. 스크롤바는 옵션..
    // ex)
    // openWin("test.asp", "winTest", 400, 300); ☞ 스크롤바 없음
    // openWin("test.asp", "winTest", 400, 300, "yes"); ☞ 스크롤바 있음
    // openWin("test.asp", "winTest", 400, 300, "auto"); ☞ 스크롤바 자동

    var x = (screen.width - w) / 2;
    var y = (screen.height - h) / 2;

    if (sScroll == null) sScroll = "no";

    var sOption = "";
    sOption =
        sOption +
        "toolbar=no, channelmode=no, location=no, directories=no, resizable=no, menubar=no";
    sOption =
        sOption +
        ", scrollbars=" +
        sScroll +
        ", left=" +
        x +
        ", top=" +
        y +
        ", width=" +
        w +
        ", height=" +
        h;

    var win = window.open(sURL, sWindowName, sOption);
    return win;
}