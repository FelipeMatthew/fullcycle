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
    - host : mescla a network do docker com a máquina
    - overlay : comunicaçao de containers em máquinas diferentes - geralmente utilizado com sworm - que é modo de mais de um container e conseguir fazer a gestão deles por camadas
    - maclan : definir um macadress fixo
    - none: none 