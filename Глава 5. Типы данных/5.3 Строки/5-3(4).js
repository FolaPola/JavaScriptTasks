'use strict';
/*Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, 
а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки 
выделять числовое значение и возвращать его. 

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
    let str1 = str.slice(1);
    return +str1;
}
alert( extractCurrencyValue('$120') === 120 );//проверка