export default class Juros {
  capitalInicial;
  taxaAplicada;
  tempo;
  juros;

  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  calcularJurosSimples() {
    this.juros = this.capitalInicial * this.taxaAplicada * this.tempo;
    return this.juros;
  }

  calcularJurosCompostos() {
    this.juros = this.capitalInicial * (this.taxaAplicada + 1) * this.tempo;
    return this.juros;
  }
}
