"use strict";
// Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок».
//  Пірахувати чого було більше чисел чи рядків і вивести останнє значення
let stringCount = 0;
let numberCount = 0;
let value;
for (let i = 0; i < 10; i++) {
    value = Math.random() > 0.7 ? "ok" : 7;
    if (typeof value === "string") {
        stringCount++;
    }
    else if (typeof value == "number") {
        numberCount++;
    }
}
document.write(`Чисел-${numberCount}  рядків-${stringCount}  останнє значення-${value.toString()}`);
