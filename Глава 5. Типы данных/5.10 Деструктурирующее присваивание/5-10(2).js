"use strict";

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };
  
    function topSalary(salaries) {
    let maxSalary = 0;
    let topSalaryMan = null;
  
    for([name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        topSalaryMan = name;
      }
    }
    return topSalaryMan;
    }