"use strict";

//Замените код Function Expression стрелочной функцией:


let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
