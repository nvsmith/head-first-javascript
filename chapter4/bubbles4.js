// Parallel arrays raw data
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

// Output all the data
function printAndGetHighScores(scores) {
  var output;
  var highScore = 0;

  // loop through scores & print output
  for (var i = 0; i < scores.length; i++) {
    output = `Bubble solution #${i} score: ${scores[i]}`;
    console.log(output);

    // get the highest score
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

// Get the vials with the highest score
function getBestResults(scores, highScore) {
  var bestSolutions = [];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) { // check value
      bestSolutions.push("#" + i); // push index
    }
  }
  return bestSolutions;
}

// Determine most cost effective solution with highScore
function getMostCostEffectiveSolution(scores, costs, highScore) {
  var cost = 100; // start arbitraily high to find lower comparisons
  var index; // for the lowest cost solution
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i; // keep track of lowest cost found
        cost = costs[i];
      }
    }
  }
  return index;
}

var highScore = printAndGetHighScores(scores);
var bestSolutions = getBestResults(scores, highScore);
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);
console.log(`Solutions with the highest score: ${bestSolutions}`);
console.log(`Solution #${mostCostEffective} is the most cost effective.`);