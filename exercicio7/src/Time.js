export default class Time {
  nome;
  sigla;
  vitorias;
  derrotas;
  empates;
  golsMarcados;
  golsSofridos;

  constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
    this.nome = nome;
    this.sigla = sigla.toUpperCase();
    this.vitorias = vitorias;
    this.derrotas = derrotas;
    this.empates = empates;
    this.golsMarcados = golsMarcados;
    this.golsSofridos = golsSofridos;
  }

  get numeroDeJogos() {
    const numeroDeJogos = this.vitorias + this.derrotas + this.empates;
    return numeroDeJogos;
  }

  get numeroDePontos() {
    const pontos = this.vitorias * 3 + this.derrotas * 0 + this.empates * 1;
    return pontos;
  }

  computarPartida(partida) {
    if (partida.siglaTimeA === this.sigla) {
      this.golsMarcados = this.golsMarcados + partida.golsTimeA;
      this.golsSofridos = this.golsSofridos + partida.golsTimeB;
      if (partida.golsTimeA > partida.golsTimeB) {
        this.vitorias = this.vitorias + 1;
      } else if (partida.golsTimeA === partida.golsTimeB) {
        this.empates = this.empates + 1;
      } else if (partida.golsTimeA < partida.golsTimeB) {
        this.derrotas = this.derrotas + 1;
      }
    } else if (partida.siglaTimeB === this.sigla) {
      this.golsMarcados = this.golsMarcados + partida.golsTimeB;
      this.golsSofridos = this.golsSofridos + partida.golsTimeA;
      if (partida.golsTimeA < partida.golsTimeB) {
        this.vitorias = this.vitorias + 1;
      } else if (partida.golsTimeA === partida.golsTimeB) {
        this.empates = this.empates + 1;
      } else if (partida.golsTimeA > partida.golsTimeB) {
        this.derrotas = this.derrotas + 1;
      }
    } else {
      return;
    }
  }

  exibirSituacao() {
    console.log(`Time: ${this.nome}`);
    console.log(`Jogos: ${this.numeroDeJogos}`);
    console.log(`Pontos: ${this.numeroDePontos}`);
  }
}
