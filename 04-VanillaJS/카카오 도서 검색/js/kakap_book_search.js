/** 
    @filename : kakao_book_search.js
    @author : 김도유(jeje_k@naver.com) 
    @description : 카카오 OpenAPI를 활용한 책 검색 기능 구현 js 페이지
*/

/** KAKAO REST KEY */
const KAKAO_REST_KEY = "9810b27a194332726987ea8f1fecd222";

/** 검색 옵션 정확도, 발간일  */
let sort = null;

/** 표시할 페이지 건수 **/
let size = null;

/** 페이지 번호 */
let currentPage = 1;

/** 검색어 */
let queryKeyword = null;

/** 마지막 페이지인지 검사 */
let isEnd = false;

/** 검색폼의 submit 이벤트 - 신규검색 */
document.querySelector("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // 검색 옵션 정확도, 발간일을 가져온다.
    const sortField = document.querySelector("#sort");
    sort = sortField[sortField.selectedIndex].value;

    // 표시할 페이지 건수 가져온다.
    const sizeField = document.querySelector("#size");
    size = sizeField[sizeField.selectedIndex].value;

    // 입력된 검색어를 가져온다.
    const queryField = document.querySelector("#query");
    queryKeyword = queryField.value.trim();

    // 검색어가 입력되지 않은 경우에 대한 예외처리
    if (!queryKeyword) {
        alert("검색어를 입력하세요.");
        queryField.focus();
        return;
    }

    // 신규 검색
    currentPage = 1;
    search();
});

/** 스크롤 이벤트 - 추가검색 */
window.addEventListener("scroll", (e) => {
    // 마지막 페이지이거나 이미 로딩바가 화면에 표시되고 있다면 처리 중단
    if (
        isEnd ||
        document.querySelector("#loading").classList.contains("active")
    ) {
        return;
    }

    // 스크롤바의 Y좌표
    const scrollTop = window.scrollY;
    // 웹 브라우저의 창 높이
    const windowHeight = window.screen.availHeight;
    // HTML 문서의 높이
    const documentHeight = document.body.scrollHeight;
});

/** Ajax요청 후 결과를 화면에 HTML로 출력하는 함수 */
async function search() {
    // 로딩바 객체
    const loading = document.querySelector("#loading");

    // 로딩바 화면에 표시하기
    loading.classList.add("active");

    // 검색 결과가 표시될 영역
    const list = document.querySelector("#list");

    // 1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제한다.
    if (currentPage == 1) {
        Array.from(list.getElementsByTagName("li")).forEach((v, i) => {
            list.removeChild(v);
        });
    }

    // 검색결과를 저장할 빈 변수
    let json = null;

    try {
        json = await axios.get(
            "https://dapi.kakao.com/v3/search/book?target=title", {
                params: {
                    query: queryKeyword,
                    page: currentPage,
                    sort: sort,
                    size: size,
                },
                headers: {
                    Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
                },
            }
        );
        //응답 결과 확인
        console.log(json);
    } catch (e) {
        console.error(err);
        alert("요청을 처리하는데 실패했습니다.");
        return;
    } finally {
        // 로딩바 닫기
        loading.classList.remove("active");
    }

    if (json != null) {
        const { data } = json;

        // 다음 페이지를 요청할 수 있는지를 판단하기 위한 값.
        isEnd = data.meta.is_end;

        data.documents.map((v, i) => {
            const li = document.createElement("li");
            list.appendChild(li);

            const a = document.createElement("a");
            a.setAttribute("href", v.url);
            a.setAttribute("target", "_blank");
            li.appendChild(a);

            const img = document.createElement("img");
            img.classList.add("thumbnail");
            img.setAttribute("src", v.thumbnail || "img/noimage.jpg");
            a.appendChild(img);

            const h2 = document.createElement("h2");
            h2.innerHTML = v.title;
            a.appendChild(h2);

            const p = document.createElement("p");
            p.innerHTML = v.contents;
            a.appendChild(p);

            const span1 = document.createElement("span");
            span1.innerHTML = v.authors;
            span1.classList.add("info");
            a.appendChild(span1);

            const span2 = document.createElement("span");
            span2.innerHTML = v.publisher;
            span2.classList.add("info");
            a.appendChild(span2);

            const span3 = document.createElement("span");
            span3.innerHTML = v.price;
            span3.classList.add("info");
            a.appendChild(span3);

            const span4 = document.createElement("span");
            if (v.sale_price == -1) {
                v.sale_price = " ";
            }
            span4.innerHTML = v.sale_price;
            span4.classList.add("info");
            a.appendChild(span4);
        });
    }
}