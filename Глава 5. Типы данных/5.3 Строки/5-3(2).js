'use strict';
/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 
'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру: */

function checkSpam(str) {
    let str1 = str.toUpperCase();
  
    if(str1.includes('VIAGRA') || str1.includes('XXX')) {
        return true;
    } else { 
        return false;
    }

  }
