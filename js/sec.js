let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

// Функція для оновлення тексту на екрані
function updateDisplay() {
  // якщо число менше 10 — додаємо 0 спереду
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("stopwatch").textContent = `${h}:${m}:${s}`;
}

// Функція запуску секундоміра
function startStopwatch() {
  // щоб не запускати кілька разів одночасно
  if (intervalId) return;

  intervalId = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

// Функція зупинки секундоміра
function stopStopwatch() {
  clearInterval(intervalId);
  intervalId = null; // обнуляємо, щоб можна було знову стартувати
}

// Функція скидання секундоміра
function resetStopwatch() {
  stopStopwatch(); // зупиняємо, якщо працює
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Прив’язуємо кнопки
document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);

// Початкове відображення
updateDisplay();
