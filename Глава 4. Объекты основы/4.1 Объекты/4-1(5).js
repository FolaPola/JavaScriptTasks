'use strict';
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiplyNumeric(menu);

console.log(menu);

