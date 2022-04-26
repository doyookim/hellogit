// 페이지가 실행되면서 자동으로 동작해야 하므로 즉시 실행 함수 형태로 구현.
(async () => {
  // ajax 결과가 저장될 json
  let json = null;

  // ajax 요청
  try {
    json = await axios.get("http://localhost:3000/tag_main");
  } catch (e) {
    console.error(e);
    alert("요청을 처리하는데 실패했습니다.");
    return;
  }

  // ajax결과가 존재한다면?
  if (json != null) {
    const swipe_wrap = document.querySelector("#swipe_wrap");
    const { data } = json;
    console.log(data);
    data.forEach((v, i) => {
      const li = document.createElement("li");
      const a1 = document.createElement("a");

      const span1 = document.createElement("span");
      span1.innerHTML = v.tag;
      a1.appendChild(span1);
      li.appendChild(a1);

      // a1.setAttribute("href", `view.html?id=${v.id}`);
      //  a1.innerHTML = v.name;
      // td2.appendChild(a1);

      // 구성된 tr을 tbody에 추가
      swipe_wrap.appendChild(li);
    });
  }
})();
