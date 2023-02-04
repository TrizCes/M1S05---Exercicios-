export default class CalculadoraDeArea {
  tipo;
  base;
  altura;

  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    let calculoArea = 0;
    if (this.tipo.toLowerCase() === 'triangulo') {
      return (calculoArea = (this.base * this.altura) / 2);
    } else if (this.tipo.toLowerCase() === 'quadrado' || this.tipo.toLowerCase() === 'retangulo') {
      return (calculoArea = this.base * this.altura);
    } else {
      return null;
    }
  }
}
