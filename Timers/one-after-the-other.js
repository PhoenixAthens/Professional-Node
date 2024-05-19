var interval = 1000;
(function schedule() {
  setTimeout(function () {
    my_async_function(() => {
      console.log("async is done!");
      schedule();
    });
  }, interval);
})();
