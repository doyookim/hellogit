var price = [38000, 20000, 17900, 17900]; // 단가 정보
var qty = [ 6, 4, 3, 5]; // 수량 정보
// 총 합계 금액
var money = 0;

for (let i=0; i<price.length; i++) {
    for (let j=0; j<qty.length; j++){
        if (i == j ) {
            money+= price[i]*qty[j];
        }
    }
}

//228000, 80000, 53700, 89500 = 451200
console.log("전체 결재 금액: " + money +"원");

//강사님 풀이

// 단가 정보
var price = [38000, 20000, 17900, 17900]; 
// 수량 정보
var qty = [ 6, 4, 3, 5]; 
// 총 합계 금액
let money = 0;

for (let i=0; i<price.length; i++) {
    // 단가 * 수량의 합을 구한다.
    money += price[i] * qty[i];
}
console.log("전체 결재 금액: " + money +"원");
