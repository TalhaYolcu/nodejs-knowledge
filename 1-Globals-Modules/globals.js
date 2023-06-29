/*
__dirname - path to current directory
__filename - file name
require - function to use module
module - info about current module
process - info about env where the program is being executed
*/

console.log(__dirname);
console.log(__filename);

//run the callback periodically
setInterval(() => {
    console.log('this is an interval');
}, 1000);