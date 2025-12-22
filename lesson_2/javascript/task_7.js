"use strict";
// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота).
//  Підрахувати кількість кожної з нагород.
//   Використати enum. Можете і never якось застосувати
var Awards;
(function (Awards) {
    Awards["gold"] = "\u0437\u043E\u043B\u043E\u0442\u0430";
    Awards["silver"] = "\u0441\u0440\u0456\u0431\u043D\u0430";
    Awards["bronze"] = "\u0431\u0440\u043E\u043D\u0437\u043E\u0432\u0430";
    Awards["paper"] = "\u0433\u0440\u0430\u043C\u043E\u0442\u0430";
})(Awards || (Awards = {}));
const COUNT = 10;
const awardsList = [];
for (let i = 0; i < COUNT; i++) {
    const randAwardIndex = Math.floor(Math.random() * Object.keys(Awards).length + 1);
    awardsList.push(addRandomAward(randAwardIndex));
}
console.log(awardsList);
function addRandomAward(num) {
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
            const _exhaustiveCheck = num;
            throw new Error("error");
    }
}
const stats = awardsList.reduce((acc, award) => {
    acc[award] = (acc[award] || 0) + 1;
    return acc;
}, {});
console.log("Статистика:", stats);
