var time = [ 7, 5, 5, 5, 5, 10, 7];
var money = 0;



for (let i=0; i<4; i++){
    money += 4500 * time[i];   
} 

 for ( let i=4; i<7; i++){
     money += 5200 * time[i];
 }

 console.log("1주일간의 전체 급여: " + money + "원");


 // 강사님 풀이

/** 풀이방법(1) */
var time = [ 7, 5, 5, 5, 5, 10, 7];
var money = 0;

 for (let i=0; i<time.length; i++) {
     if (i < 4) {
         money += time[i] * 4500;
     } else {
         money += time[i] * 5200;
     }
 }

 console.log("1주일간의 전체 급여: " + money + "원");

 /** 풀이방법(2) */
var time = [ 7, 5, 5, 5, 5, 10, 7];
var money = 0;

 let x = 0;
 if (i < 4){
     x = 4500;
 } else {
    x = 5200;
 }

 money += time[i] * x;
 console.log("1주일간의 전체 급여: " + money + "원");

 /** 풀이방법(3) */
 var time = [ 7, 5, 5, 5, 5, 10, 7];
 var money = 0;
let x = (i < 4) ? 4500 : 5200;
money += time[i] * x;
console.log("1주일간의 전체 급여: " + money + "원");

/** 풀이뱅법(4) */


var time = [ 7, 5, 5, 5, 5, 10, 7];
var money = 0;
money += time[i] * ((i < 4) ? 4500 : 5200);  
console.log("1주일간의 전체 급여: " + money + "원");