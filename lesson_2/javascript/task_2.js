"use strict";
// Задача 2. Створити функцію, яка дозволяє знайти
// або останню цифру числа, або останній символ числа.
function getLastVal(val) {
    if (typeof val === "number") {
        return Math.abs(val) % 10;
    }
    return val.slice(val.length - 1);
}
console.log(getLastVal(111111112));
