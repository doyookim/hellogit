for (let y=1; y <= 10; y++) {
    const z = 2 ** y;
    console.log("이진수 %d개는 %d개의 정보를 표시가능", y, z);
}




// 강사님 풀이

let bit = 1;

for ( let i = 1; i <= 10; i++){
    bit *=2;
    console.log('이진수 %d개는 %d개의 정보를 표시가능', i, bit);
}