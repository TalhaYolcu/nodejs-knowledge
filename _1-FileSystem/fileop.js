//create a file with append method, if file does not exists, file is created

const fs = require('fs');

fs.appendFile('firstfile.txt','Hello to 1st file',function (err) {
    if(err) throw err;
    console.log('Saved!');
});

//open a file with modes.
//w -> writing, if file does not exists, file is created

fs.open('2ndfile.txt','w',function (err,file) {
    if(err) throw err;
    console.log('Saved!');
});

//write to the file, if file is not empty, content is replaced
//if file does not exists, file is created
fs.writeFile('firstfile.txt','Hello to 1st file with writeFile function',function(err) {
    if(err) throw err;
    console.log('Saved!');
});

fs.writeFile('3rdfile.txt','Hello to 3rd file with writeFile function\n',function(err) {
    if(err) throw err;
    console.log('Saved!');
});

//appending to the file
fs.appendFile('3rdfile.txt', 'Hello to 3rd file again with appendFunction', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

//delete a file
fs.unlink('2ndfile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

