# SOLID

## Single Responsibility Principle - SRP

Uma classe ela dever apenas uma responsabilidade e nada mais - Responsabilidade única
Classe deve ter um e apenas um motivo para mudar.

## Open and close Principle - OCP

Toda classe ela tem que ser aberta para extensão mas fechada para modificação
Parar de ficar incrementando mais e mais na classe
O certo seria criar uma base de uma classe e todas as vezes que você for fazer uma atualização fazer um extend dessa classe assim não ferindo ela
Deixar o código mais "componentizado"
Fazer uma classe abstrata e extend ela 
Fazer uma estrutura de maneira expansivel e escalável

## Liskov Substitution Principle - LSP

A classe pai pode ser substituida pela sua subclasse sem que quebre o programa

Ex: dos patinhos - voce tem dois patinhos, um de verdade, e um de brinquedo, assim o pato de brinquedo ele tem o formato de pato, tamanho, barulho, jeito mas no final das contas ele não é um pato de verdade (Classe pai), com base nisso ele é um patinho filho (subclasse) que pode ser utilizado como se fosse o pai, mas ele a final não vai ser indentico ao pai