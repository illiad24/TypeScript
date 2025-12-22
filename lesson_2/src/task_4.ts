// Задача 4. Випадковим чином генерується масив номерів робочих днів,
//  або назв вихідних, або назв святкових днів.
//  Підрахувати чого було більше: святкових чи вихідних.

type WorkDay = 1 | 2 | 3 | 4 | 5;
type Weekend = "Субота" | "Неділя";
type Holiday = "Різдво" | "Пасха" | "Новий Рік";

type DayEntry = WorkDay | Weekend | Holiday;

const randomData: DayEntry[] = [];

const worksDay: number[] = [1, 2, 3, 4, 5];
const weekends: string[] = ["Субота", "неділя"];
const holidays: string[] = ["Різдво", "Пасха", "Новий Рік"];
let workDayCount: number = 0;
let weekendDayCount: number = 0;
let holidayDayCount: number = 0;

for (let i = 0; i < 10; i++) {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      randomData.push(
        worksDay[Math.floor(Math.random() * worksDay.length)] as WorkDay
      );
      workDayCount++;
      break;
    case 2:
      randomData.push(
        weekends[Math.floor(Math.random() * weekends.length)] as Weekend
      );
      weekendDayCount++;
      break;
    case 3:
      randomData.push(
        holidays[Math.floor(Math.random() * holidays.length)] as Holiday
      );
      holidayDayCount++;
      break;
    default:
      break;
  }
}
console.log(randomData);
console.log(`Кількість робочих - ${workDayCount}`);
console.log(`Кількість вихідних - ${weekendDayCount}`);
console.log(`Кількість святкових - ${holidayDayCount}`);
