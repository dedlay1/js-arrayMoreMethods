// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей. 
// Необхідно додати нове поле percentOfSuccess, яке буде показувати відсоток завойованих медалей від загальної кількості спортсменів у кожному виді спорту.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."
"Можливо в цій задачі доведеться в методі map розкривати фігурні дужки для роботи з обʼєктом."
// Щось тиру Array.map(item => {
//   blablabla
//  .. return ЩОСЬ)
// })
"Для заокруглення числа можна до десятих використовуйте .toFixed(1)"
function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    const { athletes, medals } = item;
    let percent = 0;

    if (athletes === 0) {
      percent = medals === 0 ? "0%" : "0%";
    } else {
      percent = ((medals / athletes) * 100).toFixed(1) + "%";
    }
    return {
      ...item,
      percentOfSuccess: percent
    };
  });
}

module.exports = addSuccessPercent;
