'use strict';
//Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort(function(a, b) { return a - b; });
arr.reverse();

alert( arr ); // 8, 5, 2, 1, -10 