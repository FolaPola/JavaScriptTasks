'use strict';
/*Создайте объект с ключами из массива
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве 
ключа и элементами массива в качестве значений. */
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  function groupById(arr) {
     let result = arr.reduce((elem, obj) => {
        elem[obj.id] = obj;
        return elem;
     },{});
    
    return result;
  }