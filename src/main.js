// Splash always shows on every page load (no session storage check)

const splashOverlay = document.getElementById('splash-overlay');
const splashVideo = document.getElementById('splash-video');

// Function to hide splash
function hideSplash() {
  splashOverlay.classList.add('fade-out');
  
  setTimeout(() => {
    splashOverlay.classList.add('hidden');
  }, 800);
}

// Play video when it's ready
splashVideo.addEventListener('loadeddata', () => {
  splashVideo.play().catch(error => {
    console.log('Autoplay prevented:', error);
    // If autoplay fails, hide splash after delay
    setTimeout(hideSplash, 2000);
  });
});

// Hide splash when video ends
splashVideo.addEventListener('ended', () => {
  hideSplash();
});

// Error handling - show content if video fails
splashVideo.addEventListener('error', () => {
  console.error('Video failed to load');
  hideSplash();
});