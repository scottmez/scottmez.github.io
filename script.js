const root = document.documentElement;

function toggleTheme() {
  const isDarkMode = root.classList.toggle('dark-mode');

  // Check for browser support of prefers-color-scheme
  if (window.matchMedia('(prefers-color-scheme: dark)').matches === isDarkMode) {
    // Respect user preference
    return;
  }

  // Set theme based on time of day
  const now = new Date().getHours();
  const isNight = now >= 18 || now <= 6; // Adjustable time range for dark mode

  if (isNight != isDarkMode){
    root.classList.toggle('dark-mode');
  }
}

function placeArrow() { //placeholder for function that wil place arrow in front of Play, Settings, Credits, or Quit depending on which was hovered last
  return;
}

// Initial theme setup
toggleTheme();

// Respect user preference if available
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleTheme);