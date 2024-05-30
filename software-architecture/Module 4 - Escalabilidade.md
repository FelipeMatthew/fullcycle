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

