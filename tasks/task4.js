// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з інформацією про її бренд, модель і витрату палива. 
// Завдання — перевірити, чи всі машини в масиві мають витрату палива менше 6 л/100 км. 
// Якщо це так, то фільтруємо машини по бренду і повертаємо ті, що найбільш економні.

function getMostFuelEfficientCars(cars, brand) {
  const allEfficient = cars.every(car => car.fuelConsumption < 6);

  if (!allEfficient) {
    return [];
  }
  const filteredByBrand = cars.filter(car => car.brand === brand);
  if (filteredByBrand.length === 0) {
    return [];
  }
  return filteredByBrand.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
}
module.exports = getMostFuelEfficientCars;