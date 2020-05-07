var arr1 =[["make","ford"],["model","mustang"],["year",1964]];

function convertListToObject(arr1){
    var a= {};
    for (i=0;i<arr1.length;i++){
        a[arr1[i][0]]=arr1[i][1]
    }
    console.log(a)
}

convertListToObject(arr1)