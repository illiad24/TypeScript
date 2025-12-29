// Задача 2. Створіть union-тип для трьох типів : car (модель, власник),
//  bus (компанія, кількість місць), airplane (швидкість, тип палива).
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.

type Car = {
  model: string;
  owner: string;
};

type Bus = {
  company: string;
  seats: number;
};

type Airplane = {
  speed: number;
  fuelType: string;
};

type Transport = Car | Bus | Airplane;

const car: Transport = {
  model: "BMW",
  owner: "Ivan",
};
const plane: Transport = {
  speed: 3000,
  fuelType: "patrol",
};

renderData(car);
renderData(plane);
function renderData(dataObj: Transport): void {
  Object.entries(dataObj).forEach(([key, value]) => {
    console.log(key + "---" + value);
  });
}
