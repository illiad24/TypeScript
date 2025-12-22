"use strict";
// Задача 4. Випадковим чином генерується масив номерів робочих днів,
//  або назв вихідних, або назв святкових днів.
//  Підрахувати чого було більше: святкових чи вихідних.
const randomData = [];
const worksDay = [1, 2, 3, 4, 5];
const weekends = ["Субота", "неділя"];
const holidays = ["Різдво", "Пасха", "Новий Рік"];
let workDayCount = 0;
let weekendDayCount = 0;
let holidayDayCount = 0;
for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            randomData.push(worksDay[Math.floor(Math.random() * worksDay.length)]);
            workDayCount++;
            break;
        case 2:
            randomData.push(weekends[Math.floor(Math.random() * weekends.length)]);
            weekendDayCount++;
            break;
        case 3:
            randomData.push(holidays[Math.floor(Math.random() * holidays.length)]);
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
