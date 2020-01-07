var object={name:"rajinikant",age:33,hasPets:false};
var arr=[];
for (var i in object) {

    //arr.push(object[i]);
    arr[arr.length]=object[i];
    
}
console.log(arr);