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

function moveIconBeforeLastHoveredLink() {
  const links = document.querySelectorAll("header a");
  let lastHoveredLink = null;

  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      lastHoveredLink = link;
    });

    link.addEventListener("mouseout", () => {
      if (lastHoveredLink === link) {
        lastHoveredLink = null;
      }
    });
  });

  document.addEventListener("mousemove", () => {
    if (lastHoveredLink) {
      const icon = lastHoveredLink.parentNode.querySelector("i");
      lastHoveredLink.parentNode.insertBefore(icon, lastHoveredLink);
    }
  });
}

moveIconBeforeLastHoveredLink();

// Initial theme setup
toggleTheme();

// Respect user preference if available
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleTheme);