var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
];

function compareSold(sodaA, sodaB) {
  sodaA.sold - sodaB.sold;
}

function printProducts(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(
      `${products[i].name}, ${products[i].calories}, ${products[i].color}, ${products[i].sold}`
    );
  }
}

products.sort(compareSold);
printProducts(products);
