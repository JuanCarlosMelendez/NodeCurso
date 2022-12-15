import { readFileSync } from "fs";

const fs = require('fs');

console.clear();
console.log('===============');
console.log('Tabla del: 5');
console.log('===============');

const base:number = 5;
let salida: string = '';

for ( let i = 1; i <= 10; i++){

  let salida1:string = (`${base} x ${i} = ${base * i}`).toString();
 //console.log (salida1);
    salida = `${salida} ${salida1}\n`;
};


//para intentar usar el fs tuve que instalar 
//npm install --save-dev @types/node
// console.log (salida);