// Задача 7. Описати тип «журнал учня» (3 поля-масиви з оцінками ).
//  Потім на основі цього типу створити тип «менеджер оцінок»
//  (додати методи знаходження середньої оцінки і найбільшої оцінки)

interface IStudentRecords {
  week: number[][];
}

interface IStudentManager extends IStudentRecords {
  getAverage(): number;
  getMax(): number;
}

const studentJournal: IStudentManager = {
  week: [
    [1, 2, 3, 3],
    [4, 2, 3, 3],
    [4, 2, 5, 3],
  ],

  getAverage() {
    const allMarks = this.week.flat();
    if (allMarks.length === 0) return 0;

    const sum = allMarks.reduce((acc, mark) => acc + mark, 0);
    return sum / allMarks.length;
  },

  getMax() {
    const allMarks = this.week.flat();
    return allMarks.length > 0 ? Math.max(...allMarks) : 0;
  },
};

console.log(`Максимальна оцінка: ${studentJournal.getMax()}`);
console.log(`Середній бал: ${studentJournal.getAverage().toFixed(2)}`);
