// Splash always shows on every page load

const splashOverlay = document.getElementById('splash-overlay');
const splashAnimation = document.getElementById('splash-animation');

let hasHidden = false; // Prevent multiple hide calls

// Function to hide splash
function hideSplash() {
  if (hasHidden) return; // Prevent multiple executions
  hasHidden = true;
  
  splashOverlay.classList.add('fade-out');
  
  setTimeout(() => {
    splashOverlay.classList.add('hidden');
  }, 800);
}

// IMPORTANT: Set this to your GIF's duration in milliseconds
// 3 seconds = 3000, 5 seconds = 5000, etc.
const gifDuration = 3000;

// Start timer when image loads
splashAnimation.addEventListener('load', () => {
  console.log('GIF loaded, will hide after', gifDuration, 'ms');
  
  // Hide splash after GIF plays once
  setTimeout(() => {
    hideSplash();
  }, gifDuration);
});

// Error handling - show content if GIF fails to load
splashAnimation.addEventListener('error', () => {
  console.error('Animation failed to load');
  hideSplash();
});

// Fallback: If image already cached and load event doesn't fire
if (splashAnimation.complete) {
  console.log('GIF already loaded (cached), starting timer');
  setTimeout(() => {
    hideSplash();
  }, gifDuration);
}
