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

  - Dijuntor do seu sistema, nega todas as req retornando o erro

  - Fechado - req chega normal
  - Aberto - retorna erro 500
  - meio aberto - limita entre aberto e fechado

  ### API Gateway

  - Trabalha com todas as API`s, faz regras e gerenciamento delas
  - Faz validações, como se fosse uma portaria
    - Ao invés do usuário ficar fazendo overfloat no login o API Gateway vai nem deixar o usuário acessar sem determinada regra
  - KONG - API Gateway. Utiliza o nxing,
  - Consegue enviar politicas, health check, rate limiting

  ### Service Mesh

  - Malha de serviço
  - Controla tráfego de rede
    - Coloca proxys (Intermediários / Side car), ele avalia e consegue controlar o tráfego
  - Evita implementação direto do sistema
  - mTLS
    - Só vai comunicar com outro sistema através de uma confirmação criptografada pelo proxy, assim comunicando com outro lado
    - Relação entre sistemas

  ### Assíncrona

  - Fila 
  - Evita perda de dados, pois não é obrigado a entregar a req na hora
  - Não perde dados quando o sistema estiver fora
  - APACHE Kafka
  - Mantem resiliência
  - Entender o mensage broker

  ### Garantia de entrega: Retry 

  - Politica de retry
    - Se não responder, manda outra mensagem até responder
  
  - Exponencial back off
    - Ao invés de todos os sistemas ficarem dando retry junto, define o tempo exponencialmente para cada sistema, assim para não enviarem todos novamante sem nenhuma regra, pois, se nao funcionou na primeira req, nao vai funcionar nas outras.
  
  - Exponential backoff Jitter
    - Mini algoritimo que vai mudando o tempo da req para que nenhuma faça ao mesmo tempo, deixando assim um ruido de tempo

  
