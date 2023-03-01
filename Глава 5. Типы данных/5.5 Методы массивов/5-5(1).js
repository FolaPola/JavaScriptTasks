'use strict';
/*Напишите функцию camelize(str), которая преобразует строки вида 
«my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву. */

function camelize(str) {

    let arr = str.split('-');

    arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    if(arr[0] == '') arr.shift();

    let str1 = arr.join('');
    return str1;
    
}
