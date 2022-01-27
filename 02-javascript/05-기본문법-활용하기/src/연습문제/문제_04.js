// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.

let num = 0;

for (i = 6; i > 0; i-- ){
   // console.log(i);
    for(j = 6; j > 0; j--){
       // console.log(j);
        if( i + j == 6 ){
            console.log("[%d, %d]", i, j);
            num++;
        }
    }
}

console.log("경우의 수는 %d개 입니다.", num);



// 강사님 풀이

// 갯수를 셀 경우 0으로 초기화 된 변수가 필요하다.

let count = 0;

// 첫 번째 주사위의 반복
for (let i=1; i<6; i++) {
    // 두 번째 주사위의 반복
    for (let j=1; j<=6; j++) {
        if (i + j == 6) {
            console.log("[%d, %d]", i, j);

            // 조건이 충족될때 마다 1씩 증가 -->
            count++;
        }
        
    }
}

console.log("경우의 수는 %d개 입니다.", count);