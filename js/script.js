function animateCounter(elementId, endValue, duration = 2500) {
  const element = document.getElementById(elementId);
  const startValue = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Smooth ease-out effect
    const eased = 1 - Math.pow(1 - progress, 3);

    const currentValue = Math.floor(
      eased * (endValue - startValue) + startValue
    );

    element.textContent = currentValue.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Start all counters
animateCounter("counter-guests", 6000000);
animateCounter("counter-countries", 45);
animateCounter("counter-darts", 501000000);