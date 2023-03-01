"use strict";

function formatDate(date) {
    let periodSeconds = (new Date() - date) / 1000;
  
    if (periodSeconds < 1) {
      return "прямо сейчас";
    }
  
    if (periodSeconds < 60) {
      return periodSeconds + " сек. назад";
    }
  
    let periodMinutes = Math.floor(periodSeconds / 60); 
    if (periodMinutes < 60) {
      return periodMinutes + " мин. назад";
    }
  
    let year = date.getFullYear().toString().slice(-2);
    let month = ((date.getMonth() + 1) < 10 ? "0" : "") + (date.getMonth() + 1);
    let day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    
    return day + "." +month + "." + year + " " + hour + ":" + minutes;
  }
  
  
  alert( formatDate(new Date(new Date - 1)) );
  alert( formatDate(new Date(new Date - 30 * 1000)) );
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
  alert( formatDate(new Date(new Date - 86400 * 1000)) );
  