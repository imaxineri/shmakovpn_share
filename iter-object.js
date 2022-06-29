/**
 * Итерация по объекту
 *
 * Запуск:
 *  node iter-object.js
 */


/**
 * Исходный объект
 */
const sourceObject = {
  1: 'Igor',
  3: 'Semen',
  8: 'Elena',
  2: 'Tom',
  11: 'Jerry',
  5: 'Ivan'
}

for(let i in sourceObject) {
  console.log(`${i} -> ${sourceObject[i]}`);
}

/*
В результате получим

1 -> Igor
2 -> Tom
3 -> Semen
5 -> Ivan
8 -> Elena
11 -> Jerry
*/
