function updateClock() {
  const now = new Date();

  // Отримуємо години, хвилини, секунди
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Додаємо 0 спереду, якщо менше 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Вставляємо у HTML
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// Оновлюємо кожну секунду
setInterval(updateClock, 1000);

// Викликаємо одразу при завантаженні
updateClock();
