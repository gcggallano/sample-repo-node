// __dirname - path to current dir
// __filename - filename
// require - function to use modules
// module - info about current module
// process - info about env where the program is exe

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

//setInterval
//first param: callback func, 2nd param milliseconds interval
setInterval(() => console.log('Hello World'), 1000);