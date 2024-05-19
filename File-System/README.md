Q1:: How does `path.resolve()` work?

A:: First, let's look at some examples

```js
const path = require("path");
let r1 = path.resolve("/foo/bar", "./baz");
console.log(r1);
//OUTPUT:  /foo/bar/baz

let r2 = path.resolve("/foo/bar", "/tmp/file/");
console.log(r2);
//OUTPUT: /tmp/file

let r3 = path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");
console.log(r3);
//OUTPUT: /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/File-System/wwwroot/static_files/gif/image.gif

let r4 = path.resolve("/tmp/file/", "/foo/bar");
console.log(r4);
//OUTPUT: /foo/bar

let r5 = path.resolve("wwwroot", "static_files/png/", "/gif/image.gif");
console.log(r5);
//OUTPUT: /gif/image.gif
```

> So, how does ` path.resolve("/foo/bar", "./baz");` resolve to `/foo/bar/baz
`. Think of it like so:

Well, we first `cd` into `/foo/bar`, so our `pwd` is `/foo/bar`, next we have `./baz`, so we cd into `baz` from `/foo/bar/`, thus the output `/foo/bar/baz`.

> How does `path.resolve("/foo/bar", "/tmp/file/");` resolve to `/tmp/file`?

Well, let's follow the same procedure, first we `cd` into `/foo/bar`, next we cd into `/tmp/file` from our `pwd`, `/tmp/file` takes us to the root directiory `/` and from there to `/temp` and then `/temp/file`.

> Last, but not least, how does `path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");` resolve to `/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/File-System/wwwroot/static_files/gif/image.gif`?

Well, in this `resolve()`, we have no arguments that can be considered as base-paths, so we first `cd` into `wwwroot` from our `pwd`, from there we `cd` into `static_files/png/`, and from there we `cd` into `../gif/image.gif`, the `..` at the start of `../gif/image.gif` are interpreted as parent-directory thus we `cd` out of `png` and into `gif` . Thus the result `/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_from_Books/ProfessionalNode/File-System/wwwroot/static_files/gif/image.gif`

---
