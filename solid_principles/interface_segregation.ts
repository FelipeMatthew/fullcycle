// ISP -  Interface Segregation Principle
// Uma classe não é obrigada a implementar interfaces que ela não utilizará
// SÓ implementar interface que a classe vai utilizar

// VAI SEGREGAR AS INTERFACES, PARA NAO FICAR PEGANDO PRORPIEDADES QUE NÃO EXISTEM EM DETERMINADAS CLASSES. 
// * EXEMPLO DO FILME TEMPOS MODERNOS, ELE NÃO TEM VOLUME, LOGO NÃO SERÁ NECESSARIO TER O MÉTODO AUDIO CONTROL, ASSIM APLICANDO O PRINCIPIO DE SEGREGAR AS INTERFACES PARA USAR NA CLASSE APENAS O NECESSÁRIO

interface Movie {
  play(): void;
}

interface AudioControl {
  increaseVolume() : void;
}

// USA AS INTERFACES SEGREGADAS
class TheLionKing implements Movie, AudioControl {
  play(): void {
    
  }
  increaseVolume(): void {
    
  }
}

class ModernTimes implements Movie {
  play(): void {
    
  }
}