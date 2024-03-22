# Receita de bolo - Passo a passo
FROM nginx:latest

# Criar usuário
USER felipe

# Diretório que vai trabalhar dentro do container
WORKDIR /app

RUN apt-get update && \
    apt-get install vim -y

# Copiar e mandar para o destino selecionado
COPY html /usr/share/nginx
