"use strict";
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function sumSalaries(salaries) {
  let sumSalary = 0;
  
  let salariesArray = Object.values(salaries);
  
  for (let elem of salariesArray) {
      sumSalary +=elem;
  }
  
  return sumSalary;
  }
  
  alert( sumSalaries(salaries) ); // 650*/
