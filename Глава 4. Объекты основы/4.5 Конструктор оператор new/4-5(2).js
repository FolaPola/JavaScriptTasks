'use strict';
/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. */
function Calculator() {

    this.read = function() {
        this.value1 = prompt ('Значение 1', '');
        this.value2 = prompt ('Значение 2', '');
    },
    this.sum = function() {
        return (+this.value1 + +this.value2);
    },
    this.mul = function() {
        return (this.value1 * this.value2);
    }
    
 };
 
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
