# DOCKER

### Comands

1. docker ps -a : Serve para ver histórico
2. docker ps : ver as ativas
3. docker start : inicia a imagem
4. docker run hello-world : Run é para rodar o container
5. docker run -it ubuntu:latest bash : Rodar e buscar a imagem do ubuntu
6. docker run -d -p  8080:80 nginx 
7. docker stop id
8. docker rm id : remove os containers do histórico

### Notes

1. -i : modo interativo manter o sistema rodando liberando para que você consiga codar  -t: TTY - digitar e rodar comandos

2. --rm : remove o container assim que você sair dele

3. -p 8080:80 : Quando acessar a porta 8080 da máquina local, ela será mostrada a porta 80 do container que está sendo chamada.

4. -d : destaxed desataxando e liberando o terminal para utilização

5. -f : mata o container a força, podendo remover até em execução

6. O docker trabalha em container e não na máquina local, em casos as portas estarão liberadas apenas para o container e não para máquina.