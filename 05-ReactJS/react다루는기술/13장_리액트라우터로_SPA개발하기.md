# 13장 리액트 라우터로 SPA 개발하기

# 13.1 라우팅이란?

웹 어플리케이션에서 라우팅이라는 개념은 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것을 의미

- 리액트 라우터(React Router): 이 라이브러리는 리액트의 라우팅 관련 라이브러리들 중에서 가장 오래됐고, 가장 많이 사용되고 있음. 컴포넌트 기반으로 라우팅 시스템을 설정할 수 있음.

# 13.2 싱글 페이지 애플리케이션이란?

싱글 페이지 애플리케이션이란 하나의 페이지로 이루어진 애플리케이션이라는 의미

멀티 페이지 애플리케이션에서는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 리소스를 전달받아 화면에 보여줌. 각 페이지마다 다른 html 파일을 만들어서 제공하거나, 데이터에 따라 유동적인 html을 생성해 주는 템플릿 엔진을 사용하기도 함.

사용자 인터랙션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 이 방식이 적합하지 않음. 새로운 페이지를 보여줘야 할 때마다 서버 측에서 모든 준비를 한다면 그만틈 서버의 자원을 사용하고, 트래픽이 더 많이 나올 수 있음.

리액트 같은 라이브러리를 사용해서 뷰 렌더링을 사용자의 브라우저가 담당하도록 하고, 웹 애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트 하는 방식을 사용하게됨(SPA방식). 새로운 데이터가 필요하다면 서버 API를 호출하여 필요한 데이터만 새로 불러와 애플리케이션에서 사용할 수 있게 됨.(Ajax)

## 13.2.1 SPA의 단점

앱의 규모가 커지면 자바스크립트 파일이 너무 커짐. 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 자바스크립트를 불러오기 때문. 최초 접속 시 모든 화면을 구성하는 스크립트를 한번에 모두 로딩해야 하기 떄문.

# 13.3 리액트 라우터 적용 및 기본 사용법

### 13.3.3.1 프로젝트 생성 및 라이브러리 설치

`$ yarn add react-router-dom`

### 13.3.3.2 프로젝트에 라우터 적용

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### 13.3.3.3 페이지 컴포넌트 만들기

> Home.js

```jsx
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
    </div>
  );
};

export default Home;
```

> About.js

```jsx
import React from "react";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
    </div>
  );
};

export default About;
```

## 13.3.4 Route 컴포넌트로 특정 경로애 원하는 컴포넌트 보여주기

사용자의 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주려면 Route라는 컴포넌트를 통해 라우트 설정을 해주어야 함.

```jsx
<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
```

> App.js

```jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```

![09_001](09_001.png)

## 13.3.5 Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크 보여주기

웹 페이지에서는 원래 a태그 사용, 리액트에서는 a태그를 바로 사용하면 안됨. 왜냐하면 a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오기 때문.

Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있음

```jsx
<Link to="경로">링크 이름</Link>
```

> Home.js

```jsx
<Link to="/about">소개</Link>
```

![09_002](09_002.png)
![09_003](09_003.png)

# 13.4 URL 파라미터와 쿼리스트링

- <b>URL 파라미터 예시 :</b> /profile/velopert
- <b>쿼리스트링 예시 :</b>/article?page=1&keyword=react

URL 파라미터는 주소의 경로에 유동적인 값을 넣는 형태, 쿼리스트링은 주소의 뒷부분에 ? 문자열 이후에 key=value로 값을 정의하며 &로 구분하는 형태

## 13.4.1 URL 파라미터

> Profile.js

```jsx
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

URL 파라미터는 useParams라는 Hook을 사용하여 객체 형태로 조회할 수 있음. URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props를 통해 설정

> App.js

```jsx
<Route path="/profiles/:username" element={<Profile />} />
```

URL 파라미터는 /profiles/:username과 같이 경로에 :를 사용하여 설정

> Home.js - 추가

```jsx
<ul>
  <li>
    <Link to="/about">소개</Link>
  </li>
  <li>
    <Link to="/profiles/velopert">velopert의 프로필</Link>
  </li>
  <li>
    <Link to="/profiles/gildong">gildong의 프로필</Link>
  </li>
  <li>
    <Link to="/profiles/void">존재하지 않는 프로필</Link>
  </li>
</ul>
```

![09_004](09_004.png)

## 13.4.2 쿼리스트링

> About.js - 추가

```jsx
import { useLocation } from "react-router-dom";
const location = useLocation();
<p>쿼리스트링: {location.search}</p>;
```

![09_005](09_005.png)

> About.js

```jsx
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    searchParams.set("detail", detail === "true" ? false : true);
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
```

쿼리파라미터를 사용할 때 주의할 점은 쿼리파라미터를 조회할 때 값은 무조건 문자열 타입이라는 점. 즉, true 또는 false 값을 넣는다면 값을 비교할 때 꼭 'true'와 같이 따옴표로 감싸서 비교 해야 하고, 숫자를 다룬다면 parseInt를 사용하여 숫자 타입으로 변환을 해야 함.

# 13.5 중첩된 라우트

> Aritcles.js

```jsx
import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
    </ul>
  );
};

export default Articles;
```

> Article.js

```js
import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글{id}</h2>
    </div>
  );
};

export default Article;
```

![09_006](09_006.png)
![09_007](09_007.png)

중첩된 라우트 형태로 라우트 설정 예시

> App.js

```jsx
<Route path="/articles" element={<Articles />}>
  <Route path=":id" element={<Article />} />
</Route>
```

> Aritcles.js

```jsx
import { Link, Outlet } from "react-router-dom";
<Outlet />;
```

![09_008](09_008.png)

## 13.5.1 공통 레이아웃 컴포넌트

> Layout.js

```jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
```

> App.js

```jsx
<Route element={<Layout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/profiles/:username" element={<Profile />} />
</Route>
```

![09_009](09_009.png)

## 13.5.2 index props

Route 컴포넌트에는 index라는 porps가 있으며, 이 props는 path="/"와 동일한 의미

> App.js

```jsx
<Route index element={<Home />} />
```

# 13.6 리액트 라우터 부가기능

## useNavigate

> Layout.js

```jsx
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate("/atricles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
```

![09_010](09_010.png)

# 13.6.2 NavLink

> Articles.js

```jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
```

![09_011](09_011.png)

NavLink를 감싼 또 다른 컴포넌트를 만들어서 다음과 같이 리팩터링하여 사용하여 권장

```jsx
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
```

## 13.6.3 NotFound 페이지 만들기

> NotFound.js

```jsx
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      404
    </div>
  );
};

export default NotFound;
```

> App.js

```jsx
<Route path="*" element={<NotFound />} />
```

## 13.6.4 Navgate 컴포넌트

Navgate 컴포넌트는 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동하고 싶을 때 사용하는 컴포넌트

> Login.js

```jsx
const Login = () => {
  return <div>로그인 페이지</div>;
};

export default Login;
```

> MyPage.js

```jsx
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
```

![09_012](09_012.png)

# 13.7 정리

큰 규모의 프로젝트를 진행하다 보면 한 가지 문제가 발생함. 웹 브라우저에서 사용할 컴포넌트, 상태 관리를 하는 로직, 그 외 여러 기능을 구현하는 함수들이 점점 쌓이면서 최종 결과물인 자바스크립트 파일의 크기가 매우 커진다는 점

이 문제는 코드 스플리팅이라는 기술로 해결할 수 있음
