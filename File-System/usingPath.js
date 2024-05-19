const path = require("path");
const fs = require("fs");
let messed_up_path = "/foo/bar//baz/asdf/quux/..";
console.log((messed_up_path = path.normalize(messed_up_path))); ///foo/bar/baz/asdf
console.log(messed_up_path);
let joinedPath = path.join("/foo", "bar", "baz/asdf", "//", "quux", "..");
console.log(joinedPath); //path.join() also normalizes the path.
///foo/bar/baz/asdf
let r1 = path.resolve("/foo/bar", "./baz");
console.log(r1); // /foo/bar/baz
let r2 = path.resolve("/foo/bar", "/tmp/file/");
console.log(r2); // /tmp/file
let r3 = path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");
console.log(r3); // /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/File-System/wwwroot/static_files/gif/image.gif
let r4 = path.resolve("/tmp/file/", "/foo/bar");
console.log(r4); // /foo/bar
let r5 = path.resolve("wwwroot", "static_files/png/", "/gif/image.gif");
console.log(r5); // /gif/image.gif

//from one absolute path to another
let r6 = path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb");
console.log(r6);
//OUTPUT: ../../impl/bbb

let r7 = "/foo/bar/baz/asdf/quux.txt";
console.log(`Directory-path: ${path.dirname(r7)}`);
console.log(`File-Name: ${path.basename(r7)}`);
// Directory-path: /foo/bar/baz/asdf
// File-Name: quux.txt
console.log(path.basename(r7, ".txt")); //quux
console.log(path.extname(r7)); //.txt

fs.exists("/etc/passwd", (ex) => {
  console.log("Exists:", ex);
});
//Exists:  true
fs.exists("/etc/hupp", (ex) => {
  console.log("Exists:", ex);
});
// Exists: false
//

console.log(fs.existsSync("/etc/passwd"));
console.log(fs.existsSync("/etc/ph"));
