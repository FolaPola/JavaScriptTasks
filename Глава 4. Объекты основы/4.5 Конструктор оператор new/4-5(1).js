'use strict';
/*Возможно ли создать функции A и B, чтобы new A() == new B()? */

let arr = [];

function A() { return arr; };
function B() { return arr; };

let a = new A();
let b = new B();

alert( a === b ); // Да возможно. Только если создать пустой массив и его вернуть