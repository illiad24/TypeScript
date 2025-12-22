// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота).
//  Підрахувати кількість кожної з нагород.
//   Використати enum. Можете і never якось застосувати

enum Awards {
  gold = "золота",
  silver = "срібна",
  bronze = "бронзова",
  paper = "грамота",
}

const COUNT: number = 10;

const awardsList: Awards[] = [];

for (let i = 0; i < COUNT; i++) {
  const randAwardIndex = Math.floor(
    Math.random() * Object.keys(Awards).length + 1
  );
  awardsList.push(addRandomAward(randAwardIndex));
}

console.log(awardsList);

function addRandomAward(num: number): Awards {
  switch (num) {
    case 1:
      return Awards.gold;
    case 2:
      return Awards.silver;
    case 3:
      return Awards.bronze;
    case 4:
      return Awards.paper;
    default:
      const _exhaustiveCheck: never = num as never;
      throw new Error("error");
  }
}

const stats = awardsList.reduce((acc, award) => {
  acc[award] = (acc[award] || 0) + 1;
  return acc;
}, {} as Record<Awards, number>);

console.log("Статистика:", stats);
