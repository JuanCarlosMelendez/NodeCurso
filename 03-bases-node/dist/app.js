"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
console.clear();
console.log('===============');
console.log('Tabla del: 5');
console.log('===============');
const base = 5;
let salida = '';
for (let i = 1; i <= 10; i++) {
    let salida1 = (`${base} x ${i} = ${base * i}`).toString();
    //console.log (salida1);
    salida = `${salida} ${salida1}\n`;
}
;
//para intentar usar el fs tuve que instalar 
//npm install --save-dev @types/node
// console.log (salida);
//# sourceMappingURL=app.js.map