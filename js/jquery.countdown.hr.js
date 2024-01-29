// Set the date to countdown to (YYYY, MM (0-indexed), DD, HH, MM, SS)
const countdownDate = new Date('2024-04-01T00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `
    <div>${days} Days</div>
    <div>${hours} Hours</div>
    <div>${minutes} Minutes</div>
    <div>${seconds} Seconds</div>
  `;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = 'Countdown is over!';
  }
}, 1000);
