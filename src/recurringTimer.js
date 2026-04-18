/**
 * recurringTimer
 * Logs a message repeatedly at intervals
 */
function recurringTimer(message, interval) {
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  return timerId;
}

/**
 * stopRecurringTimer
 */
function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };