/**
 * Updates the clock element with the current time.
 *
 * @function updateClock
 * @returns {void}
 */
function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Format the hours, minutes, and seconds with leading zeros
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Update the clock element with the formatted time
  clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

/**
 * Calls the updateClock function every second.
 *
 * @function
 * @returns {void}
 */
setInterval(updateClock, 1000);