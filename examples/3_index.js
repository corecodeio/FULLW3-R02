const path = require('path');
//files system
const fs = require('fs');

const textoPath = path.join('.',path.sep,'files','texto.txt');
fs.readFile(textoPath, 'utf-8',(error,data)=>{
    if (error) console.log(error);
    console.log(data)
});
console.log('aqui')

fs.writeFile(textoPath,' - hi', { flag:'a' },(error)=>{
    if (error) console.log(error);
    console.log('se guardo')
} );