const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui

  const sizeChild = entrants.filter((element) => element.age === 5).length;
  const sizeAdult = entrants.filter((element) => element.age === 18).length;
  const sizeSenior = entrants.filter((element) => element.age === 50).length;

  const obj = { child: sizeChild, adult: sizeAdult, senior: sizeSenior };

  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === [] || entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  if (typeof entrants === 'object') {
    const result = Object.values(countEntrants(entrants));
    const childPrice = 20.99 * result[0];
    const adultPrice = 49.99 * result[1];
    const seniorPrice = 24.99 * result[2];

    return childPrice + adultPrice + seniorPrice;
  }
}

module.exports = { calculateEntry, countEntrants };
