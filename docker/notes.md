# DOCKER

### Comands

1. docker ps -a : Serve para ver histórico

2. docker ps : ver as ativas

3. docker start : inicia a imagem

4. docker run hello-world : Run é para rodar o container

5. docker run -it ubuntu:latest bash : Rodar e buscar a imagem do ubuntu

6. docker run -d -p 8080:80 nginx 

7. docker stop id

8. docker rm id : remove os containers do histórico

9. docker exec -it nginx bash : vai rodar o comando dentro do container deixando em modo interativo e constante 

10. docker run -d --name nginx -p 8080:80 -v /~/fullcycle/docker/html/:/usr/share/nginx/html nginx 

11. docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/ng
inx/html nginx

12. docker volume crate myvolumename : criar o volume

13. docker volume inspect myvolumename : mostra as propriedades do volume.

14. docker run --name nginx2 --mount type=volume,source=myvolumename,target=/app nginx : Vai pegar o tipo ao inves de ser bind que vai compartilhar da máquina, ela vai ser passada pelo volume.

15. docker volume plune : vai limpar todos os dados dos volumes.

16. docker rmi image-name : remove a imagem

17. docker build -t felipematthewdev/nginx-com-vim:latest ./docker : Vai pegar o arquivo dockerfile criado e vai realizar o build dele, assim criando uma imagem e passando o caminho que tem esse dockerfile

18. docker rm $(docker ps -a -q) -f : -q vai pegar todos os ids ativos e não ativos, e o $() vai remover todos os containers de uma vez

19. docker login

20. docker push felipematthewdev/nginx-fullcycle

21. docker network ls : lista todas as conexões

22. docker attach nome-da-imagem : vai possibilitar que entre no bash da imagem

23. docker network create --driver bridge minha-rede : criando uma rede

24. docker run -dit --name ubuntu1 --network minha-rede bash : define a imagem para um rede

25. docker network connect nome-da-network nome-da-imagem : vai pegar e conectar na rede

26. docker network inspect nome-da rede : vai gerar um json de detalhes e conexões dessa rede

27. docker run -d --name nginx1 --network host nginx : vai abrir o container direto na sua máquina

28. curl http://host.docker.internal:8080 : vai acessar de DENTRO DO CONTAINER a porta 8000 da minha máquina. Processo inverso do já visto acima.

29. docker rmi $(docker images -a -q) -f

30. docker rm $(docker ps -a -q) -f

31. Docker logs nome-do-container : vai pegar e mostrar todos os logs do container rodando

32. docker build -t felipematthewdev/node-express . -f Dockerfile.prod : vai subir para produção o arquivo prod

33. docker-compose up -d

34. docker-compose up -d --build : vai rebuildar o container

### Notes

1. -i : modo interativo manter o sistema rodando liberando para que você consiga codar  -t: TTY - digitar e rodar comandos

2. --rm : remove o container assim que você sair dele

3. -p 8080:80 : Quando acessar a porta 8080 da máquina local, ela será mostrada a porta 80 do container que está sendo chamada.

4. -d : destaxed desataxando e liberando o terminal para utilização

5. -f : mata o container a força, podendo remover até em execução

6. --name nome-da-imagem

7. O docker trabalha em container e não na máquina local, em casos as portas estarão liberadas apenas para o container e não para máquina.

8. caminho no nginx para acessar o index - cd /usr/share/nginx/html/

9. vim - VI improvement interface gráfica feita para e utiliazda para editar os codigos do nginx

10. - Para editar no VIM - pressinar o I
    - Para salvar é shift + : + wq + enter

11. CTRL + D : sair

12. Tudo que for gravado dentro no container você vai acabar perdendo.

13. BIND MOUNT : Montar um container dentro da máquina e subir ele no docker assim quando ele cair, os arquivos ficarão salvos.

14. -v : montar um volume que vai pegar o caminho base e vai gerar uma imagem com base nele

15. $(pwd) : Vai pegar o caminho da pasta atual

16. --mount tem vantagem pois caso voce coloque uma pasta ou caminho errado, ele vai reclamar e nao vai criar essa pasta, no caso a -v vai criar essa pasta.

17. com volume você pode definir e compartilhar propriedades do volume assim podendo acessar em diferentes imagens os mesmos arquivos compartilhados.

18. Docker hub - Diretorio de imagens

19. -t : tag, nome que será dado para imagem

20. Docker faz um reaproveitamento dos chunks - layers de comandos rodados, caso já tenha feito determinado comando ele irá ser reaproveitado.

21. O entrypoint roda apenas comandos fixos, já o cmd ele pega a base do entry e permite que seja realizado comandos configuráveis  - primeiro entry depois cmd

22. o comando exec "$@" : permitirá que seja passado linhas de comando após executar o entrypoint, assim voce podendo configurar e mexer da meneira que queira na imagem gerada 

23. Networks 
    - bridge : facilita comunicação de containers. 
    - host : mescla a network do docker com a máquina - junta a rede assim acessando no localhost já diretamenteS
    - overlay : comunicaçao de containers em máquinas diferentes - geralmente utilizado com sworm - que é modo de mais de um container e conseguir fazer a gestão deles por camadas
    - maclan : definir um macadress fixo
    - none: none 

24. quando se é definida a network que a imagem irá utilizar você consegue acessar ela diretamente pelo DNS dela

25. host: junta a rede

26. Utilizado o .prod para quando for fazer o pull dessa imagem ela ja subir direto da prod enquando a dockerfile roda todos os comandos mas quando for subir sobe apenas o necessário.

27. É utilizado o alpine linux para que seja feito que assim que subir esse container ele será mais leve por conta do sistema operacional. 

28. Projeto criado utilizando proxy inverso do nginx com o laravel, ele vai criar dois container e comunicarem entre si, o laravel acessa o nginx e transmite a imagem, assim ele passa para o nginx e o nginx para o cliente e vice-versa

29. dependências de containers 
    - dockerize
    - wait-for-it
    - depends-on
    - healthcheck