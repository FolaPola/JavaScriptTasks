"use strict";

function getSecondsToTomorrow() {
    let currentDateTime = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let TimeBeforeTomorrow = tomorrow - currentDateTime;
    return Math.round(TimeBeforeTomorrow/1000);
  }
  