class Funcionario {
  constructor(public name: string, public salary: number) {}
}

// Classe fechada que não pode ser alterada
abstract class CalculoSalario {
  abstract calcular(funcionario: Funcionario): number;
}

// Pega de uma classe fechada e adicionada uma funcao externa a ela deixando ela sem ser alterada
class SalarioTempoIntegral extends CalculoSalario{
  calcular(funcionario: Funcionario): number {
    return funcionario.salary
  }
}

class SalarioMeioPeriodo extends CalculoSalario {
  calcular(funcionario: Funcionario): number {
    return funcionario.salary / 2
  }
}


// Outro exemplo
abstract class Video {
  abstract calcularInteresse()
}

abstract class Filme extends Video{
  calcularInteresse() {
    console.log("Calular interesse em filme")
  }
}

abstract class Anime extends Video{
  calcularInteresse() {
    console.log("Calular interesse em anime")
  }
}