var check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

for (let i=0; i<=check_list.length-1 ; i++) {
  if (check_list[i] === true) {
    check_list[i] = false;
  } else {
    check_list[i] = true;
  }
}

console.log("after --> " + check_list);


// 강사님 풀이 

// true는 false로, false는 true로 저장하기
// boolean 값을 반전하기 위해서는 NOT 연산자 "!"를 사용해야 한다.
// ex) !true --> false, !false --> true
var check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

for (let i=0; i<=check_list.length-1 ; i++) {
      check_list[i] = !check_list[i];
}


console.log("after --> " + check_list);