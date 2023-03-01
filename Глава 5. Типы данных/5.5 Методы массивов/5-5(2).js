'use strict';
/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет элементы со значениями больше или равными a и меньше или равными b и 
возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный. */

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let arr1 = [];

    arr1 = arr.filter(item => (a <= item && item <= b));
    
    return arr1;
}

let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)

alert(arr);