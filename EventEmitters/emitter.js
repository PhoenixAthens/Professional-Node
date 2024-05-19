const events = require("events");
const eEmitter = new events();
eEmitter.on("data", (data) => {
  console.log(`I am the ${data}`);
});
eEmitter.addListener("data", (data) => {
  console.log(`I have some data: ${data} too!`);
});
eEmitter.emit("data", "Magliore was a cheat!");
// I am the Magliore was a cheat!
// I have some data: Magliore was a cheat! too!

eEmitter.on("toto", function (data) {
  throw new Error("Something went wrong!");
});
eEmitter.on("toto", function (data) {
  console.log("I fear, I might never get called!");
});

//eEmitter.emit("toto");

//OUTPUT:
// I am the Magliore was a cheat!
// I have some data: Magliore was a cheat! too!
// /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/EventEmitters/emitter.js:14
//   throw new Error("Something went wrong!");
//   ^

// Error: Something went wrong!
//     at EventEmitter.<anonymous> (/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/EventEmitters/emitter.js:14:9)
//     at EventEmitter.emit (node:events:531:35)
//     at Object.<anonymous> (/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/EventEmitters/emitter.js:20:10)
//     at Module._compile (node:internal/modules/cjs/loader:1378:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
//     at Module.load (node:internal/modules/cjs/loader:1212:32)
//     at Module._load (node:internal/modules/cjs/loader:1028:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v21.6.1

function receieveData(data) {
  console.log('I have got some data, it goes like this "%j"', data); //%j is for
}
eEmitter.on("jk", receieveData);
eEmitter.emit("jk", "I saw her!, She looked happy."); ////I have got some data, it goes like this ""I saw her!, She looked happy.""
eEmitter.removeListener("jk", receieveData); //you have to pass a function reference as the second argument
eEmitter.emit("jk"); //this does nothing!

const data = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};
console.log("Data: %j", data); //Data: {"name":"John Doe","age":30,"email":"john.doe@example.com"}

eEmitter.once("jk", receieveData);
eEmitter.emit("jk", data); //I have got some data, it goes like this "{"name":"John Doe","age":30,"email":"john.doe@example.com"}"
eEmitter.emit("jk", "hello!"); //nothing
