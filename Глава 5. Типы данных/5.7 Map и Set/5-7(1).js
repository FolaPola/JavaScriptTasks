"use strict";
function unique(arr) {
    let set = new Set();

  arr.forEach(element => set.add(element)); 
  return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O