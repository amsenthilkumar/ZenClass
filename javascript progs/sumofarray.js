function sumofarray(a) {
  var sum = 0;
  len = a.length;
  for (var i = 0; i < len; i++) {
    sum = sum + a[i];
  }
  console.log(sum);
}
var b = [1,2,3,4];
sumofarray(b);