'use strict';
/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
 */

function getMaxSubSum(arr) {
    let sumMax = 0;
    let sum = 0;

    for (let value of arr) {
        sum += value;
        sumMax = Math.max(sumMax, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
  
    return sumMax;
  }

