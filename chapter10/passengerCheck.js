const passengers = [
  { name: "Jack", paid: true },
  { name: "Cruella", paid: true },
  { name: "John", paid: false },
  { name: "Jane", paid: false },
];

// Checks all passengers for a testable condition which will stall the plane's takeoff
function processPassengers(passengers, testFunction) {
  // iterates through passengers
  for (let i = 0; i < passengers.length; i++) {
    // applies a test condition for passengers
    if (testFunction(passengers[i])) {
      // for any true test condition, return false so plane can't leave
      return false;
    }
  }
}

// Checks if a passenger is a No Fly
function checkNoFlyList(passenger) {
  // returns true if Cruella is a passenger name
  return passenger.name === "Cruella";
}

// Checks if a passenger hasn't paid
function checkNotPaid(passenger) {
  // returns true if any passenger hasn't paid
  return !passenger.paid;
}

// Processes passengers against No Fly condition
let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("We have a no-fly passenger onboard.");
}

// Processes passengers against No Payment condition
let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("Not everyone has paid.");
}

// Prints passenger names and payment status
function printPassenger(passenger) {
  let message;
  if (passenger.paid) {
    message = `${passenger.name} has paid`;
  } else {
    message = `${passenger.name} has not paid`;
  }
  console.log(message);
  return false;
}

// Processes passengers for printing names and payments
processPassengers(passengers, printPassenger);
