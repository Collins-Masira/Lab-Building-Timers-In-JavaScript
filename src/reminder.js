/**
 * delayedReminder
 * Logs a message after a delay and resolves a promise
 */
function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

module.exports = { delayedReminder };