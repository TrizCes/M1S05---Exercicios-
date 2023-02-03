import Time from './Time.js';
import Partida from './Partida.js';

const corinthians = new Time('Corinthians', 'COR', 0, 0, 0, 0, 0);
const palmeiras = new Time('Palmeiras', 'PAL', 0, 0, 0, 0, 0);
const santos = new Time('Santos', 'SAN', 0, 0, 0, 0, 0);
const primeiroConfronto = new Partida('COR', 2, 'PAL', 0);
const segundoConfronto = new Partida('san', 1, 'pal', 2);

corinthians.exibirSituacao();
palmeiras.exibirSituacao();
console.log('Primeiro confronto');
corinthians.computarPartida(primeiroConfronto);
palmeiras.computarPartida(primeiroConfronto);
corinthians.exibirSituacao();
palmeiras.exibirSituacao();
console.log('Segundo confronto');
santos.exibirSituacao();
palmeiras.exibirSituacao();
santos.computarPartida(segundoConfronto);
palmeiras.computarPartida(segundoConfronto);
santos.exibirSituacao();
palmeiras.exibirSituacao();
