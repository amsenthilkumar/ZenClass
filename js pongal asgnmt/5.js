// //five-303
 var num=125;
 var sumSqr=0;
 while(num>0){
 let digit=num%10;

 sumSqr+=(digit**2);

 num=Math.floor(num/10);
 }
 console.log(sumSqr);