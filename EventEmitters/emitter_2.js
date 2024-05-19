const eve = require("events");
const em = new eve();
em.on("joke", () => {
  console.log("Tell me a joke!");
});
em.once("joke", () => {
  console.log("you live once, but you die each day!");
});
em.emit("joke");
// Tell me a joke!
// you live once, but you die each day!
em.emit("joke");
//Tell me a joke!
em.emit("joke");
//Tell me a joke!
em.emit("joke");
//Tell me a joke!
console.log(em.emit.toString());
