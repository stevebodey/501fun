/**
 * Animates a number counting up from 0 to a target value.
 *
 * @param {string} elementId - The ID of the HTML element to update.
 * @param {number} endValue - The final number to count up to.
 * @param {number} duration - Animation duration in milliseconds.
 */
function animateCounter(elementId, endValue, duration = 3000) {

  // Get the target HTML element
  const element = document.getElementById(elementId);

  // Starting number
  const startValue = 0;

  // Record the exact time the animation starts
  const startTime = performance.now();

  /**
   * Updates the counter on every animation frame.
   *
   * requestAnimationFrame automatically passes
   * the current timestamp into this function.
   */
  function update(currentTime) {

    // Time passed since animation started
    const elapsed = currentTime - startTime;

    // Convert elapsed time into a progress value between 0 and 1
    const progress = Math.min(elapsed / duration, 1);

    /**
     * Ease-out animation curve.
     * Starts fast and slows down near the end.
     */
    const eased = 1 - Math.pow(1 - progress, 3);

    // Calculate the current animated number
    const currentValue = Math.floor(
      eased * (endValue - startValue) + startValue
    );

    // Update the HTML text with commas added
    // Example: 6000000 -> 6,000,000
    element.textContent = currentValue.toLocaleString();

    // Continue animating until progress reaches 100%
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  // Start the animation loop
  requestAnimationFrame(update);
}

// Start all counters
animateCounter("counter-guests", 6000000);
animateCounter("counter-countries", 45);
animateCounter("counter-darts", 501000000);