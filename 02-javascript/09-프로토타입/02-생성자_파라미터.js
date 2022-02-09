/** 파라미터를 멤버변수에 복사하는 생성자 */
const User2 =  function(id, eamil){
    this._id = id;
    this._email = eamil;
};

const foo = new User2("hello", "hello@javascript.com");
const bar = new User2("world", "world@javascript.com");

console.log(foo);
console.log(bar);
