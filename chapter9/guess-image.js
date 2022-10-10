// DOM not created until page finishes loading
// Make sure no code runs until page loads
window.onload = init;
function init() {
  let image = document
    .getElementById("zero")
    .addEventListener("click", showAnswer);
}

// blur or unblur image
function showAnswer() {
  let image = document.getElementById("zero");
  image.src = "img/zero.jpg";
}
