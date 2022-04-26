// random location starting point (0 - 4)
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guessInput;
var hits = 0;
var guessCounter = 0;
var isSunk = false;

while (isSunk == false) {
  guessInput = prompt("Ready, Aim, Fire! (Enter a number from 0 - 6)");
  if (guessInput < 0 || guessInput > 6) {
    alert("Invalid entry. Try again.");
  } else {
    guessCounter++;
    if (guessInput == location1 || guessInput == location2 || guessInput == location3) {
      hits++;
      alert("HIT!");
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      } // end isSunk checker
    } else {
      alert("MISS! Try again.");
    } // end location checker
  } // end if/else guessInput loop
} // end isSunk loop

var stats = `Total Guesses: ${guessCounter}.
Shooting Accuracy: ${((3 / guessCounter).toFixed(2) * 100)}%`;

alert(stats);