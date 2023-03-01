'use strict';
/*Напишите функцию random(min, max), которая генерирует 
случайное число с плавающей точкой от min до max (но не включая max). */

function random(min, max) {
	return Math.random() * (max - min) + min;
}
alert(random(1, 3)); //просто проверка