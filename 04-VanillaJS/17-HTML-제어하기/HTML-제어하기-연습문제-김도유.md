# 김도유 HTML 제어하기 연습문제

> 2022-03-23

## 문제1

아래 화면과 같이 현재 시각을 yyyy-mm-dd hh:mi:ss 형식으로 출력하는 웹 페이지를 구현하시오.
년도는 4자리 숫자로 구성되며 월,일,시,분,초는 2자리 숫자 입니다.
출력되는 시간은 매초마다 자동으로 화면상에서 갱신되어야 합니다.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>Document</title>
</head>

<body>
    <div>
        <h1 id="current_time"></h1>
    </div>

    <script>
        function today() {
            const current_time = document.getElementById('current_time');
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var date = today.getDate();
            var day = today.getDay();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            var seconds = today.getSeconds();


            current_time.innerHTML = year + "-" + (month + 1) + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

        }

        function init() {

            today();
            setInterval(today, 1000);
        }

        init();
    </script>
</body>
</head>

</html>
```

> 출력결과
> ![연습문제01](img/%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C01.jpg)

#문제2
아래 화면과 같이 off 상태의 버튼이 누를때마다 on/off 의 상태가 변경되도록 CSS를 적용할 수 있는 코드를 작성하세요.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>Document</title>

    <style>
        .event-box {
            border: 2px solid black;
            background: #d5d5d5;
            color: blue;
            font-size: 15x;
            text-align: center;
            cursor: pointer;
            width: 110px;
            padding: 5px;
        }
    </style>
</head>

<body>
    <div id="listener" class="event-box"><b>푸시알림 수신</b></div>

    <script>
        function change() {
            document.querySelector('#listener').addEventListener('click', (e) => document.getElementById('listener').style.color = '#ff0000');
            document.querySelector('#listener').addEventListener('click', (e) => document.getElementById('listener').style.backgroundColor = '#ff0');
        }

        function double() {
            document.querySelector('#listener').addEventListener(" dblclick ", (e) =>
                document.getElementById('listener').style.color = '#0000ff;');
            document.querySelector('#listener').addEventListener("dblclick ", (e) =>
                document.getElementById('listener').style.backgroundColor = '#d5d5d5;');
        }
    </script>
</body>
</head>

</html>
```

> 출력결과
> ![연습문제02](img/연습문제02.jpg)

# 문제3

아래 화면과 같이 3장의 이미지가 3초마다 한번씩 자동으로 변경되는 웹 페이지를 작성하시오.
세 번째 이미지가 표시된 후 3초 후에는 다시 첫 번째 이미지가 표시되어야 합니다.
이미지 파일은 각자 임의의 이미지를 선정하여 사용하고, 이미지 파일 이름도 각자 임의로 구성합니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>

    <style>
      .slide1 {
        width: 150px;
      }
    </style>
  </head>

  <body>
    <div>
      <img class="slide1" src="../img/01.gif" />
      <img class="slide1" src="../img/02.gif" />
      <img class="slide1" src="../img/03.gif" />
    </div>

    <script>
      var index = 0;
      window.onload = function () {
        slideShow();
      };

      function slideShow() {
        var i;
        var x = document.getElementsByClassName("slide1");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        index++;
        if (index > x.length) {
          index = 1;
        }
        x[index - 1].style.display = "block";
        setTimeout(slideShow, 3000);
      }
    </script>
  </body>
</html>
```

> 출력결과
> ![연습문제03](img/01.gif) > ![연습문제03](img/02.gif) > ![연습문제03](img/03.gif)

# 문제4

아래의 화면과 같이 버튼에 따라 과거의 n일 전부터 오늘까지의 범위를 표시하는 웹 페이지를 작성하시오.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <title>Document</title>
</head>

<body>
    <div>
        <table>
            <tr>
                <td>
                    <h1 id="pre_time" />
                </td>
                <td>~</td>
                <td>
                    <h1 id="current_time" />
                </td>
            </tr>
        </table>

        <input type="button" id="btn1" value="1일" />
        <input type="button" id="btn2" value="7일" />
        <input type="button" id="btn3" value="15일" />
        <input type="button" id="btn4" value="30일" />
        <input type="button" id="btn5" value="60일" />
    </div>

    <script>
        function today() {
            const current_time = document.getElementById('current_time');
            const pre_time = document.getElementById('pre_time');
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var date = today.getDate();
            var day = today.getDay();



            current_time.innerHTML = year + "-" + (month + 1) + "-" + date;
            pre_time.innerHTML = year + "-" + (month + 1) + "-" + date;

        }

        today();

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var date = today.getDate();
        var day = today.getDay();

        console.log(today - (24 * 60 * 60));

        document.querySelector("#btn1").addEventListener('click', (e) => document.getElementById('pre_time').innerHTML = year + "-" + (month + 1) + "-" + (date - 1));
        document.querySelector("#btn2").addEventListener('click', (e) => document.getElementById('pre_time').innerHTML = year + "-" + (month + 1) + "-" + (date - 7));
        document.querySelector("#btn3").addEventListener('click', (e) => document.getElementById('pre_time').innerHTML = year + "-" + (month + 1) + "-" + (date - 15));
        document.querySelector("#btn4").addEventListener('click', (e) => document.getElementById('pre_time').innerHTML = year + "-" + (month + 1) + "-" + (date - 30));
        document.querySelector("#btn5").addEventListener('click', (e) => document.getElementById('pre_time').innerHTML = year + "-" + (month + 1) + "-" + (date - 60));
    </script>
</body>
</head>

</html>
```

> 출력결과
> ![연습문제04](img/연습문제04.jpg)
