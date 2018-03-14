const os = require('os');
const fs = require('fs');

const files = fs.readdirSync(os.homedir());
console.log(files);
