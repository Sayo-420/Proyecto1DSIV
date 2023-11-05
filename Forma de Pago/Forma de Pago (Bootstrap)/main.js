function startCountdown(minutes) {
  const targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + minutes);

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      alert("¡Tiempo agotado!");
    } else {
      const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("minutes").textContent = minutesLeft.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = secondsLeft.toString().padStart(2, '0');
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Actualiza la cuenta regresiva inmediatamente al cargar la página

  return countdownInterval;
}

startCountdown(4); // Comienza una cuenta regresiva de 4 minutos
