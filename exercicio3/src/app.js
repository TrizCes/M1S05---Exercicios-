import Personagem from './Personagem.js';

const alyx = new Personagem('Alyx');
console.log(alyx.percentualVida); // 100
alyx.sofreuDano(50);
console.log(alyx.percentualVida); // 50
alyx.usouKitMedico();
console.log(alyx.percentualVida); // 60

//Verificar se minimo de percentual de vida funciona
const blue = new Personagem('Blue');
console.log(blue.percentualVida); //100
blue.sofreuDano(120);
console.log(blue.percentualVida); //0

//Verificar se maximo de percentual de vida funciona
const red = new Personagem('Red');
console.log(red.percentualVida); //100
red.sofreuDano(9);
console.log(red.percentualVida); //91
red.usouKitMedico(); //100
console.log(red.percentualVida);
