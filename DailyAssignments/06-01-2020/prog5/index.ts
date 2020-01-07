var arr=[["make","ford"],["model","mustang"],["year",1964]];
var jsn={};

for (var i=0;i<arr.length;i++){
             jsn[arr[i][0]]=arr[i][1]
         }

console.log(jsn)