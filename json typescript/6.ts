var array=[[["firstName","vasant"],["lastName","raja"],["age",24],["role","JSWizard"]],[["firstName","sri"],["lastName","devi"],["age",28],["role","coder"]],[["firstName","xyz"],["lastName","abc"],["age",18],["role","alpha"]]];

var arr=[];

for(var i=0;i<array.length;i++){
    var jsn={};
    for(var j=0;j<array[i].length;j++){

        jsn[array[i][j][0]]=array[i][j][1];
    }
    arr[i]=jsn;
}
console.log(arr)