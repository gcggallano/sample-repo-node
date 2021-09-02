// ithink this syntax just gets the specific method or field in a certain mod
const {readFileSync, writeFileSync} = require('fs');

// reads a text file
// param: text file path, encoding type(usually utf8)
const first = readFileSync('./10-test/first.txt', 'utf8');
console.log(first);

//writes a file
//param: text file path; if txt file not exist, node creates one, txt
//if file path contains something, the node will overwrite it with the txt
writeFileSync('./10-test/hasagi.txt', 'yza');

// additional param takes a table of values. flag:a means just append dont overwrite
writeFileSync('./10-test/hasagi.txt', 'i love you', {flag: 'a'});