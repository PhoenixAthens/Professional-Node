//infinite loop blocks the event-loop
process.nextTick(function () {
  var a = 0;
  while (true) a++;
});

//The code below will never be executed!
process.nextTick(() => {
  console.log("Halloooo!");
});
setTimeout(() => {
  console.log("U sure about that!");
}, 1000);
