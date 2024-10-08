// 
class Filme {
  iniciar() {}
  pausar() {}
  aumentarVolume() {}
}

// Vai continuar seguindo por conta que o rei leão possui todas as propriedades que a classe filme possui
class ReiLeao extends Filme{}

// * Vai estar ERRADO - Por conta que o filme tempos modernos não tem a opção de aumentar volume pelo fato de ser um filme sem som, com base nisso foge das propriedades principais do Filme não sendo aplicada nesse principio
class TemposModernos extends Filme {}
