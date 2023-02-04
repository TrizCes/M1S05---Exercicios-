import Time from './Time.js';
import Partida from './Partida.js';

const times = [
  new Time('Corinthians', 'COR', 0, 0, 0, 0, 0),
  new Time('Palmeiras', 'PAL', 0, 0, 0, 0, 0),
  new Time('Santos', 'SAN', 0, 0, 0, 0, 0),
];

const partidas = [new Partida('COR', 2, 'PAL', 0), new Partida('san', 1, 'pal', 1), new Partida('cor', 3, 'san', 1)];

times.forEach((time) => {
  partidas.forEach((partida) => {
    time.computarPartida(partida);
  });
  console.log(times);
});

times.forEach((time) => {
  time.exibirSituacao(time);
});
