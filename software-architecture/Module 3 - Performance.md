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