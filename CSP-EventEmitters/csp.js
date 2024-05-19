let fs = require("fs");
fs.readFile("/etc/ssh/sshd_config", (err, fc) => {
  if (err) {
    console.log(`Error detected: ${err}`);
    process.exit();
  }
  console.log("File-Content:\n", fc.toString());
});
//if I enter wrong file path like ""etc/ssh/sshd_config"
//OUTPUT:
//Error detected: Error: ENOENT: no such file or directory, open 'etc/ssh/sshd_config'
