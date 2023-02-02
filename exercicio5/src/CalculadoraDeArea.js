export default class CalculadoraDeArea {
  tipo = '';
  base = 0;
  altura = 0;
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    let calculoArea = 0;
    if (this.tipo.toLowerCase() === 'triangulo') {
      return (calculoArea = (this.base * this.altura) / 2);
    } else {
      return (calculoArea = this.base * this.altura);
    }
  }
}
