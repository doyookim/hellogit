const numOfApples = 123;
let basket = numOfApples / 10 ;
if (basket >= 10)
{
    ++basket 
}
console.group("문제3");
console.log("바구니는 총 %d개가 필요합니다.",parseInt(basket));
console.groupEnd();



// 사과의 수

const numberOfApple = 123;

// 10으로 나눈 나머지를 소수점 값으로 환산
const extra = (numOfApples % 10) / 10;
console.log(extra);

// 첫번째 풀이
// let basketCount = (numOfApples / 10) > 0 ?- extra + 1 : (numOfApples / 10) - extra;
// console.log(basketCount);

// 두번째 풀이
let basketCount = (numOfApples / 10)  - extra;
basketCount += extra > 0? 1: 0;
console.log(basketCount);