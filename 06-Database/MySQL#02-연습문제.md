select studno, name, weight from student where weight between 50 and 70;

select studno, name, weight from student where wheight >= 50 and weight <= 70;

select name, grade, deptno from student where deptno in (102, 201);

select name, grade, deptno from student where deptno=102 or deptno=201;

select name, grade, deptno from student where name like'김%';

select name, position, comm from professor where comm is null;

select name, position, comm from professor where comm is not null;

select name, grade, deptno from student where deptno=102 and (grade=4 or grade=1);

연습문제 1)
select name, sal from professor where sal between 300 and 400;

연습문제 2)
select profno, name, position, deptno from professor where position in ('조교수', '전임강사');

연습문제 3)
select deptno, dname, loc from department where dname like '%공학%';

연습문제 4)
select name, studno, grade, profno from student where profno is not null;

연습문제 5)
select name, grade, deptno from student where deptno=102 and (grade=4 or grade=1);

select name, grade, tel from student order by name;

select studno, name, grade, deptno, userid from student order by deptno asc, grade desc;

select name, position, sal from professor order by sal desc limit 0, 3;

연습문제1)
select name, grade, idnum from student order by grade desc;

연습문제2)
select name, grade, deptno from student where deptno=101 order by birthdate asc;

select name, grade, deptno, birthdate from student where deptno=101 order by birthdate asc;

연습문제 3)
select name, studno, grade from student order by grade asc, name asc;

연습문제 4)
select name, position, sal from professor order by sal desc limit 4,1;

select name, left(name, 1) from student;

select name, right(name,1) from student;

select name, substring(name, 2, 1) from student;

select name, replace(name, '이', 'lee') from student;

select concat(name, grade) from student;

select concat(name, ' ', grade, '학년')from student;

select trim(name) from student;

select ltrim(name) from student;

select rtrim(name) from student;

select md5(name) from student;

select char_length(name) from student;

select instr(name, '이'), name from student;

select upper(userid) from professor;

select lower(userid) from professor;

연습문제1)
select name, replace(name, substring(name, 2, 1), '\*') from student;

select name, concat(left(name,1), '\*', right(name, 1)) from student;

연습문제2)

select name, replace(idnum, substring(idnum, 7, 14), '**\*\*\***') from student;

select name, concat(left(idnum, 6), '**\*\*\***') from student;

시스템의 현재 시각 조회: select now();

select date_add(now(), INTERVAL 100 DAY);

select date_add(now(), INTERVAL -7 DAY);

select date_format(now(), '%Y%m%d%H%i%s');

select COUNT(studno) from student where grade=3;

select comm from professor where deptno=101;

select count(comm) from professor where deptno=101;

select count(\*) from professor where deptno=101;

select max(sal) from professor;

select min(sal) from professor;

select sum(sal) from professor;

select avg(height) from student;

select avg(weight), sum(weight) from student where deptno=101;

연습문제1)
select name, birthdate from student where birthdate >= date_add(now(), INTERVAL -42 YEAR);

select name, birthdate from student where birthdate >= date_add(now(), INTERVAL -42 YEAR) order by birthdate asc;

select name, birthdate from student where date_format(birthdate, '%Y%m%d%') >= date_format(date_add(now(), INTERVAL -42 YEAR),'%Y%m%d%') order by birthdate asc;

select name, birtdate from student where date_format(birtdate, '%Y') > 1980;

select max(height), min(height) from student where deptno=101;

select deptno, name from professor order by deptno;(에러)

select deptno, count(name) from professor group by deptno;

select deptno, grade, count(\*), avg(weight) from student group by deptno, grade;

select grade, count(\*), avg(height) avg_height, avg(weight) avg_weight from student group by grade order by avg_height desc;

select grade, count(_), avg(height) avg_height, avg(weight) avg_weight from student group by grade having count(_) > 4 order by avg_height desc;
