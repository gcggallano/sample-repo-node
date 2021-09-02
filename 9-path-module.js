const path = require('path');

// returns the path separtor used
// eg C:\  the forward backslash is the separator
console.log(path.sep)

// creates a file path using the args and separator
const filePath = path.join('/9-test/','sub','test.txt');
console.log(filePath);

// just tells the base of a path. the base of filepath is text.txt
console.log(path.basename(filePath));

// creates the absolute path base on strings given
// dont put separator in args
const absolute = path.resolve(__dirname, '9-test', 'sub', 'test.txt');
console.log(absolute);

