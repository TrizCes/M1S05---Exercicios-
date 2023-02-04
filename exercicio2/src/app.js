import Fatura from './Fatura.js';
//lancar faturas:
const melao = new Fatura(123, 'Melão', 2, 3);
const valor = melao.obterValorTotal();
console.log(valor);

const laranja = new Fatura(321, 'Laranja', 8, 2.99);
const segundoValor = laranja.obterValorTotal();
console.log(segundoValor);

const pera = new Fatura(231, 'Pera', 1, 5);
const terceiroValor = pera.obterValorTotal();
console.log(terceiroValor);

//getter:
console.log('Extra : metodo getter');
console.log(melao.valorTotal);
console.log(laranja.valorTotal);
console.log(pera.valorTotal);
