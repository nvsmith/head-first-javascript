const passengers = [
  { name: "Jack", paid: true, ticket: "coach" },
  { name: "Cruella", paid: true, ticket: "firstclass" },
  { name: "John", paid: false, ticket: "firstclass" },
  { name: "Jane", paid: false, ticket: "coach" },
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

// Handles the flight attendant responsibilites
function serveCustomer(passenger) {
  // gets the drink order
  var getDrinkOrderFunction = createDrinkOrder(passenger);

  // calls the drink order
  getDrinkOrderFunction();

  // gets dinner order
  var getDinnerOrderFunction = createDinnerOrder(passenger);

  // calls the dinner order
  getDinnerOrderFunction();
}

// Returns a function that can create a drink order
function createDrinkOrder(passenger) {
  // creates a variable to hold the function to place an order
  let orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      alert("Cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      alert("Soda, water, or wine?");
    };
  } else {
    orderFunction = function () {
      alert("Soda or water?");
    };
  }
  return orderFunction;
}

// Returns a function that can create a dinner order
function createDinnerOrder(passenger) {
  // creates a variable to hold the function to place an order
  let orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      alert("Chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      alert("Snack box or cheese plate?");
    };
  } else {
    orderFunction = function () {
      alert("Peanuts or pretzels?");
    };
  }
  return orderFunction;
}

// Gets service instructions per passenger for flight attendants
function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

// Begins passenger service
servePassengers(passengers);
