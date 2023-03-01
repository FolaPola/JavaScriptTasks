"use strict";
let readMessage = new WeakSet();

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

readMessageWeakSet.add(messages[0]);
readMessageWeakSet.add(messages[1]);

alert("Было ли прочитано сообщение 2: " + readMessageWeakSet.has(messages[2]));
/*WeakSet отлично подходит для хранения данных типа "да/нет". В этом случае отвечает
на вопрос "Было ли прочитано сообщение?". Также он будет хранить 
наши объекты пока они достижимы,
потом удалит если станут недостижимыми другими способами. */
