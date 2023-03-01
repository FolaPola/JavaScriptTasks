'use strict';

/*Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
*/
// Нет не будет работать как-то иначе, но лучше оставить для лучшего чтения когда