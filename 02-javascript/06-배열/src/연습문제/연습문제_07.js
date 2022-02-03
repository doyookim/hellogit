var price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격 --> " + price);

let min = price[0];

for (var i=0; i<price.length -1; i++) {
    for (var j=i+1; j<price.length; j++) {
        if(price[i] > price[j]) {
            var tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }    
}

console.log("낮은가격순 --> " + price);


// 낮은 가격순으로 정렬 수행
// (공식) 부모 반목문 -> i가 0부터 길이 -1보다 작은 동안
//        자식 반복문 -> j가 i+1부터 길이보다 작은 동안
//        i번째와 j번째의 크기를 비교하여 맞교환 처리 수행
