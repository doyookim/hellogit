# SQL활용\_김도유

> 2022-06-21

## 문항1. 다음 요구사항을 해결하기 위한 문을 작성하고 수행 결과에 대한 스크린샷을 제시하시오.

### 1) 학생 테이블에서 전체 학생을 소속 학과별로 나누고 같은 학과 학생은 다시 학년별로 그룹핑하여 학과와 학년별로 인원수, 평균 몸무게를 출력하시오.

### 답: select deptno, grade, count(\*), avg(weight) from student group by deptno, grade order by deptno asc;

![01](sql_활용_01.png)

### 2) 학생 수가 4명 초과인 학년에 대해서 학년, 학생 수, 평균 키, 평균 몸무게를 출력하시오.

### 답: select grade, count(_), avg(height), avg(weight) from student group by grade having count(_) > 4;

![02](sql_활용_02.png)

### 3) 학과별로 학과 번호, 교수들의 평균 급여, 최소 급여, 최대 급여를 출력하여라.

### 답: select deptno, avg(sal), min(sal), max(sal) from professor group by deptno;

![03](sql_활용_03.png)

### 4) 학과별로 학과번호, 평균 몸무게, 학생수를 출력하되 평균 몸무게의 내림차순으로 정렬하시오.

### 답: select deptno, avg(weight), count(\*) from student group by deptno order by avg(weight) desc;

![04](sql_활용_04.png)

### 5) 학과별 교수 수가 2명 이하인 학과의 학과 번호, 교수 수를 학과번호 순으로 정렬하여 출력 하세요.

### 답: select deptno, count(_) from professor group by deptno having count(_) <= 2 order by deptno asc;

![05](sql_활용_05.png)

## 문항2. 다음의 요구사항을 해결하기 위한 SQL문을 작성하고 수행 결과에 대한 스크린샷을 제시하시오.

### 1) 아이디가 'jun123'인 학생과 같은 학년인 학생의 학번, 이름, 학년을 조회하시오.

### 답: select studno, name, grade from student where grade=(select grade from student where userid = 'jun123');

![02-01](sql_활용_02_01.png)

### 2) 101번 학과 학생들의 평균 몸무게보다 몸무게가 적은 학생의 이름, 학과번호, 몸무게를 조회하시오.

### 답: select name, deptno, weight from student where weight < (select avg(weight) from student where deptno = 101);

![02-02](sql_활용_02_02.png)

### 3) '이광훈 학생'과 같은 학과의 학생들에 대한 평균 몸무게보다 몸무게가 적게 나가는 학생들의 이름, 몸무게, 소속학과 이름, 담당교수 이름을 조회하시오. (담당교슈가 없는 학생은 출력되지 않습니다.).

### 답: select s.name, s.weight, d.dname, p.name from student s inner join department d on s.deptno=d.deptno inner join professor p on s.profno=p.profno where s.weight < ( select avg(weight) from student where deptno = (select deptno from student where name ='이광훈'));

![02-03](sql_활용_02_03.png)

### 4) 20101번 학생과 같은 학년이고, 20101번 학생의 키보다 큰 키를 갖는 학생의 이름, 학년, 키를 조회하시오.

### 답: select name, grade, height from student where grade = (select grade from student where studno=20101) and height > (select height from student where studno=20101);

![02-04](sql_활용_02_04.png)

### 5) 학과 이름에 '공학'이라는 단어를 포함하고 있는 학과에 재학중인 학생의 학번, 학과 이름, 학년, 학생이름을 조회하시오.

### 답: select studno, dname, grade, name from student s inner join department d on s.deptno=d.deptno where s.deptno in (select deptno from department where dname like '%공학%');

![02-05](sql_활용_02_05.png)
