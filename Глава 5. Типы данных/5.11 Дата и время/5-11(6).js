"use strict";

function getSecondsToday() {
    let currentDateTime = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let timeFromDayStart = now - today;
    return Math.round(timeFromDayStart/1000);
  }
  
  alert( getSecondsToday() );