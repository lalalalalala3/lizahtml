function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();

  if (currentBg === '#f9f9f9') {
    root.style.setProperty('--bg-color', '#1a1a1a');
    root.style.setProperty('--text-color', '#f0f0f0');
    root.style.setProperty('--accent-color', '#00c3ff');
  } else {
    root.style.setProperty('--bg-color', '#f9f9f9');
    root.style.setProperty('--text-color', '#222');
    root.style.setProperty('--accent-color', '#0077ff');
  }
}
