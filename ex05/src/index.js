let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],
]);
let arrKey = []
let arrValue = []

for (let col of shoppingList.entries()) {
    arrKey.push(col[0])
    arrValue.push(col[1])
}

for (let key of arrKey) {
    console.log(`groceries: ${key}`);
}
for (let value of arrValue) {
    console.log(`amount: ${value}`);
}
for (let col of shoppingList.entries()) {
    console.log(`[ '${col[0]}', ${col[1]} ]`);
}

module.exports = { shoppingList, arrKey, arrValue };