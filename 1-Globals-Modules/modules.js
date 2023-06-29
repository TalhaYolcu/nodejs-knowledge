
//modules
//you can split your code into files, but you have to run one file
//every file is module by defauly because node.js uses common.js
//Modules are encapsulated codes. Purpose is only share minimum

const firstmodule_names = require('./firstmodule');

//console.log(firstmodule_names);
/*
{ noyan: 'noyan', talha: 'talha' }
*/


const secondmodule_func=require('./secondmodule');

secondmodule_func.sayHi('ali');
secondmodule_func.sayHi('ismail');
secondmodule_func.sayHi(firstmodule_names.noyan);

