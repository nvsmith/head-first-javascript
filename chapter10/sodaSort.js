// Product details
var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
];

// Compares two sales numbers
function compareSales(a, b) {
  return a.sold - b.sold;
}

// Creates a new array from products and sorts by ascending sales
var sales = products.map((x) => x).sort(compareSales);

// Prints a passed-in array
function print(array) {
  // iterates through the array
  for (let i = 0; i < array.length; i++) {
    // logs the array in a readable format
    console.log(
      `${array[i].name}, Calories: ${array[i].calories}, Color: ${array[i].color}, Sold: ${array[i].sold}`
    );
  }
  console.log("\n");
}

// Original products array
print(products);
// New sorted sales array
print(sales);
