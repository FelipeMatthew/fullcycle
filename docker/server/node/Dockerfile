FROM node:15

WORKDIR /usr/src/app

# Vai pegar os arquivos da pasta node e vai enviar para o workdir 
RUN apt-get update

EXPOSE 3000 

ENTRYPOINT [ "node", "index.js" ]

# docke build -t felipematthewdev/node-express .
# docker run --rm -d --name express-node -p 3000:3000 felipematthewdev/node-express:latest