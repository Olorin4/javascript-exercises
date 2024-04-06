
const findTheOldest = function (people) {
    let age = people.map(obj => (obj.yearOfDeath - obj.yearOfBirth));
    let maxAge = Math.max(...age); // Find the maximum age
    let indexOfMaxAge = age.indexOf(maxAge); // Find the index of the maximum age
    return people[indexOfMaxAge];
};

// Do not edit below this line
module.exports = findTheOldest;
