function playVideo() {
  const placeholder = document.getElementById("videoPlaceholder");
  const iframe = document.getElementById("videoFrame");
  const playButton = document.querySelector(".play-button"); // Get the play button
  
  iframe.style.display = "block";
  iframe.src += "?autoplay=1";
  
  // Hide the play button
  playButton.style.display = "none";
}

const scrollContainer = document.getElementById('cardContainer');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

scrollRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});