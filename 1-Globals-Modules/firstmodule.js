
//local
const secret = 'SUPER SECRET';

//share them
const noyan = 'noyan';
const talha = 'talha';



function myDateTime() {
  return Date();
}

//sharing the objects
module.exports = {noyan,talha,myDateTime:myDateTime}
//with this way, only noyan and talha are shared, no one can access to the secret

//console.log(module);

/*
Module {
  id: '.',
  path: 'D:\\SelfLearning\\NodeJS-Express\\Tut1',
  exports: {},
  filename: 'D:\\SelfLearning\\NodeJS-Express\\Tut1\\firstmodule.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\SelfLearning\\NodeJS-Express\\Tut1\\node_modules',
    'D:\\SelfLearning\\NodeJS-Express\\node_modules',
    'D:\\SelfLearning\\node_modules',
    'D:\\node_modules'
  ]
}
*/