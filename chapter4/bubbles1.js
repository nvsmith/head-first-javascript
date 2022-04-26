var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44
];

// Output for the flask number & its score.
var output;

// determine high scores
var highScore = Math.max(...scores);

// list for the highest scores
const highScoreList = [];

// put the highest scoring solution(s) into the highScoreList
scores.forEach((value, i) => {
  output = `Bubble solution #${i} score: ${value}`
  console.log(output);
  if (value === highScore) {
    highScoreList.push("#" + i);
  }
});

function reportBubbles() {
  console.log(`
    Bubbles tests: ${scores.length}
    Highest bubble score: ${highScore}
    Solutions with highest score: ${highScoreList}`);
}

reportBubbles();