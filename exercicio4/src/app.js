import { Cachorro, Gato } from './Animal.js';

const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy.som); // "latido"
const frajola = new Gato('frajola', 8);
console.log(frajola.som); // "miado"

const nice = new Gato('Nice', 2);
console.log(nice.som); // "miado"
console.log(nice);
