var passengers = [
  { name: "Jack", paid: true },
  { name: "Cruella", paid: true },
  { name: "John", paid: false },
  { name: "Jane", paid: false },
];

function processPassengers(passengers, testFunction) {
  // iterates through passenger list
  for (let i = 0; i < passengers.length; i++) {
    // looks for a test condition among passengers
    if (testFunction(passengers[i])) {
      // for any true test condition, return false so plane can't leave
      return false;
    }
  }
}

function checkNoFlyList(passenger) {
  // returns true if Cruella is a passenger name
  return passenger.name === "Cruella";
}

function checkNotPaid(passenger) {
  // returns true if any passenger hasn't paid
  return !passenger.paid;
}
