// Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти
//  ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні,
// то перевести у долари і євро. А якщо вводять долари, то
//  перевести у гривні  і євро. Курси валют – це константи.

type CURRENCY = "USD" | "EUR" | "GRN";
const USD_RATE: number = 42;
const EURO_RATE: number = 49;
const moneyAmount: number = parseFloat(prompt("введіть суму грошей")!);
const userCurrency = prompt("введіть валюту")!;
let useCurrency: CURRENCY | null = null;

switch (userCurrency) {
  case "USD":
    useCurrency = "USD";
    break;
  case "GRN":
    useCurrency = "GRN";
    break;
  case "EUR":
    useCurrency = "EUR";
    break;
  default:
    break;
}
if (useCurrency) {
  printData(moneyAmount, useCurrency);
}

function printData(moneyNumber: number, moneyCurrency: CURRENCY): void {
  if (moneyCurrency === "EUR") {
    console.log("З EUR у USD:");
    console.log(moneyNumber * (EURO_RATE / USD_RATE));
    console.log("З EUR у GRN:");
    console.log(moneyNumber * EURO_RATE);
  } else if (moneyCurrency === "USD") {
    console.log("З USD у EUR:");
    console.log(moneyNumber * (USD_RATE / EURO_RATE));
    console.log("З USD у GRN:");
    console.log(moneyNumber * USD_RATE);
  } else if (moneyCurrency === "GRN") {
    console.log("З GRN у USD:");
    console.log(moneyNumber / USD_RATE);
    console.log("З GRN у EUR:");
    console.log(moneyNumber / EURO_RATE);
  }
}
