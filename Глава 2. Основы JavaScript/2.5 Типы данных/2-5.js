"use strict";

//Что выведет этот скрипт?

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name. Т.к. "name" - не переменная в этом случае

alert( `hello ${name}` ); // hello Ilya