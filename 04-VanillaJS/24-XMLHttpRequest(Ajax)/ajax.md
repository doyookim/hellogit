# Ajax

Asynchronous(비동기)

Javascrip
And
Xml : 데이터의 구조적 표현 (html의 할아버지 뻘) ,태그이름도 내가 정함, 정해진 태그가 없음.
--- 경량화 ---> JSON

자바스크립트로 xml을 비동기로 처리하는 방법

![설명](image/06.jpg)

css 먼저
한줄정도는 주석으로 남겨놓기

카카오 개발자 사이트 로그인
로그인후 내 애플리케이션
추가하기- 인증키 발급받기
restAPI키 사용
플랫폼 - 웹

https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-image

이미지 검색
다음 검색 서비스에서 질의어로 이미지를 검색합니다. REST API 키를 헤더에 담아 GET으로 요청합니다. 원하는 검색어와 함께 결과 형식 파라미터를 선택적으로 추가할 수 있습니다. 응답 바디는 meta, documents로 구성된 JSON 객체입니다.

curl "https://dapi.kakao.com/v2/search/image" --data-urlencode "query=설현" -H "Authorization: KakaoAK ${9810b27a194332726987ea8f1fecd222}"

[Javascript] 비동기, Promise, async, await 확실하게 이해하기

https://elvanov.com/2597
https://devlog-wjdrbs96.tistory.com/163

axios
https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9
