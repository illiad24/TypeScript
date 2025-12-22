// Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими

enum Settings {
  open = 1,
  loop = 1,
  fade = 0,
  pagination = 0,
}

console.log("Увімкнені налаштування:");

Object.entries(Settings).forEach(([key, value]) => {
  if (isNaN(Number(key)) && value === 1) {
    console.log(`${key} увімкнено`);
  }
});
