# Nodejs 김도유

> 2022-07-17

### 문제1) 교수의 1 데이터를 생성하기 위한 API SQL Mapper, Service Layer, Controller 를 구현하고 작성한 의 소스코드를 제시하고 Insomnia로 테스트한 실행결과를 제출하시오.

### ProfessorMapper.xml

```xml

<!--
@filename    : ProfessorMapper.xml
@author      : 김도유 (howdoyoodoit@gmail.com)
@description : 교수 SQL문
-->


  <insert id="insertItem">
        INSERT INTO professor (name, userid, position, sal, hiredate, comm, deptno) VALUES ( #{name}, #{userid}, #{position}, #{sal}, #{hiredate}, #{comm}, #{deptno})
    </insert>

        <!-- 단일행 조회를 위한 기능 정의 -->
    <select id="selectItem">
        SELECT profno, name, userid, position, sal, hiredate, comm, deptno FROM professor WHERE profno=#{profno}
    </select>
```

### ProfessorService.js

```js
/**
 * @FileName : ProfessorService.js
 * @Description : 교수 service layer
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */


/** 데이터를 추가하고 추가된 결과를 조회하여 리턴한다. */
  async addItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement(
        "ProfessorMapper",
        "insertItem",
        params
      );
      let [{ insertId, affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }


```

### ProfessorController.js

```js
/**
 * @FileName : ProfessorController.js
 * @Description : 교수 controller
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */

import professorService from "../services/ProfessorService.js";

const ProfessorController = () => {
  const url = "/professor";
  const router = express.Router();

(...생략...)

/** 데이터 추가 --> Create(INSERT) */
  router.post(url, async (req, res, next) => {
    // 파라미터 받기
    const name = req.post("name");
    const userid = req.post("userid");
    const position = req.post("position");
    const sal = req.post("sal");
    const hiredate = req.post("hiredate");
    const comm = req.post("comm");
    const deptno = req.post("deptno");

    // 유효성 검사
    try {
      regexHelper.value(name, "이름이 없습니다.");
      regexHelper.maxLength(name, 20, "이름은 최대 20자까지 입력 가능합니다.");
    } catch (err) {
      return next(err);
    }

    // 데이터 저장
    let json = null;

    try {
      json = await professorService.addItem({
        name: name,
        userid: userid,
        position: position,
        sal: sal,
        hiredate: hiredate,
        comm: comm,
        deptno: deptno,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ item: json });
  });

```

> 결과출력
> ![insomnia](01.png) > ![terminal](02.png)

<hr/>

### 문항2) 교수의 데이터를 수정하기 위한 API SQL Mapper, Service Layer, Controller 를 구현하고 작성한 의 소스코드를 제시하고 Insomnia로 테스트한 실행결과를 제출하시오.

### ProfessorMapper.xml

```xml

<!--
@filename    : ProfessorMapper.xml
@author      : 김도유 (howdoyoodoit@gmail.com)
@description : 교수 SQL문
-->

  <!-- 데이터 갱신을 위한 기능 정의 -->
    <update id="updateItem">
        UPDATE professor SET name=#{name}, userid=#{userid}, position=#{position}, sal=#{sal}, hiredate=#{hiredate}, comm=#{comm}, deptno=#{deptno}
        WHERE profno=#{profno}
    </update>

```

### ProfessorService.js

```js
/**
 * @FileName : ProfessorService.js
 * @Description : 교수 service layer
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */
/** 데이터를 수정하고 수정된 결과를 조회하여 리턴한다. */
  async editItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement(
        "ProfessorMapper",
        "updateItem",
        params
      );
      let [{ affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      sql = mybatisMapper.getStatement("ProfessorMapper", "selectItem", {
        profno: params.profno,
      });
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("저장된 데이터를 조회할 수 없습니다.");
      }

      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return data;
  }

```

### ProfessorController.js

```js
/**
 * @FileName : ProfessorController.js
 * @Description : 교수 controller
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */

/** 데이터 수정 --> Update(UPDATE) */
router.put(`${url}/:profno`, async (req, res, next) => {
  // 파라미터 받기
  const profno = req.get("profno");
  const name = req.put("name");
  const userid = req.put("userid");
  const position = req.put("position");
  const sal = req.put("sal");
  const hiredate = req.put("hiredate");
  const comm = req.put("comm");
  const deptno = req.put("deptno");

  // 유효성 검사
  try {
    regexHelper.value(profno, "교수번호가 없습니다.");
    regexHelper.num(profno, "교수번호가 잘못되었습니다.");
    regexHelper.value(name, "이름이 없습니다.");
    regexHelper.maxLength(name, 20, "이름은 최대 20자까지 입력 가능합니다.");
    regexHelper.value(userid, "아이디가 없습니다.");
    regexHelper.maxLength(
      userid,
      20,
      "아이디는 최대 20자까지 입력 가능합니다."
    );
    regexHelper.value(sal, "급여가 없습니다.");
    regexHelper.num(sal, "급여가 잘못되었습니다.");
    regexHelper.value(hiredate, "입사일이 없습니다.");
    regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
    regexHelper.num(comm, "수당이 잘못되었습니다.");
    regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
  } catch (err) {
    return next(err);
  }

  // 데이터 저장
  let json = null;

  try {
    json = await professorService.editItem({
      profno: profno,
      name: name,
      userid: userid,
      position: position,
      sal: sal,
      hiredate: hiredate,
      comm: comm,
      deptno: deptno,
    });
  } catch (err) {
    return next(err);
  }

  res.sendResult({ item: json });
});
```

> 결과출력
> ![insomnia](03.png) > ![terminal](04.png)

<hr/>

### 문항3) 교수의 데이터를 삭제하기 위한 API를 구현하고 작성한 SQL Mapper, Service Layer, Controller의 소스코드를 제시하고 Insomnia로 테스트한 실행결과를 제출하시오.

### ProfessorMapper.xml

```xml

<!--
@filename    : ProfessorMapper.xml
@author      : 김도유 (howdoyoodoit@gmail.com)
@description : 교수 SQL문
-->
    <!-- 특정 학과에 속한 교수 일괄 삭제 -->
    <delete id="deleteItem">
        DELETE FROM professor WHERE profno=#{profno};
    </delete>

```

### ProfessorService.js

```js
/**
 * @FileName : ProfessorService.js
 * @Description : 교수 service layer
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */
/** 데이터를 삭제한다. */
  async deleteItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement(
        "ProfessorMapper",
        "deleteItem",
        params
      );
      let [{ affectedRows }] = await dbcon.query(sql);

      sql = mybatisMapper.getStatement("ProfessorMapper", "deleteItem", params);
      [{ affectedRows }] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException("삭제된 데이터가 없습니다.");
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
  }


```

### ProfessorController.js

```js
/**
 * @FileName : ProfessorController.js
 * @Description : 교수 controller
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */
/** 데이터 삭제 --> Delete(DELETE) */
router.delete(`${url}/:profno`, async (req, res, next) => {
  // 파라미터 받기
  const profno = req.get("profno");
  // 유효성 검사
  try {
    regexHelper.value(profno, "교수번호가 없습니다.");
    regexHelper.num(profno, "교수번호가 잘못되었습니다.");
  } catch (err) {
    return next(err);
  }

  try {
    await professorService.deleteItem({
      profno: profno,
    });
  } catch (err) {
    return next(err);
  }

  res.sendResult();
});
```

> 결과출력
> ![insomnia](05.png) > ![terminal](06.png) > ![db01](07.png) > ![db02](08.png)

#### DB상에서는 삭제가 되지만, insomnia에서 500에러가 뜨며 삭제된 데이터가 없다고 뜹니다. 이 부분은 고치지 못했습니다.

<hr/>

### 문항4) 한명의 교수의 데이터를 조회하기 위한 API를 구현하고 작성한 SQL Mapper, Service Layer, Controller 의 소스코드를 제시하고 Insomnia로 테스트한 실행결과를 제출하시오.

### ProfessorMapper.xml

```xml

<!--
@filename    : ProfessorMapper.xml
@author      : 김도유 (howdoyoodoit@gmail.com)
@description : 교수 SQL문
-->

    <!-- 단일행 조회를 위한 기능 정의 -->
    <select id="selectItem">
        SELECT profno, name, userid, position, sal, hiredate, comm, deptno FROM professor WHERE profno=#{profno}
    </select>

```

### ProfessorService.js

```js
/**
 * @FileName : ProfessorService.js
 * @Description : 교수 service layer
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */

  /** 단일 데이터를 조회한다 */
  async getItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement(
        "ProfessorMapper",
        "selectItem",
        params
      );
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }

      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return data;
  }
```

### ProfessorController.js

```js
/**
 * @FileName : ProfessorController.js
 * @Description : 교수 controller
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */

/** 단일행 조회 --> Read(SELECT) */
router.get(`${url}/:profno`, async (req, res, next) => {
  // 파라미터 받기
  const profno = req.get("profno");

  // 파라미터 유효성검사
  try {
    regexHelper.value(profno, "교수번호가 없습니다.");
    regexHelper.num(profno, "교수번호가 잘못되었습니다.");
  } catch (err) {
    return next(err);
  }

  // 데이터 조회
  let json = null;

  try {
    json = await professorService.getItem({
      profno: profno,
    });
  } catch (err) {
    return next(err);
  }

  res.sendResult({ item: json });
});
```

> 결과출력
> ![insomnia](09.png) > ![terminal](10.png)

<hr/>

### 문항5) 교수목록을 조회하기 위한 API구현하고 작성한 SQL Mapper, Service Layer, Controller의 소스코드를 제시하고 를 Insomnia로 테스트한 실행결과를 제출하시오.

### ProfessorMapper.xml

```xml

<!--
@filename    : ProfessorMapper.xml
@author      : 김도유 (howdoyoodoit@gmail.com)
@description : 교수 SQL문
-->
    <!-- 다중행 조회를 위한 기능 정의 -->
    <select id="selectList">
        SELECT profno, name, userid, position, sal, hiredate, comm, deptno FROM professor

        <where>

            <if test="profno != null and profno != ''">
                profno LIKE concat('%', #{profno}, '%')
            </if>

            <if test="name != null and name != ''">
                name LIKE concat('%', #{name}, '%')
            </if>

            <if test="userid != null and userid != ''">
                OR userid LIKE concat('%', #{userid}, '%')
            </if>

            <if test="position != null and position != ''">
                OR position LIKE concat('%', #{position}, '%')
            </if>

            <if test="deptno != null and deptno != ''">
                OR deptno LIKE concat('%', #{deptno}, '%')
            </if>
        </where>

        ORDER BY profno DESC

        <!-- 페이지 구현을 위한 LIMIT절 추가 -->
        <if test="listCount > 0">
            LIMIT ${offset}, ${listCount}
        </if>
    </select>
```

### ProfessorService.js

```js
/**
 * @FileName : ProfessorService.js
 * @Description : 교수 service layer
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */
  /** 목록 데이터를 조회한다 */
  async getList(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement(
        "ProfessorMapper",
        "selectList",
        params
      );
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }

      data = result;
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }

    return data;
  }


```

### ProfessorController.js

```js
/**
 * @FileName : ProfessorController.js
 * @Description : 교수 controller
 * @Author : 김도유 (howdoyoodoit@gmail.com)
 */
/** 전체 목록 조회 --> Read(SELECT) */
router.get(url, async (req, res, next) => {
  // 검색어 파라미터
  const query = req.get("query");
  // 페이지 번호 파라미터 (기본값은 1)
  const page = req.get("page", 1);
  // 한 페이지에 보여질 목록 수 받기 (기본값은 10)
  const rows = req.get("rows", 10);

  const params = {};
  if (query) {
    params.name = query;
    params.userid = query;
    params.position = query;
    params.sal = query;
    params.hiredate = query;
    params.comm = query;
    params.deptno = query;
  }

  // 데이터 조회
  let json = null;
  let pageInfo = null;

  try {
    // 전체 데이터 수 얻기
    const totalCount = await professorService.getCount(params);
    pageInfo = pagenation(totalCount, page, rows);

    params.offset = pageInfo.offset;
    params.listCount = pageInfo.listCount;
    json = await professorService.getList(params);
  } catch (err) {
    return next(err);
  }

  res.sendResult({ pagenation: pageInfo, item: json });
});
```

> 결과출력
> ![insomnia](11.png) > ![terminal](12.png)
