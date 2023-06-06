// index.js

const drivers = ['driver1', 'driver2', 'driver3', 'driver4', 'driver5'];

// returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// returnLastTwoDrivers function
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier function
function createFareMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

// fareDoubler function
const fareDoubler = createFareMultiplier(2);

// fareTripler function
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers function
function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}

// Test cases
console.log(returnFirstTwoDrivers(drivers)); // Output: ['driver1', 'driver2']
console.log(returnLastTwoDrivers(drivers)); // Output: ['driver4', 'driver5']
console.log(selectingDrivers[0](drivers)); // Output: ['driver1', 'driver2']
console.log(selectingDrivers[1](drivers)); // Output: ['driver4', 'driver5']
console.log(createFareMultiplier(2)(10)); // Output: 20
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['driver1', 'driver2']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['driver4', 'driver5']
