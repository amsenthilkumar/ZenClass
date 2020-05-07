//three-602
 var org=[1,6,4,0,3];
 var arr=[1,6,4,0,3];
 var n=arr.length;

 for(let i=1;i<arr.length;i++){
   if(arr[i]<arr[i-1]){
   let temp=arr[i];
     arr[i]=arr[i-1];
     arr[i-1]=temp;

   }
 }
 var larInd=org.indexOf(arr[n-1])
 for(let i=1;i<arr.length;i++){
   if(arr[i]>arr[i-1]){
     let temp=arr[i];
     arr[i]=arr[i-1];
     arr[i-1]=temp;

   }
 }
 var smalInd=org.indexOf(arr[n-1])

 console.log(larInd-smalInd);