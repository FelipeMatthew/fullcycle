# Modulo 2 - Características Arquiteturais

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

