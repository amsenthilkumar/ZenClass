// var array = ["GUVI","I","am","geek"];
// function transformFirstAndLast(array){
// n=array.length;
// var arr1=[]
// arr1[array[0]]=array[n-1];
// console.log(arr1)
// }
// transformFirstAndLast(array)


////////////////////////////////////////////////////////////////////////////

// var arr1 =[["make","ford"],["model","mustang"],["year",1964]];
// var arr2={}
// for (i=0;i<arr1.length;i++){
// for (j=0;j<arr1[i].length;j++){
//         console.log(arr1[j])                                //arr2[arr1[j]]=arr1[j];
    
    
// }
    
// }
// console.log(arr2);

/////////////////////////////////////////////////////////////////////////////

// var arr1={name:"ISRO",age:35,role:"scientist"};
// function convertListToObject(arr1) {
// console.log(Object.entries(arr1));
// }
// convertListToObject(arr1);

// var arr1 =[["make","ford"],["model","mustang"],["year",1964]];

// function convertListToObject(arr1){
//     var a= {};
//     for (i=0;i<arr1.length;i++){
//         a[arr1[i][0]]=arr1[i][1]
//     }
//     console.log(a)
// }

// convertListToObject(arr1);

////////////////////////////////////////////////////////////////////////////////

// var arr1 =[[["firstName","vasant"],["lastName","raja"],["age",24]],
// [["firstName","sri"],["lastName","devi"],["age",28]]];

// function transformEmployeeData(arr1){
//     var newList= [];
    
//     for (i=0;i<arr1.length;i++){
//         var workerData={};
//         for (j=0;j<arr1[i].length;j++){
//             workerData[arr1[i][j][0]]=arr1[i][j][1];
                
//         }
//         newList.push(workerData);    
//     }
    
//     console.log(newList)
// }   

//  transformEmployeeData(arr1);


//////////////////////////////////////////////////////////////////////////////////

// var obj1 = {
//     name: "Kristine",
//     age: 13,
//     favorites: {
//       food: "Pizza",
//       vacation: "Disneyland"
//     }
//   };
  
//   var obj2 = {
//     name: "Kristine",
//     age: 13,
//     favorites: {
//       food: "Pizza",
//       vacation: "Disneyland"
//     }
//   };
  

// const isEqual = (obj1, obj2) => {
//     const obj1Keys = Object.keys(obj1);
//     const obj2Keys = Object.keys(obj2);
  
//     if (obj1Keys.length !== obj2Keys.length) {
//       return false;
//     }
  
//     for (let objKey of obj1Keys) {
//       if (obj1[objKey] !== obj2[objKey]) {
//         return false;
//       }
//     }
  
//     return true;
//   };
  
  
//   //obj1 == obj2;
//   console.log(isEqual(obj1, obj2));

//////////////////////////////////////////////////////////////////////////

// const isEqual=(obj1,obj2) => {
//     const obj1Keys=Object.keys(obj1);
//     const obj2Keys=Object.keys(obj2);

//     if(obj1Keys.length !== obj1Keys.length){
//         return false;
//     }

//     for (let objkey of obj1Keys){
//         if (obj1[objkey] !== obj2[objkey]){
//             console.log(false);
//         }
//     }


// };

// const obj1={
//     name:"senthil",
//     age:13
// }

// const obj2={
//     name:"senthil",
//     age:1
// }

// isEqual(obj1,obj2);

////////////////////////////////////////////////////////////////////////////

//     const isEqual = (obj1,obj2) => {
//     const obj1Keys=Object.keys(obj1);
//     const obj2Keys=Object.keys(obj2);

//     if(obj1Keys.length !== obj1Keys.length){
//         return false;
//     }

//     for (let objkey of obj1Keys){
//         if (obj1[objkey] !== obj2[objkey]){
//             return false;
//         }
        
//     }

//     return true

// };

// const obj1={
//     name:"senthil",
//     age:13
// }

// const obj2={
//     name:"senthil",
//     age:26
// }


//  if(isEqual(obj1,obj2)==false){
//     console.log("expected",obj1 );
//     console.log("but got",obj2 );

//  }

//////////////////////////////////////////////////////////////////////////

// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6};
// testName="Passed";
// function assertObjectsEqual(actual,expected,testName){
//     expected1=JSON.stringify(expected)
//     actual1=JSON.stringify(actual)
//     console.log(expected1)
//     console.log(actual1)
//     if(expected1==actual1){
//         return testName;
//     }else{
//         return testName="Failed";
//     }
        
// }
// console.log(assertObjectsEqual(actual,expected,testName));