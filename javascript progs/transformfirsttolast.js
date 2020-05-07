var array = ["GUVI","I","am","geek"];
function transformFirstAndLast(array){
n=array.length;
var arr1=[]
arr1[array[0]]=array[n-1];
console.log(arr1)
}
transformFirstAndLast(array)