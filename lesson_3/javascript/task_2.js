"use strict";
// Задача 2. Створіть union-тип для трьох типів : car (модель, власник),
//  bus (компанія, кількість місць), airplane (швидкість, тип палива).
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.
const car = {
    model: "BMW",
    owner: "Ivan",
};
const plane = {
    speed: 3000,
    fuelType: "patrol",
};
renderData(car);
renderData(plane);
function renderData(dataObj) {
    Object.entries(dataObj).forEach(([key, value]) => {
        console.log(key + "---" + value);
    });
}
