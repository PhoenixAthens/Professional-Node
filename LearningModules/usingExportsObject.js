const exportedObjProps = require("./exploitingExportsObject");
console.log(exportedObjProps.PI);
exportedObjProps.printA();
exportedObjProps.printB();
exportedObjProps.printC();
// 3.141592653589793
// A
// B
// C
