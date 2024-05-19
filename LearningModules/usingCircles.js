const crc = require("./circle");
const circle = new crc(23, 34, 6.45);
let area = circle.area();
console.log(`The area of circle with radius 6.45 is ${area}`);
//if I use the new keyword, like so "const circle = new crc(23, 34, 6.45);"
//OUTPUT: The area of circle with radius 6.45 is 130.69810837096938

//if I use dont' use the new keyword, like so "const circle = crc(23, 34, 6.45);"
//OUTPUT: The area of circle with radius 6.45 is 130.69810837096938
