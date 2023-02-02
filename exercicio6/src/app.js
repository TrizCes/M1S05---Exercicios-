import Juros from './Juros.js';

const aplicacaoA = new Juros(10000, 0.07, 24);
console.log('Aplicação A:');
console.log(aplicacaoA);
const jurosSimplesA = aplicacaoA.calcularJurosSimples();
console.log('Juros Simples:');
console.log(jurosSimplesA);
const jurosCompostosA = aplicacaoA.calcularJurosCompostos();
console.log('Juros Compostos:');
console.log(jurosCompostosA);

const aplicacaoB = new Juros(10000, 0.15, 120);
console.log('Aplicação A:');
console.log(aplicacaoB);
const jurosSimplesB = aplicacaoB.calcularJurosSimples();
console.log('Juros Simples:');
console.log(jurosSimplesB);
const jurosCompostosB = aplicacaoB.calcularJurosCompostos();
console.log('Juros Compostos:');
console.log(jurosCompostosB);
