var price = [38000, 20000, 17900, 17900];
var qty = [ 6, 4, 3, 5];
var money = [];

var data =[];

console.log(price);

for (let i=0; i<price.length; i++) {
    for (let j=0; j<qty.length; j++){
        if (i == j ) {
                money = [price[i]*qty[j]];
               
                }
        data = [money];
        console.log(data);
    }
    
}

