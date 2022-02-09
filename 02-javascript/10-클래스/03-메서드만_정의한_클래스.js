class Clac {
    plus(x, y) {
        return x + y;
    }

    minus(x, y) {
        return x - y;
    }
}


const c = new Clac();
console.log(c.plus(1, 2));
console.log(c.minus(10, 5));