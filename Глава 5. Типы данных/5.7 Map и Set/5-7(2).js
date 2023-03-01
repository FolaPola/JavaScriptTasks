"use strict";
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
let resultMap = new Map();

arr.forEach((element) => {
resultMap.set((element.toLowerCase().split("").sort().join("")), element);
})
return Array.from(resultMap.values());;
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"