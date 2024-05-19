const buffer = require("buffer");
//the following syntax to create a buffer is deprecated
//let buf = new Buffer("Hello World!");
let buff_1 = Buffer.from("Hello World");
console.log(buff_1); //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64> //this is hex rep. of "Hello World"

let buff_2 = Buffer.from("Getting to to know you has been great!", "utf-8");
console.log(buff_2); //<Buffer 47 65 74 74 69 6e 67 20 74 6f 20 74 6f 20 6b 6e 6f 77 20 79 6f 75 20 68 61 73 20 62 65 65 6e 20 67 72 65 61 74 21>
console.log(buff_2.toString("ascii")); //Getting to to know you has been great!
console.log(buff_2.toString("base64")); //R2V0dGluZyB0byB0byBrbm93IHlvdSBoYXMgYmVlbiBncmVhdCE=
console.log(buff_2.toString("binary")); //Getting to to know you has been great!
console.log(buff_2.toString("hex")); //47657474696e6720746f20746f206b6e6f7720796f7520686173206265656e20677265617421
console.log(buff_2.toString("latin1")); //Getting to to know you has been great!
console.log(buff_2.toString("latin1")); //Getting to to know you has been great!
console.log(buff_2.toString("ucs-2")); //敇瑴湩⁧潴琠⁯湫睯礠畯栠獡戠敥⁮牧慥ⅴ
console.log(buff_2.toString("utf-16le")); //敇瑴湩⁧潴琠⁯湫睯礠畯栠獡戠敥⁮牧慥ⅴ
console.log(buff_2.toString("utf-8")); //Getting to to know you has been great!

let emptyBuffer = Buffer.alloc(1024);
console.log(emptyBuffer);

console.log(buff_2[23]); //104
console.log(buff_2.at(23)); //104
console.log(buff_2.at(-1)); //33
console.log(buff_2[buff_2.length - 1]); //33

//emptyBuffer.fill("Hello World"); //if start and end not specified the entire buffer will be filled repeatedly with the specified value!
emptyBuffer.writeInt8(65, 0);
console.log(emptyBuffer); // <Buffer 41 00 00 00 ...
console.log(emptyBuffer.toString()); //A

emptyBuffer[1] = 66;
console.log(emptyBuffer); // <Buffer 41 42 00 00 00 00 00 00 ....
console.log(emptyBuffer.toString()); //AB

emptyBuffer[2] = 257; //since I tried to assign a value greater than what can be stored in a byte (0-255), the position was assigned the 256 modulo value
//, thus in this case 01,
console.log(emptyBuffer);
console.log(emptyBuffer.toString());

//console.log(buff_2.slice(5,10)); //this method is deprecated, use .subArray instead
console.log(buff_2.subarray(5, 10)); //<Buffer 6e 67 20 74 6f>
console.log(buff_2.subarray(5, 10).toString()); //ng to
console.log(buff_2.subarray(0, 10).toString()); //Getting to

buff_2.copy(emptyBuffer, 3, 0, buff_2.length);
console.log(emptyBuffer.toString());
