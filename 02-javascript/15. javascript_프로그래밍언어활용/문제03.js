// 【문항3】 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를 들어 18의 자릿수 
// 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다. 자연수 x를 입력받아 x가 하샤드 
// 수인지 아닌지 검사하는 함수, solution을 완성하여 아래의 테스트 코드에 대한 출력 결과를 만드시오. 
// (30분/20점)


function solution(x) {
    var sum = 0;
    var arr = String(x).split("");

    for(let i=0; i<arr.length; i++) {
        sum += Number(arr[i])
        //console.log(sum);
        
    }

    if((x % sum == 0) == true ){
        console.log(x+"는 모든 자릿수의 합이"+sum+"입니다."+x+"는"+sum+"로 나누어 떨어지므로"+x+"는 하샤드 수입니다.");
    } else {
        console.log(x+"는 모든 자릿수의 합이"+sum+"입니다."+x+"는"+sum+"로 나누어 떨어지지 않으므로 "+x+"는 하샤드 수가 아닙니다.");
    }
    
    return (x % sum == 0) ? true : false;
   
 
  
    
}


console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));



