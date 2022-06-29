const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui

  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return data.species.filter((element) => element.id.includes(ids));
  }
  if (ids.length > 1) {
    return data.species.filter((element) => ids.some((elementtwo) => elementtwo === element.id));
  }
}

module.exports = getSpeciesByIds;
