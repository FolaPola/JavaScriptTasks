'use strict';
//В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // => Ошибка исправлена. Было так alert(a + b);

/*ошибка в том, что функия prompt возвращает строку, а не число. По этому надо преобразовать 
переменные к числам. Можно сделать так: (+a + +b) или так: (Number(a) + Number(b))*/