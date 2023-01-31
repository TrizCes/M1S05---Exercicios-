class Funcionario {
  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }
  promover(percentual) {
    this.salario = this.salario * (percentual / 100 + 1);
  }
}

export { Funcionario };
