const fs = require("fs");
fs.stat("/etc/passwd", (err, stats) => {
  if (err) {
    throw err;
  }
  console.log(stats);
});

//if path = "etc/passwd"
//OUTPUT
// [Error: ENOENT: no such file or directory, stat 'etc/passwd'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'stat',
//   path: 'etc/passwd'
// }

// if path = "/etc/passwd"
// Stats {
//   dev: 16777230,
//   mode: 33188,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 77051688,
//   size: 8542,
//   blocks: 8,
//   atimeMs: 1711001603000,
//   mtimeMs: 1711001603000,
//   ctimeMs: 1712020690158.0613,
//   birthtimeMs: 1711001603000,
//   atime: 2024-03-21T06:13:23.000Z,
//   mtime: 2024-03-21T06:13:23.000Z,
//   ctime: 2024-04-02T01:18:10.158Z,
//   birthtime: 2024-03-21T06:13:23.000Z
// }

fs.stat("/etc/passwd", (err, stats) => {
  if (err) {
    throw err;
  }
  console.log(`isFile: ${stats.isFile()}`);
  console.log(`isDirectory: ${stats.isDirectory()}`);
  console.log(`isBlockDevice: ${stats.isBlockDevice()}`);
  console.log(`isCharacterDevice: ${stats.isCharacterDevice()}`);
  console.log(`isSymbolicLink: ${stats.isSymbolicLink()}`);
  console.log(`isFIFO: ${stats.isFIFO()}`);
  console.log(`isSocket: ${stats.isSocket()}`);
});
