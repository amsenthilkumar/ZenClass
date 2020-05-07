var object={name:"ISRO",age:35,role:"scientist"};
var arr=[];
for(var i in object){
//arr.push([i,object[i]]);
arr.unshift([i,object[i]]);


}
//var arr1=arr.reverse();
var arr1=[];
for (var j in arr){
arr1.unshift(arr[j]);

}

console.log(arr1);