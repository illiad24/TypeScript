// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
//  Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину,
//  якщо число – то визначити чи є парним.

// Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок».
//  Пірахувати чого було більше чисел чи рядків і вивести останнє значення
// let stringCount = 0;
// let numberCount = 0;
// let value: number | string;
// const numHistory: (number | string)[] = [];

// for (let i = 0; i < 10; i++) {
//   value = Math.random() > 0.5 ? 7 : "ok";
//   numHistory.push(value);
//   if (typeof value === "number") {
//     numberCount += 1;
//   } else if (typeof value === "string") {
//     stringCount += 1;
//   }
// }
// console.log(numHistory);
// console.log(stringCount);
// console.log(numberCount);

// Задача 6. Вводиться сума грошей і позначення валюти.
//  Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH").
//   Тобто якщо вводять гривні, то перевести у долари і євро.
//   А якщо вводять долари, то перевести у гривні  і євро.
//   Курси валют – це константи.

// const USD_RATE: number = 42;
// const EURO_RATE: number = 49;

// const moneyAmount: number = parseFloat(prompt("enter money value")!);

// type Currency = "USD" | "EUR" | "UAH";
// let currencyOptions: Currency | null = null;
// const selectedCurrency: string = prompt("enter money currency")!;

// switch (selectedCurrency) {
//   case "USD":
//     currencyOptions = "USD";
//     break;
//   case "EUR":
//     currencyOptions = "EUR";
//     break;
//   case "UAH":
//     currencyOptions = "UAH";
//     break;

//   default:
//     alert("error");
//     break;
// }
// if (currencyOptions) {
//   moneyConvertor(moneyAmount, currencyOptions);
// }
// function moneyConvertor(moneyNumber: number, moneyCurrency: Currency) {
//   if (moneyCurrency === "EUR") {
//     console.log("З EUR у USD:");
//     console.log(moneyNumber * (EURO_RATE / USD_RATE));
//     console.log("З EUR у UAH:");
//     console.log(moneyNumber * EURO_RATE);
//   } else if (moneyCurrency === "USD") {
//     console.log("З USD у EUR:");
//     console.log(moneyNumber * (USD_RATE / EURO_RATE));
//     console.log("З USD у UAH:");
//     console.log(moneyNumber * USD_RATE);
//   } else if (moneyCurrency === "UAH") {
//     console.log("З UAH у USD:");
//     console.log(moneyNumber / USD_RATE);
//     console.log("З UAH у EUR:");
//     console.log(moneyNumber / EURO_RATE);
//   }
// }

// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
//  Вивести на екран усі поля та їх значення.

// const data: object = {
//   name: "Ivan",
//   age: 19,
// };
// interface Data {
//   name: string;
//   age: number;
// }

// localStorage.setItem("data", JSON.stringify(data));

// const dataString: string | null = localStorage.getItem("data");

// if (dataString) {
//   const getDataValue: Data = JSON.parse(dataString);

//   console.log(getDataValue.name);
//   console.log(getDataValue.age);
// }

// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
const data: object = {
  name: "Ivan",
  field2: 20,
};

localStorage.setItem("data", JSON.stringify(data));

const dataString: string | null = localStorage.getItem("data");

if (dataString) {
  const getDataValue: { field2: string | number } = JSON.parse(dataString);
  if (getDataValue.field2) {
    if (typeof getDataValue.field2 === "number") {
      if (getDataValue.field2 % 2 === 0) {
        console.log("парне число");
      } else {
        console.log("не парне число ");
      }
    } else {
      console.log(getDataValue.field2.length);
    }
  }
}
