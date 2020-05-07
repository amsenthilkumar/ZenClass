
function transformEmployeeData(employeeData) {
  // var employeeInfo = {}
  // for (var i = 0; i<employeeData.length; i++){
  //   employeeInfo[employeeData[0][i]]=employeeData[1]
  // }
  // return employeeInfo
  
  var newList = [];

  for(var i = 0; i< employeeData.length; i++) {
    var workerData = {};
    for(var x = 0; x< employeeData[i].length; x++) {
      workerData[employeeData[i][x][0]] = employeeData[i][x][1];
    }
    
    newList.push(workerData);
  }

  return newList;

}

console.log(transformEmployeeData(employeeData))