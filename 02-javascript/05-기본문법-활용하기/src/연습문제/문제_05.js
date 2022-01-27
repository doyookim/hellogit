// for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.

for (let i=0; i<4; i++) {

    //console.log(i);
    for (let j=0; j<i+1; j++){
        console.log(i,i+1,i+2,i+3);
        break;
       
    }
}

// 강사님 풀이

for (let i=0; i<4; i++) {
    
    // 한 줄에 출력할 문자열 변수
    let str = "";

    for (let j=0; j<4; j++) {
        str += i+j;

        if (j+1 < 4) {
            str += " ";
        }
    }

    console.log(str);
}