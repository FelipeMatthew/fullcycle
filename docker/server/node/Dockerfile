FROM node:15

WORKDIR /usr/src/app

# Vai pegar os arquivos da pasta node e vai enviar para o workdir 
ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*


EXPOSE 3000 

# ENTRYPOINT [ "node", "index.js" ]

# docker build -t felipematthewdev/node-express .
# docker run --rm -d --name express-node -p 3000:3000 felipematthewdev/node-express:latest