const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.map((element) => element).reduce((element, item) => Object.assign(element,
      { [item.name]: item.residents.length }), {});
  }
  if (Object.keys(animal).length === 1) {
    const valuesAnimal = Object.values(animal); const result = data.species.map((element) =>
      element).filter((element) =>
      element.name === valuesAnimal[0]).map((element) => element.residents.length);
    return parseInt(result, 0);
  }
  if (Object.keys(animal).length > 1) {
    const valuesAnimal = Object.values(animal); const result = data.species.map((element) =>
      element).filter((element) => element.name === valuesAnimal[0]).map((element, index) =>
      element.residents.filter((elementtwo) =>
        elementtwo.sex === 'female')).map((elementtwo) => elementtwo.length);
    return parseInt(result, 0);
  }
}

console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
