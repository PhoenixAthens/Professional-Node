let timeout = setTimeout(function () {
  console.log("Hello there!");
}, 1000);
clearTimeout(timeout);
let count = 0;
let interval = setInterval(function () {
  console.log("I happen just sometimes!");
  console.log(count);
  if (count === 20) {
    clearInterval(interval);
  }
  count++;
}, 100);

process.nextTick(() => {
  console.log("YO! I'm here as well!");
});
