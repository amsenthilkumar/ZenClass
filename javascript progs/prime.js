function isPrimeNumber(num) {
for(i=2;i<num;i++){
    if(num%i===0){
        return false
    }
    
}
return true
}


var arr1= [2,3,4,5,6]
size1= arr1.length

var arr2 = []; 
  
for(n=0; n<arr1.length; n++){
  if(isPrimeNumber(arr1[n])){
    arr2.push(arr1[n]);
  }
}

console.log(arr2);