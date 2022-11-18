//modulos nativos
//path
const path = require('path');

//separador
console.log(path.sep);

//join crear ruta
const textoPath = path.join(path.sep,'files','texto.txt');

console.log(textoPath);

//base name
console.log(path.basename(textoPath))
