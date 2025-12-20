"use strict";
// Задача 3. Вводиться назва продукту,
// ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.
const userInput = prompt("product count");
const productCount = userInput ? parseInt(userInput) : 0;
if (productCount) {
    shopping(productCount);
}
function shopping(count) {
    const productsList = [];
    for (let i = 0; i < count; i++) {
        const productName = prompt("product name");
        const productCount = parseInt(prompt("product count"));
        const productPrice = parseFloat(prompt("product price"));
        if (productCount && productName && productPrice) {
            const prepareProduct = {
                name: productName,
                count: productCount,
                price: productCount * productPrice,
            };
            productsList.push(prepareProduct);
        }
        else {
            alert("Shopping close");
            break;
        }
    }
    printCheck(productsList);
}
function printCheck(productsList) {
    console.log(productsList);
    let totalPrice = 0;
    productsList.forEach((el) => {
        for (const key in el) {
            const k = key;
            const element = el[k];
            document.write(element.toString());
            document.write("<br/>");
        }
        totalPrice += el.price;
        document.write("--------------------------------------");
        document.write("<br/>");
    });
    document.write("<br/>");
    document.write("total");
    document.write(totalPrice.toString());
}
