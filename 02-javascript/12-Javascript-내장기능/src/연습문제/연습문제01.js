// ## 문제1.

// 자신의 이메일 주소를 `email` 이라는 변수에 저장하고 `@`를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오.


// ### 출력결과

// 이메일이 leekh4232@gmail.com 인 경우

// ```
// leekh4232
// gmail.com
// ```

const email = "leekh4232@gmail.com";
const arr = email.split("@");
for (let i =0; i< arr.length; i++) {
    console.log(arr[i]);
}




/// 강사님 풀이

email = "leekh4232@gmail.com";

p = email.indexOf("@");
id = email.substring(0,p);
domain = email.substring(p+1);

console.log(id);
console.log(domain);