function startCountdown() {
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const hours = parseInt(hoursInput.value);
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);

    const countdownTime = (hours * 3600) + (minutes * 60) + seconds;

    let remainingTime = countdownTime;

    const countdownDisplay = document.getElementById('countdownDisplay');
    countdownDisplay.innerHTML = formatTime(remainingTime);

    const countdownInterval = setInterval(() => {
      remainingTime--;

      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerHTML = "Countdown complete!";
        alert("Countdown complete!");
      } else {
        countdownDisplay.innerHTML = formatTime(remainingTime);
      }
    }, 1000);
  }

  function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  }