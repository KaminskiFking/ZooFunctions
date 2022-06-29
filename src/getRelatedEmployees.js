const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  let containerManager = data.employees.some((element) => element.managers.includes(id) ? true : false)
  return containerManager
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))

function getRelatedEmployees(managerId) {
  // seu código aqui
    if(isManager(managerId)){
      return data.employees.filter((element) => element.managers.includes(managerId)).map((element) => `${element.firstName} ${element.lastName}`)
    }
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))

module.exports = { isManager, getRelatedEmployees };
