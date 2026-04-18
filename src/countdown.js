/**
 * countdownTimer
 * Logs remaining time every interval and stops at 0
 */
function countdownTimer(startTime, interval) {
  let timeLeft = startTime;

  const timerId = setInterval(() => {
    console.log(timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };