for (let i=1; i<8; i++) {
    let str="";
    for (let j=1; j<=i; j++) {
        
        str += j;
    }
    console.log(str);
}


// 강사님 풀이

for (let i=0; i<7; i++) {
    let str = "";

    for (let j=0; j<i+1; j++) {
        str += j+1;
    }
    console.log(str);
}