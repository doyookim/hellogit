# SQL응용 - 김도유

> 2022-06-28

## 아래의 영화 관리 시스템의 사용자 요구사항을 참조하여 다음 물음에 답하시오 번 . (1 ~ 5)

## (주) 영화광은 국내에서 상영, 유통되는 영화 컨텐츠에 대한 종합적인 정보를 관리하기 위해 데이터베이스 시스템을 구축하고자 한다. 영화에 대하여 영화코드번호, 제목, 제작년도, 제작국가, 상영시간, 개봉일자, 제작사, 배급사 정보를 저장한다. 감독에 대해서는 등록번호, 이름, 성별, 생년월일, 출생지, 학력사항을 저장한다. 배우에 대해서는 배우번호, 생년월일, 이름, 성별, 출생지, 키, 몸무게, 혈액형 정보를 저장한다. 한 영화에 여러 명의 감독이 참여할 수 있으며 감독 또한 여러 영화에 참여할 수 있다. 한 영화에 여러 명의 배우가 출연할 수 있으며 출연 시 배역이 정해진다. 한 배우 또한 여러 영화에 출연할 수 있다.

## 문항1 위 영화 관리 시스템의 ERD를 작성하고 그 결과 이미지를 제출하시오. 테이블 이름과 컬럼 이름은 직접 영문으로 정의해야 합니다.

![erd](erd13.png)

## 문항2 문제 1의 ERD에 대한 물리 저장소를 생성하기 위한 DDL을 작성하시오.

-- MySQL Workbench Synchronization
-- Generated: 2022-06-28 18:14
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: doyoo

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `movie_info` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `movie_info`.`movie` (
`movieCd` INT(11) NOT NULL COMMENT '영화코드번호',
`movieNm` VARCHAR(255) NOT NULL COMMENT '제목',
`prdtYear` INT(4) NOT NULL COMMENT '제작년도',
`nationAlt` VARCHAR(255) NOT NULL COMMENT '제작국가',
`showTm` INT(11) NOT NULL COMMENT '상영시간',
`openDt` DATE NOT NULL COMMENT '개봉일자',
`producer` VARCHAR(255) NOT NULL COMMENT '제작사',
`distributor` VARCHAR(255) NOT NULL COMMENT '배급사',
PRIMARY KEY (`movieCd`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '영화정보테이블';

CREATE TABLE IF NOT EXISTS `movie_info`.`directors` (
`directorsCd` INT(11) NOT NULL COMMENT '등록번호',
`directorsNm` VARCHAR(255) NOT NULL COMMENT '이름',
`gender` ENUM('M', 'F') NOT NULL COMMENT '성별(M=남자,F=여자)',
`birthday` DATE NOT NULL COMMENT '생년월일',
`addr` VARCHAR(255) NULL DEFAULT NULL COMMENT '출생지',
`edu` VARCHAR(255) NULL DEFAULT NULL COMMENT ' 학력사항',
PRIMARY KEY (`directorsCd`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '감독테이블';

CREATE TABLE IF NOT EXISTS `movie_info`.`actors` (
`actorsCd` INT(11) NOT NULL COMMENT '배우번호',
`birthday` DATE NOT NULL COMMENT '생년월일',
`actorsNm` VARCHAR(255) NOT NULL COMMENT '이름',
`gender` ENUM('M', 'F') NOT NULL COMMENT '성별(M=남자,F=여자)',
`addr` VARCHAR(255) NULL DEFAULT NULL COMMENT '출생지',
`height` INT(11) NOT NULL COMMENT ' 키',
`weight` INT(11) NOT NULL COMMENT '몸무게',
`bloodtype` ENUM('A', 'B', 'O', 'AB') NOT NULL COMMENT ' 혈액형',
PRIMARY KEY (`actorsCd`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '배우정보';

CREATE TABLE IF NOT EXISTS `movie_info`.`movie_has_directors` (
`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '일련번호',
`movieCd` INT(11) NOT NULL COMMENT '영화코드',
`directorsCd` INT(11) NOT NULL COMMENT '감독코드',
PRIMARY KEY (`id`, `movieCd`, `directorsCd`),
INDEX `fk_movie_has_directors_directors1_idx` (`directorsCd` ASC) VISIBLE,
INDEX `fk_movie_has_directors_movie_idx` (`movieCd` ASC) VISIBLE,
CONSTRAINT `fk_movie_has_directors_movie`
FOREIGN KEY (`movieCd`)
REFERENCES `movie_info`.`movie` (`movieCd`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `fk_movie_has_directors_directors1`
FOREIGN KEY (`directorsCd`)
REFERENCES `movie_info`.`directors` (`directorsCd`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '영화-감독 관계';

CREATE TABLE IF NOT EXISTS `movie_info`.`movie_has_actors` (
`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '일련번호',
`movieCd` INT(11) NOT NULL COMMENT '영화코드',
`actorsCd` INT(11) NOT NULL COMMENT '배우코드',
PRIMARY KEY (`id`, `movieCd`, `actorsCd`),
INDEX `fk_movie_has_actors_actors1_idx` (`actorsCd` ASC) VISIBLE,
INDEX `fk_movie_has_actors_movie1_idx` (`movieCd` ASC) VISIBLE,
CONSTRAINT `fk_movie_has_actors_movie1`
FOREIGN KEY (`movieCd`)
REFERENCES `movie_info`.`movie` (`movieCd`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `fk_movie_has_actors_actors1`
FOREIGN KEY (`actorsCd`)
REFERENCES `movie_info`.`actors` (`actorsCd`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '영화-배우 관계';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

## 문항3 문제 1의 ERD에 대한 테이블 명세서를 작성하시오. 작성 양식은 수업시간에 소개한 표 형식을 기본으로 하되 본인이 양식을 재구성 해도 좋습니다.

![01](des_tb/슬라이드0001.png)
![02](des_tb/슬라이드0002.png)
![03](des_tb/슬라이드0003.png)
![04](des_tb/슬라이드0004.png)
![05](des_tb/슬라이드0005.png)

## 문항4 문제 1의 스키마를 참조하여 다음 정보를 출력하기 위한 SQL문을 작성하시오. 조회에 필요한 데이터는 본인이 직접 가상의 데이터를 입력해야 합니다.

### 1) 2020년에 제작된 영화의 제목, 제작국가, 상영시간, 제작사를 출력하시오.

### 답안: select movieNm, nationAlt, showTm, producer from movie where prdtYear=2022;

![04-01](04_01.png)

### 2) 현재 날짜를 기준으로 최근 3년 안에 제작된 영화의 제목, 제작국가, 개봉일, 제작사, 배급사를 출력하시오.

### 답안: select movieNm, nationAlt, openDt, producer, distributor from movie where prdtYear between year(now())-3 and year(now());

![04_02](04_02.png)

### 3) 이름이 '명감독'인 감독이 촬영한 영화의 제목을 출력하시오.

### 답안: select m.movieNm from movie m inner join directors d inner join movie_has_directors md on m.movieCd = md.movieCd and d.directorsCd = md.directorsCd where d.directorsNm='명감독';

![04_03](04_03.png)

### 4) 감독이 직접 배우로 출현한 영화의 제목과, 제작국가, 상영시간을 출력하시오. (이름과 생년월일이 같으면 동일인으로 인정)

### 답안: select distinct m.movieNm, m.nationAlt, showTm from movie m inner join directors d inner join actors a inner join movie_has_directors md inner join movie_has_actors ma on m.movieCd = md.movieCd and d.directorsCd = md.directorsCd and a.actorsCd = ma.actorsCd where d.directorsNm = a.actorsNm and d.birthday = a.birthday;

![04_04](04_04.png)
