/* The Auto-O-Matic creates knock-off cars all day long. This code generates random makes, models, years and all the properties of a car. It’s your very own car factory. */


function makeCar() {
  var makes = ["Lamborhini", "Maserati", "Audi", "Tesla", "Porsche"];
  var models = ["Challenge", "500", "XKR", "Bel-Air", "Mulsanne", "GT3"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["ruby", "cerulean", "midnight black", "golden", "pearl"];
  var convertible = [true, false];
  // Random option pickers
  var randomMake = Math.floor(Math.random() * makes.length);
  var randomModel = Math.floor(Math.random() * models.length);
  var randomYear = Math.floor(Math.random() * years.length);
  var randomColor = Math.floor(Math.random() * colors.length);
  var randomCapacity = Math.floor(Math.random() * 5) + 2;
  var randomConvertible = Math.floor(Math.random() * 2);

  var car = {
    make: makes[randomMake],
    model: models[randomModel],
    year: years[randomYear],
    color: colors[randomColor],
    passengers: randomCapacity,
    convertible: convertible[randomConvertible]
  };
  return car;
}

function displayCar(car) {
  console.log(`Your new car is a ${car.color} ${car.year} ${car.make} ${car.model}, an impressive ride for up to ${car.passengers} passengers.`);
  if (car.convertible) {
    console.log("Fully convertible!");
  } else {
    console.log("For $1200 extra, we can make it fully convertible.");
  }
}

var carToSell = makeCar();

displayCar(carToSell);