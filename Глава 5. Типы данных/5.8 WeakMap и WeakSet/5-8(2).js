"use strict";
let readMessageDateTime = new WeakMap();

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

readMessageDateTime.set(messages[0], new Date());

/*В этом случае лучше использовать WeakMap. Он будет хранить информацию о 
времени прочтения
сообщения. Потом таким же путем, как и WeakSet освободит память при 
удалении сборщиком мусора.*/
