var price = [38000, 20000, 17900, 17900];
var qty = [ 6, 4, 3, 5];
var money = 0;

for (let i=0; i<price.length; i++) {
    for (let j=0; j<qty.length; j++){
        if (i == j ) {
            money+= price[i]*qty[j];
        // console.log(money);
        }

    }
}

//228000, 80000, 53700, 89500 = 451200
console.log("전체 결재 금액: " + money +"원");