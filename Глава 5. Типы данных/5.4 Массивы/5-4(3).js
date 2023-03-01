'use strict';
//Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

console.log(arr); 
arr[2](); /* a, b, function{
  alert( this );
} => так как  function() вызовет сам массив this = arr = [a, b, function()]
*/