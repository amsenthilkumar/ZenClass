function oddarray(a) {
  var arr = []
  for (var i = 1; i < a; i++) {
    if (i%2 !== 0) {
      arr.push(i);
    }
}
console.log(arr);
}
var a = 10;
oddarray(a);