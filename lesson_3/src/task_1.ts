// Задача 1. Створити два інтерфейс студента (піб, курс, факультет).
// На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)

interface IStudent {
  name: string;
  course: number;
  faculty: string;
}

interface IMainStudent extends IStudent {
  groupNumber: number;
}

const mainStudent: IMainStudent = {
  name: "ivan",
  course: 3,
  faculty: " computer since",
  groupNumber: 2,
};
