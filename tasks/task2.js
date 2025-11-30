// Функція отримує масив товарів і повертає всі товари, які мають ціну нижчу за 100 або вищу за 500
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."
function getProductsNotInPriceRange(products) {
  return products
    .filter(item => item.price < 100 || item.price > 500)  
    .map(item => item.name);                               
}
module.exports = getProductsNotInPriceRange;
