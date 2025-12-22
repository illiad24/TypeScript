type FirstMonthNumList = 3 | 6 | 9 | 12;

const userMonthInput = prompt("Enter month number");
const userMonthNumber: number = Number(userMonthInput);

if (userMonthInput !== null) {
  if (validateMonthNum(userMonthNumber)) {
    const season = getSeasonFromFirstMonth(
      userMonthNumber as FirstMonthNumList
    );
    console.log(season);
  }
}

function generateError(val: string): never {
  throw new Error(val);
}

function validateMonthNum(val: number): boolean {
  if (val < 1 || val > 12) {
    generateError("Не коректне значення (діапазон 1-12)");
  }

  const validMonths: number[] = [3, 6, 9, 12];

  if (!validMonths.includes(val)) {
    generateError("Введіть 1-й місяць пори року (3, 6, 9 або 12)");
  }

  return true;
}

function getSeasonFromFirstMonth(number: FirstMonthNumList): string {
  let val: string = "";
  switch (number) {
    case 3:
      val = "Весна";
      break;
    case 6:
      val = "Літо";
      break;
    case 9:
      val = "Осінь";
      break;
    case 12:
      val = "Зима";
      break;
    default:
      const exCheck: never = number;
      return generateError(`Необроблене значення: ${exCheck}`);
  }
  return val;
}
