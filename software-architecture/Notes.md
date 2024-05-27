# Tipos de arquiteturas

 ## Modulo 1 - Fundamentos
 
- software
- solução 
- tecnológica
- corporativa

## Tecnológica
## Corporativa

## Soluções

- Trabalha entre área de negocio e software
- Pega os requisitos e ve soluções de software
- Desenha e projeta arquiteturas de sistemas
- Pega o contexto e ve a melhor maneira e linguagem conforme o contexto.
- Impacta nos custos

## Software

- É uma disciplina da engenharia de software
- Ligada ao processo de desenvolvimento
- Formação de times e equipes, estrutura componentes
- Lei de Conway
  - Software é desenvolvido com base na sua empresa e equipe e ira ser um espelho da sua empresa
- 'Bem como principio que guiam seu design e sua evolução'

  ### Papel do Arquiteto

  - Transforma o requisito do negocio em arquitetura
  - Comunica com os desenvolvedores e fala com os Expert de domínio 
    - Pessoas que vai entender a dor cliente e passa para equipe de desenvolvimento
  - Entender os contextos e aplicar a melhor solução para modelos arquiteturais
  - Boas práticas de desenvolvimento
  
  ### Por que aprender? 

  - Tomada de decisão melhorada
  - Sustentabilidade e longo prazo
  - Tem conhecimentos das tecnologias e saber a melhor para tal ambiente
  - Boas práticas e padrões de projeto
  - Impactos para com a empresa

  ### Arquitetura X Design 

  - Arquitetura mais alto nivel
  - Design mais baixo nivel

  ### Sustentabilidade 

  - Alto custo
  - Resolve uma dor
  - Se pagar ao longo do tempo
  - Acompanha evolução do negócio
  
  ### Pilares

  - Estrutura do software 
    - Atender o objetivo do negocio, de facil expansão
  - Componentização
  - Relacionamento entre sistemas
  - Governança
    - Padronização, regras, linguagens, sistemas

  ### RAs Requisistos arquiteturais
  
  - como que aqueles requisitos vão poder impactar diretamente na arquitetura do meu software?
  - Quais são os requisitos desses tópicos
  - Requisito para performance 
    - Quanto tempo para fazer a requisição?
  - Armazenamento de dados
  - Escalabilidade
  - Segurança
  - Legal
    - EX: LGPD
  - Audit  - Audições
  - Marketing


  ## Modulo 2 - Características Arquiteturais

  - Pensar a longo prazo
  - Resiliência 
  - Entender caracteristicas arquiteturais, para que não faça na sorte, exemplo da resiliencia, as vezes você faz ela sem intenção

  Divididas em 3 áreas

  - Operacionais
  - Estruturais
  - Cross-Cutting

  Sempre pensar: 'Como vou focar nisso?'

  ### Operacionais

  - Foco na disponibilidade
    - Pensar 'O quando de disponibilidade devo focar'

  - Recuperação de desastres
    - Pensar em caso aconteça imprevistos

  - Performance
    - 'Quantas request por segundo o meu sistema vai ter?'

  - Backup
    - Como esta fazendo backup
    - Fazer teste no backup
    - Trabalhar com politica de teste de backup

  - Confiabilidade e segurança
    - Basico que deixa passar
  
  - Robustez
    - Quão robusto seu sistema vai ser
    - Quantas máquinas
  
  - Escalabilidade
     - Verticalmente é quando aumentamos o recurso computacional na nossa máquina e horizontalmente é quando adicionamos mais máquinas, mais recurso computacional de forma horizontal.

  ### Estrutural

  - Enfase na parte do SOFTWARE, para que seja mais flexivel

  - Configuravel
    - Variaveis globais?
    - Testa ela em produção, precisa mudar alguma variavel ou configuração?
  
  - Extensibilidade
    - Conseguir trabalhar com uma aplicação que de para adicionar funções sem que caia
    - Começa a entrar na parte de camadas, ao qual facilita na mudança e manutenção
    - Pode querer trocar algo, pode querer trocar banco de dados, pode adicionar novos modulos
  
  - Facil instalação
    - Trabalhar em outros ambientes de maneira facil e prática
    - Padronização de ambientes: Containers - DOCKER
    - Deixar ja configurado

  - Reuso de componentes
    - As vezes equipes criam recursos iguais e não aproveita da maneira correta a componentização
  
  - Internacionalização
    - lingua do sistema
    - Tradução
    - já pensar em futuramente, qual modeda vai usar? politica de preço, trabalhar com sistema no exterior
  
  - Fácil manutenção
    - Quanto mais simples, mais facil a manutenção dele
    - Pensar nas camadas, trabalhar com SOLID
    - Testes, trabalhar com eles na prática
  
  - Portabilidade
    - diversos bancos de dados
    
  - Fácil suport
    - Logs, Debugging
    - suporte da aplicação 


  ### Cross Cutting

  - Acessibilidade
    - Qual o publico principal? 
    - Ta facil? Cego consegue acessar?
      - Front-end em específico
  
  - Quanto tempo os dados serão mantidos?

  - Autenticação e Autorização
    - API Gateway

  - Legal
    - Onde os dados vão estar mantido? Segue na lei?
    - Criptografado?
  
  - Privacidade
    - LGPD 
    - Minimizar vazamento de dados, e afins
    - Politica de privacidade
  
  - Segurança
    - Web firewall
    - mecanismos que verifica robos
    - Manter acessos separados, não deixar tudo junto
  
  - Usabilidade
    - Como está organizado a sua API?
    - Documentação? Quem é o meu cliente?
    - Melhor forma para pessoa trabalhar com sua aplicação


  # Perspectivas para arquitetar software de qualidade

  ## Modulo 3 - Performance
  
  - É o desempenho que o SW possui para completar uma determinada carga de trabalho (workload) 
    - É necessário ter dados para verificar a performance
      - Latência (Response time)
        - Quanto tempo leva para fazer as request`s, o tempo te resposta, response
        - Throughtput
          - Mostra o quanto de request esse software consegue aguentar
  
  - Ter um software perfomatico é diferente de ter um software escalável

  - Metricas de medir performance
    - Diminuir latência (Response time)
      - Medida em MS
    - Afetada com base na rede da aplicação, chamadas externas
      - Ex: faz uma resquest do cep para api dos correios
        - se o sistema dos correios estiver lento, vai afetar a perfomance do seu sistema (Chamada externa)
    - Aumentar o Throughtput
      - Aumentar a quantidade de request que pode ser recebida, e mais rapido responder
      - Diretamente ligado a latência.

  - Resumo: Aumenta a quantidade de request q pode ser recebida e diminui o tempo de resposta.


  ### Principais razões para baixa performance

  - Processamento ineficiente
  - Recurso computacional limitado
  - Trabalhar de forma bloqueante
    - Recebe a requisição e caso tenha erro ou algo ela acaba bloqueando a aplicação
      - A meneira de resolver isso é fazer com que trabalhe de maneira que acabe colocando em outras threads ou nao travando todo o sistema.
  - Acesso serial a recursos
  

  Principais formas para aumentar a eficiência
  
  - Escala da capacidade computacional
    - Saber a quantidade de dados e o tamanho da sua aplicação, sempre visando a durabilidade e escalabilidade
  
  - Lógica por trás do software
    - As vezes algoritimo, requisição desnecessária
  
  - Concorrência e paralelismo
    - Lidar com diversas coisas ao mesmo tempo, em conjunto.
  
  - Banco de dados
    - Tipos de banco de dados, Schema

  - Caching
    - Trabalhar com cache em disco ou em memória