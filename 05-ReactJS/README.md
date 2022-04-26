# ReactJS

## npm

> npm (노드 패키지 매니저/Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다. 명령 줄 클라이언트(npm), 그리고 공개 패키지와 지불 방식의 개인 패키지의 온라인 데이터베이스(npm 레지스트리)로 이루어져 있다. 이 레지스트리는 클라이언트를 통해 접근되며 사용 가능한 패키지들은 npm 웹사이트를 통해 찾아보고 검색할 수 있다. 패키지 관리자와 레지스트리는 npm사에 의해 관리된다.

설치 명령어

```
npm install
```

```
npm init
```

```
npm install --save 패키지 이름
```

dependendies 생성

## 의존성 관리

내부적으로 다른 페키지들이 있을 때, 자동으로 관련된 라이브러리들을 일괄적으로
받아준다.

pakage.json만 남긴 상태에서

```
npm install
```

기록된 모든 라이브러리를 일괄 다운

```
npm install -- save
```

내역을 기록

```
npm uninstall --save 패키지명
```

패키지 및 내역 삭제

```
npm install --save ????
-> yasn add ????

npm uninstall --save ????
-> yarn remove ????

npm install
-> yarn install
```

npm, yarn : 패키지 관리자
