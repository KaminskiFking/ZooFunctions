const data = require('../data/zoo_data');

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;
const daysAll = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Tuesday')).map((element) => element.name),
  },

  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Wednesday')).map((element) => element.name),
  },

  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Thursday')).map((element) => element.name),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Friday')).map((element) => element.name),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Sunday')).map((element) => element.name),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Saturday')).map((element) => element.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  const animalsName = data.species.map((element) => element.name);
  const daysHours = data.hours[scheduleTarget];
  const daysAnimals = data.species.filter((element) =>
    element.availability.includes(scheduleTarget)).map((element) => element.name);
  const daysAndAnimalsName = Object.keys(data.hours) + animalsName;
  if (animalsName.includes(scheduleTarget)) {
    return data.species.filter((element) =>
      element.name === scheduleTarget).map((element) => element.availability)[0];
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: daysAll.Monday };
  }
  if (!scheduleTarget || !daysAndAnimalsName.includes(scheduleTarget)) return daysAll;
  return {
    [scheduleTarget]: { officeHour: `Open from ${daysHours.open}am until ${daysHours.close}pm`,
      exhibition: daysAnimals },
  };
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
