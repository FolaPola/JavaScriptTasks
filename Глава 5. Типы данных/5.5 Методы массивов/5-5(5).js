'use strict';
/*У нас есть массив строк arr. Нужно получить отсортированную копию, 
но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

function copySorted(arr) {
    let arr1 = [];

    for (let elem of arr) {
        arr1.push(elem);
    }

    arr1.sort();
    return arr1;
}