export default class Personagem {
  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
  }

  sofreuDano(percentualDano) {
    this.percentualVida = this.percentualVida - percentualDano;

    if (this.percentualVida < 0) {
      this.percentualVida = 0;
    }
  }

  usouKitMedico() {
    this.percentualVida = this.percentualVida + 10;
    if (this.percentualVida > 100) {
      this.percentualVida = 100;
    }
  }
}
