// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії на основі продажів.
// Спочатку фільтруємо товари, які продані більше 5 разів, потім сортуємо їх за кількістю продажів,
// а потім залишаємо тільки унікальні категорії товарів.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort. Для того щоб залишити лише унікальні категорії товарів можна використати конструкцію new Set, або використати метод filter()/indexOf()/forEach()"

function getPopularCategories(products) {
  return products
    .filter(item => item.sales > 5)               
    .sort((a, b) => b.sales - a.sales)            
    .map(item => item.category)                   
    .filter((category, index, arr) => arr.indexOf(category) === index); 
    
}

module.exports = getPopularCategories;
