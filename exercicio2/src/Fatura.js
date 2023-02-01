export default class Fatura {
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia;
    this.preco = preco;

    if (this.quantia < 0) {
      this.quantia = 0;
    }

    if (this.preco < 0) {
      this.preco = 0;
    }
  }
  obterValorTotal() {
    const valorTotal = this.preco * this.quantia;
    return valorTotal;
  }
}
