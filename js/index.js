// Function to toggle dark mode
function toggleMode() {
  const body = document.body;
  const modeToggle = document.getElementById("modeToggleContainer");
  
  // Toggle dark mode class on body
  body.classList.toggle("dark-mode");

  // Toggle dark/light mode class on modeToggleContainer
  modeToggle.classList.toggle("dark-mode");
  modeToggle.classList.toggle("light-mode");

  // Save the current mode to localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check the saved mode on page load
document.addEventListener("DOMContentLoaded", function() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  
  // Apply dark mode if it was set
  if (isDarkMode) {
      const body = document.body;
      const modeToggle = document.getElementById("modeToggleContainer");

      body.classList.add("dark-mode");
      modeToggle.classList.add("dark-mode");
      modeToggle.classList.remove("light-mode");
  }
});

// Select all clickable images
const clickableImages = document.querySelectorAll('.click-icons');

// Add event listener to each image
clickableImages.forEach(image => {
  image.addEventListener('click', playSound);
});

// Function to play sound
function playSound(event) {
  const soundPath = event.currentTarget.getAttribute('data-sound');
  const sound = new Audio(soundPath);
  sound.play();
}
