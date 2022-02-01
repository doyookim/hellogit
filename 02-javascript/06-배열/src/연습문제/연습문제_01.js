var check_list = [true, false, false, true, true];
console.log("before -->" + check_list);

for (let i=0; i<=check_list.length-1 ; i++) {
  if (check_list[i] === true) {
    check_list[i] = false;
  } else {
    check_list[i] = true;
  }
}

console.log("after --> " + check_list);

