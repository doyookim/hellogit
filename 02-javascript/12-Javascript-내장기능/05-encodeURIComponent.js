/**
 * encodeURIComponent(string)
 * 
 * 알파벳과 숫자 및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬 수 있는 문자열로 인코딩한다.
 * -> URL에 사용해도 문제가 없는 특수문자를 제외하고 모든 글자를 변환
 */


 const set1 = ';,/?:@&=+$#'; // 예약문자
 const set2 = "-_.!~*'()";   // 비예약문자
 const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
 const set4 = "자바스크립트";
 
 
 // 특수문자(예약문자 및 비예약문자)를 변환하지 못하기 때문에 UTF-8 환경에서는 사용이 불가
 const enc1 = encodeURIComponent(set1);   // ;,/?:@&=+$#
 const enc2 = encodeURIComponent(set2);   // -_.!~*'()
 const enc3 = encodeURIComponent(set3);   // ABC abc 123
 const enc4 = encodeURIComponent(set4);
 
 
 console.group("encodeURI");
 console.log(enc1);
 console.log(enc2);
 console.log(enc3);
 console.log(enc4);
 console.groupEnd();
 
 // 인코딩 된 문자열을 원래의 문자열로 역변환 (디코팅)
 console.group("decodeURI");
 console.log(decodeURIComponent(enc1));
 console.log(decodeURIComponent(enc2));
 console.log(decodeURIComponent(enc3));
 console.log(decodeURIComponent(enc4));
 console.groupEnd();
 