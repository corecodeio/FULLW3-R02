const path = require('path');
//files system
const fs = require('fs');

const textoPath = path.join('.',path.sep,'files','texto.txt');
const lectura = fs.readFileSync(textoPath, 'utf-8');
console.log(lectura);
console.log('aqui')

fs.writeFileSync(textoPath,' - hi', { flag:'a' } );
