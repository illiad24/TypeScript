// Задача 5.  У localStorage зберігається об’єкт у форматі JSON.
//  Проаналізувати чи є цей об'єкт  типу Product{     title:string,     price:number }

type Product = {
  title: string;
  price: number;
};

function isProduct(data: unknown): data is Product {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  return (
    !!data &&
    typeof data === "object" &&
    ["title", "price"].every((key) => key in data)
  );
}

const product = {
  title: "Laptop",
  price: 111,
};

localStorage.setItem("prod", JSON.stringify(product));

const getProduct = localStorage.getItem("prod");
const getParsedProduct = getProduct ? JSON.parse(getProduct) : null;
if (isProduct(getParsedProduct)) {
  console.log("Це продукт:", getParsedProduct.title);
} else {
  console.log("Це не продукт");
}
