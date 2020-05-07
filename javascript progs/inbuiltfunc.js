//odd values
var Odd=[1,2,3,5,8].filter(x=>x%2!=0);
console.log(Odd)

//captialstring
var string=["dbabdj","kjdjhfd"].map(x=>x.toUpperCase());
console.log(string)

//sum of array
console.log(sum=[1,2,3,4,5].reduce((a,b)=>(a+b)));

//prime nos
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//palindrome
console.log(['mum', 'dad', 'brother'].filter(x=>(x.split('').reverse().join('') === x)));
