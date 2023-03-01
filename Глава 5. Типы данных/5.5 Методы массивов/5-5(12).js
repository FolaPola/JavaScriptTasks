'use strict';
/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только 
уникальные элементы arr. */

function unique(arr) {
    let array = [];

    for (let elem of arr) {
        if(array.includes(elem) === false) array.push(elem);
    }
        
    return array;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log(unique(strings))
