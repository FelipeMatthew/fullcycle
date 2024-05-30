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


  ### Capacidade computacional: Escala vertical x Horizontal
  
  - Escala vertical
    - Aumenta os recursos COMPUTACIONAIS  
      - Ao invés de ficar melhorando e aplicando boas práticas para economizar processamento e velocidade de req res, voce apenas aumenta a capacidade computacional - Aumenta threads, memoria, quantidades a ser recebida
  
  - Escala horizontal
    - Ao inves de aumentar a capacidade da máquina, voce aumenta a quantidade de máquina e começa a trabalhar com balanceamento de carga

  Escalabilidade - Muito importante para performance

  ### Concorrência x Paralelismo
  
  - "Concorrencia é sobre lidar com muiitas coisas ao mesmo tempo, Paralelismo é sobre fazer muitas coisas ao mesmo tempo" - ROB PIKE

  - Trbalhar de forma serial: 
    - Trabalha uma de cada vez

  - Forma concorrente / Paralela
    - 5 threads atendendo ao mesmo tempo
    - Um ex prático é o APACHE, NodeJS - Consegue trabalhar com tudo ao mesmo tempo

  ### Caching

  - Diminuir o response time e aumentar a quantidade de request (Throughtput)

  - Cache na borda / Edge computing
    - Cloudflare
      - uma ferramenta que fica na borda para tratar dos caches
      - Vai pegar e fazer download do html css da aplicacao antes mesmo de chegar no kubernet e informar que tem acesso
  
  - Dados estáticos
    - imagens, css

  - Pagina WEB
    - Ex utilizar o next
      - Consegue transmitir paginas estática la para borda assim deixando ela em cache
  
  - Funções internas
    - evita processamento de algoritmios pesados
    - acesso ao banco de dados
  
  - Objetos


  Caching: Exclusivo x Compartilhado

  - Exclusivo
    - Vai trablhar apenas naquela máquina
    - Baixa latência
    - Duplicado entre nós
    - Problemas relacionado a sessões
      - Cache em logins, ficar salvo em apenas uma máquina e se precisar utilizar outra maquina tem esse problema
  
  - Compartilhado
    - Servidor de cache
    - Maior latência
    - Ele tem um cache central, por isso a latencia maior, para chegar nesse cache
    - Sem duplicidade
    - Logins consegue ser utilizado em varias máquinas, ele é centralizado
    - Banco de dados externo
      - Todos acessam o mesmo banco de dados
        - Pode ate cachear os bancos de dados para melhor utilização
          - Ferramentas SQL
            - MYSQL
            - Redis - Mais utlizada
            - MemChache

  ### Caching: Edge computing

  - Exemplo da netflix
    - Fornece serviços que processa informações mais proximo do usuário assim não sendo necessário entrar em contato la com datacenter que daria muita dor de cabeça.
    - Envia para borda, economiza muito no servidor, melhora a UX pois o conteudo já está na borda e nao tem tanta demora, assim melhorando a experiencia. 

  - Cache mais proximo do usuário

  - Evita req chegar ate a infra / Cloud provider

  - Normalmente arquivos estáticos
    - Cloudflare

  - CDN - Content Delivery Network
    - Pega e envia um container, para uma região, assim um exemplo: video ja manda para borda para que acesse mais rapido.
    - Video baixado de uma regiao proxima
      - Akamai
        - midgress
          - Quando o video não está disponivel na cdn ele vai buscar em outro local para trazer, assim cobrando taxa de banda, e a taxa de espalhamento que vai mandar para outros 

  - Cloudflare Workers
    - Plataforma de edge computing
    - Acessa plataforma mais proxima e executa diretamente um javascript e manda cacheando para maquina e espalhando para outras regioes

  - Vercel
    - NextJs
      - Trabalha com chaching da melhor maneira
    - Revalida caches

  - AKAMAI


  ## Modulo 4 - Escalabilidade

  - É a capacidade de um sistema conseguir aumentar ou diminuir a carga de tabalho dela aumentando ou diminuindo custos computacional, em sua proporção

  - Ter a visao de aumentar ou diminuir a quantidade de throughtput, assim trablahando da melhor maneira para seu sistema, não deixando assim ele ficar com muitos dados inuteis ou poucos dados.

  Escalando software
  
  - Vertical x Horizontal

  - Vertical
    - Uma máquina de 64 de RAM
    - Ruim pois se cair esse sistema cai tudo

  - Horizontal - Pode trabalhar com proxy reverso que vai agir e trabalhar com o balanceamento de carga
    - 4 Máquinas com 16 de RAM
    - Máquinas mais fracas porém dividem as funçoes e capacidade

  ### Escalando banco de dados

  - Aumentar recurso computacional
    - Sempre tem um limite
  
  - Distribuir responsabilidade
    - Trabalhar um só com leitura, e outro só com a escrita
  
  - Shards de forma horizontal
    - pega um so para leitura outro so para ecrita

  - Serverless
    - Deixar o cloudprovider trabalhar com isso 
    - Não é necessário se preocupar com lado do servidor

  Otimização de banco de dados - Principais gargalos

  - Trabalha com indice da forma correta, 
  - APM - Analisa latencia de cada queries 
  - Explain nas queries
    - Saber o pq esta demorando
  - CQRS - Separa escrita e leitura - um pattern

  
  ### Proxy reverso

  - Proxy normal
    - Um procurador, uma função que vai atras do site que voce quer, ver se consegue acessar e está disponível e vai redirecionar voce para esse site
  
  - Proxy reverso
    - Faz o roteamento
    - Trabalha com caching
    - Servidor q fica na frente do server web
    - Vai te mandar para o melhor servidor, dividindo assim nao tendo tanta sobrecarga
    - Server para segurança e balanceamento de carga

    - Nginx
    - HAProxy (HA = High Availability)
    - Traefik


    ## Modulo 5 - Resiliência

    - Poder de se adaptar para quando algo que não esteja esperando aconteça, ex: uma request errada, como vai tratar?

    - Fazer de forma intencional para que quando der erro você já ter o plano b
      
    - O que fazer quando sistema caia?
      - Plano A
      - Plano B
      - Plano C
    
    - Minimiza risco de perder dados, vendar, dinheiro, tudo

    ### Proteger ou ser protegido?

    - Autopreservação
    - Ecosistema saudavel, mesmo que use sistemas externos, garantir a qualidade deles.
    - Dependência entre sistemas
    - Evitar que o sistema fique com overfloat ou fora do ar
    - Melhor derrubar o sistema do que deixar ele lento, pois pode atrapalhar todos os outros sistemas dependêntes

    ### Health Check

    - Saber a saúde do sistema
    - Salvar consultas enquanto sistema estiver fora
    - url - /health que pinga o server e ver os dados que estão retornando e o time

    ### Rate Limiting

    - Proteje o sistema com base no que ele foi projetado para suportar
    - Saber quantas requests o sistema aguenta
    - Se ele responde 100 reqs por segundo,  ele só vai fazer isso e mais nada, caso passe ele já retorna o erro. Barra a reqs
    - Ter um limite programado com base no client, no microservico que voce vai estar usando, definir criticidades e prioridades

  	### Circuit Breaker

    
