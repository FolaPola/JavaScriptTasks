'use strict';
/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным 
    образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
Например: */

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
