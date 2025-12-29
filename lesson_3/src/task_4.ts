// Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size).
//  Продукти можуть бути onSale або regularPrice. Створити тип ShopProduct,
// який об’єднує тип продукту та його статус, використовуючи & і |.

type ProductType =
  | { type: "Book"; author: string }
  | { type: "Electronics"; warranty: string }
  | { type: "Clothes"; size: string };

type ProductStatus = { status: "onSale" | "regularPrice" };

type ShopProduct = ProductType & ProductStatus;

const prod1: ShopProduct = {
  type: "Book",
  author: "ivan",
  status: "onSale",
};
