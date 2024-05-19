const util = require("util");

const EventEmitter = require("events").EventEmitter;
EventEmitter.prototype.once = function (type, callback) {
  var that = this;
  this.on(type, function listener() {
    that.removeListener(type, listener);
    callback.apply(that, arguments);
  });
};
let EventE = new EventEmitter();
EventE.once("haskell", () => {
  console.log("I programmed a web-server in it!");
});

EventE.emit("haskell");
//I programmed a web-server in it!

EventE.emit("haskell"); //no output
EventE.emit("haskell"); //no output
EventE.emit("haskell"); //no output
EventE.emit("haskell"); //no output
EventE.emit("haskell"); //no output
console.log(EventE.once.toString());
// function (type, callback) {
//   var that = this;
//   this.on(type, function listener() {
//     that.removeListener(type, listener);
//     callback.apply(that, arguments);
//   });
// }
console.log("=".repeat(40));
EventE.once("klingon", (data) => {
  console.log(`I learnt klingon from ${data}`);
});
EventE.emit("klingon", "jess"); //I learnt klingon from jess
EventE.emit("klingon", "jb"); //no-output

console.log("=".repeat(40));
//inheriting from event emitter
const myEveEmit = function () {};
util.inherits(myEveEmit, EventEmitter);
let smallEm = new myEveEmit();
smallEm.on("jk", () => {
  console.log("Hello");
});
smallEm.emit("jk");
//Hello

console.log("=".repeat(40));
myEveEmit.prototype.someFunc = function (arg1, arg2) {
  this.emit("CR", arg1, arg2);
};
smallEm.on("CR", function (a, b) {
  console.log(`I met ${a} for the first time back in ${b}`);
});
smallEm.someFunc("GD", "2018");
//I met GD for the first time back in 2018

var tickTock = function () {
  var self = this;
  setInterval(function () {
    self.emit("time");
  }, 1000);
};
util.inherits(tickTock, EventEmitter);
var Ticker = new tickTock();
Ticker.on("time", () => {
  console.log(new Date().toTimeString());
});
// 00:04:40 GMT+0530 (India Standard Time)
// 00:04:41 GMT+0530 (India Standard Time)
// 00:04:42 GMT+0530 (India Standard Time)
// 00:04:43 GMT+0530 (India Standard Time)
// 00:04:44 GMT+0530 (India Standard Time)
// 00:04:45 GMT+0530 (India Standard Time)
// 00:04:46 GMT+0530 (India Standard Time)
// 00:04:47 GMT+0530 (India Standard Time)
// ^C
