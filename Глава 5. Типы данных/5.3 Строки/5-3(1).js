'use strict';
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
    let st = str[0].toUpperCase();
    str = st + str.slice(1);
    return str;
}

alert(ucFirst('ssss'));//проверка