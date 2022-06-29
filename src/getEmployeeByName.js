const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let objectEmpty = {}
  let index = data
  const {employees} = index
  // seu código aqui
  
if(employeeName === undefined){
  return objectEmpty
} else {
  return employees.find((element) => element.firstName === employeeName || element.lastName === employeeName)
}
  
  
}

console.log(getEmployeeByName())
module.exports = getEmployeeByName;
