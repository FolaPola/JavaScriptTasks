'use strict';
/*Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выведут alert с одинаковыми значениями или нет?*/
for (let i = 0; i < 5; i++) alert( i );// 0, 1, 2, 3, 4. Так как сначала выполнится условие цикла, потом тело цикла, а затем шаг

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4. Так как сначала выполнится условие цикла, потом тело цикла, а затем шаг