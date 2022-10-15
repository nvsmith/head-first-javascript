// DOM not created until page finishes loading
// Make sure no code runs until page loads
window.onload = init;

function init() {
  // gets all images
  var images = document.getElementsByTagName("img");
  // adds the same event listener to each image
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", showAnswer);
  }
}

// function init() {
//   let image = document
//     .getElementById("zero")
//     .addEventListener("click", showAnswer);
// }

// unblurs an image
// passes an event object each time an image is clicked
function showAnswer(eventObj) {
  // references the image that was clicked
  let image = eventObj.target;
  // gets the name  of the blurred image
  let name = image.id;
  // sets the name to the unblurred image
  name = `${name}.jpg`;
  // changes the img source to the unblurred image
  image.src = `img/${name}`;
}

// // unblurs an image
// function showAnswer() {
//   let image = document.getElementById("zero");
//   image.src = "img/zero.jpg";
// }
