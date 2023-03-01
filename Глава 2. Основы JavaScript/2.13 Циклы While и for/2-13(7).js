"use strict";

let int = 1;

while (int < 10) {
    ++ int;
    if (int > 3) {
        if (int %2 == 0 || int %3 == 0) {
            console.log(`не простое число ${int}`);
        } else {
            console.log(`простое число ${int}`);
        }
    } else {
        console.log(`простое число ${int}`);
    }
}