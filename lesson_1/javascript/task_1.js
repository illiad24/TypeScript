"use strict";
//! Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
//  Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину,
//  якщо число – то визначити чи є парним.
// const obj = {
//   field2: 21,
// };
// localStorage.setItem("data", JSON.stringify(obj));
// const storageString: string | null = localStorage.getItem("data");
// if (storageString) {
//   const storageValue: { field2: string | number } = JSON.parse(storageString);
//   if (typeof storageValue.field2 === "string") {
//     console.log(storageValue.field2.length);
//   } else if (typeof storageValue.field2 === "number") {
//     console.log(storageValue.field2 % 2 === 0 ? "парне" : "не парне");
//   }
// }
//! Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
//  Вивести на екран усі поля та їх значення.
// interface StorageData {
//   field1: number;
//   field2: string;
// }
// const keys: StorageData = {
//   field1: 1,
//   field2: "string",
// };
// localStorage.setItem("dataKeys", JSON.stringify(keys));
// const storageString = localStorage.getItem("dataKeys");
// if (storageString) {
//   try {
//     const storageValue: StorageData = JSON.parse(storageString);
//     for (const key in storageValue) {
//       const k = key as keyof StorageData;
//       console.log(`Значення: ${storageValue[k]}`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
