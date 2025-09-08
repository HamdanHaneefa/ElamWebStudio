// Smooth scroll utility for better cross-browser compatibility
export const smoothScrollTo = (targetId, offset = 0) => {
  const target = document.getElementById(targetId.replace('#', ''));
  if (target) {
    const targetPosition = target.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Enhanced smooth scroll with easing
export const smoothScrollToWithEasing = (targetId, duration = 1000, offset = 0) => {
  const target = document.getElementById(targetId.replace('#', ''));
  if (!target) return;

  const startPosition = window.pageYOffset;
  const targetPosition = target.offsetTop - offset - startPosition;
  let startTime = null;

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

// Initialize smooth scrolling for hash links
export const initSmoothScrolling = () => {
  // Handle hash links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScrollToWithEasing(targetId, 800, 80); // 80px offset for navbar
    }
  });

  // Handle initial hash on page load
  if (window.location.hash) {
    setTimeout(() => {
      smoothScrollToWithEasing(window.location.hash, 800, 80);
    }, 100);
  }
};
