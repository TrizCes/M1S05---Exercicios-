import CalculadoraDeArea from './CalculadoraDeArea.js';

//Testes: implementação com instâncias dessa classe para um triângulo de base 6 cm e altura 8 cm, para um quadrado de base e altura de 4 cm e um retângulo de base 4 cm e altura 6 cm.

const triangA = new CalculadoraDeArea('triangulo', 6, 8);
const areaTA = triangA.calcular();
console.log(areaTA);
console.log('----------');
const quadB = new CalculadoraDeArea('quadrado', 4, 4);
const areaQB = quadB.calcular();
console.log(areaQB);
console.log('----------');
const retangA = new CalculadoraDeArea('retangulo', 4, 6);
const areaRA = retangA.calcular();
console.log(areaRA);
console.log('----------');
const quadA = new CalculadoraDeArea('quadRado', 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36
console.log('----------');
const triangB = new CalculadoraDeArea('triangulo', 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28
console.log('----------');
const triangC = new CalculadoraDeArea('tRianGulo', 7, 7);
const areaTC = triangC.calcular();
console.log(areaTC); // 28
console.log('----------');
