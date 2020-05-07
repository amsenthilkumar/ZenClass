four-512
 var org=["kartik",23000,"rohan",81734,"varshini",12343];
 var arr=[];
 for(let i=0;i<org.length;i++){
   if(i%2!=0){
   arr.push(org[i])
   }
 }
 var sortedArr=arr.sort();
 for(let i=0;i<sortedArr.length;i++){
   console.log(org[org.indexOf(sortedArr[i])-1])
 }