// Задача 3. Вводиться номер місяця або назва місяця.
//  Створити функцію, яка повинна повертати номер пори року (1-4)
//   якщо передаємо число, або назву пори року, якщо було введено назву місяця.
//    Використати перевантаження функцій.

function getSeason(val: number): number;
function getSeason(val: string): string;

function getSeason(val: number | string): number | string {
  let answer: number | string = "";
  if (typeof val === "number") {
    if (val == 12 && val >= 1 && val <= 2) {
      answer = 1;
    } else if (val >= 3 && val <= 5) {
      answer = 2;
    } else if (val >= 6 && val <= 8) {
      answer = 3;
    } else if (val >= 9 && val <= 11) {
      answer = 4;
    }
    return answer;
  }

  const seasons = {
    winter: ["dec", "jan", "feb"], // грудень, січень, лютий
    spring: ["mar", "apr", "may"], // березень, квітень, травень
    summer: ["jun", "jul", "aug"], // червень, липень, серпень
    autumn: ["sep", "oct", "nov"], // вересень, жовтень, листопад
  };

  if (seasons.winter.includes(val)) answer = "winter";
  if (seasons.spring.includes(val)) answer = "spring";
  if (seasons.summer.includes(val)) answer = "summer";
  if (seasons.autumn.includes(val)) answer = "autumn";
  return answer;
}

const getSeasonValue = getSeason("jul");
console.log(getSeasonValue);
