// Note: DOM not created until page finishes loading.
// Permits no code to run until page loads
window.onload = init;

// Adds event listeners to all images after page renders
function init() {
  // gets all images
  let images = document.getElementsByTagName("img");
  // adds the same click event listener to each image
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", toggleImage);
  }
}

// Passes an event object each time an image is clicked that
// unblurs or reblurs an image
function toggleImage(eventObj) {
  // references the image that was clicked
  let image = eventObj.target;
  // sets the unblurred name of the image
  // Note: the image's ID must match its unblurred filename
  let name = image.id;
  // toggles between the blurred and unblurred image sources
  if (image.getAttribute("src") === `img/${name}.jpg`) {
    image.setAttribute("src", `img/${name}blur.jpg`);
  } else {
    image.setAttribute("src", `img/${name}.jpg`);
  }
}
