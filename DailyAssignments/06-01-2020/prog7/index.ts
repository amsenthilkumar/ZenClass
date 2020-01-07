var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
var testName="Passed";
function assertObjectsEqual(actual,expected,testName){
    var expected1=JSON.stringify(expected)
    var actual1=JSON.stringify(actual)
    console.log(expected1)
    console.log(actual1)
    if(expected1==actual1){
        return testName;
    }else{
        return testName="Failed";
    }
        
}
console.log(assertObjectsEqual(actual,expected,testName));