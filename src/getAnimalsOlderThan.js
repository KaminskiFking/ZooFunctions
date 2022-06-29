const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const containerAnimal = data.species.filter((element) => element.name === animal);
  const [{ residents }] = containerAnimal;
  return residents.every((element) => (element.age >= age));
}

console.log(getAnimalsOlderThan('lions', 15));

module.exports = getAnimalsOlderThan;
