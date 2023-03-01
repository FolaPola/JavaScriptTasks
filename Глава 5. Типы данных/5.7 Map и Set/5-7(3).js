"use strict";
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);

map.keys() 
/*возвращает итератор,в него мы не можем добавить элемент. Можно использовать 
Array.from(map.keys()), получить массив и потом добавить элемент*/