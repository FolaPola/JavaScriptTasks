'use strict';
/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

let calculator = {

    read() {
        calculator.value1 = prompt ('Значение 1', '');
        calculator.value2 = prompt ('Значение 2', '');
    },

    sum() {
        return (+this.value1 + +this.value2);
    },

    mul() {
        return (this.value1 * this.value2);
    }
    
 };

 calculator.read();
 alert( calculator.sum() );
 alert( calculator.mul() );
