const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const peopleID = data.employees.filter((element) => element.id === id)
    .map((element) => element.responsibleFor[0])[0];
  const animalResidents = data.species.filter((element) => element.id === peopleID)
    .map((element) => element.residents)[0];
  const largerAnimalage = Math.max(...animalResidents.map((element) => element.age));
  const result = animalResidents.filter((element) =>
    (element.age === largerAnimalage ? element : false));
  const [{ name, sex, age }] = result;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
