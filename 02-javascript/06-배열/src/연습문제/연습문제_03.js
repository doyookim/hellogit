var time = [ 7, 5, 5, 5, 5, 10, 7];
var money = 0;



for (let i=0; i<4; i++){
    money += 4500 * time[i];   
} 

 for ( let i=4; i<7; i++){
     money += 5200 * time[i];
 }

 console.log("1주일간의 전체 급여: " + money + "원");

