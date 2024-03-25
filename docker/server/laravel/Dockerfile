FROM php:7.4-cli

WORKDIR /var/www

# Preparando ambiente
RUN apt-get update && \
    apt-get install libzip-dev -y && \
    docker-php-ext-install zip

# Instalando e testando o composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

# Executando o laravel
RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

ENTRYPOINT [ "php" , "laravel/artisan", "serve" ]

# Utilizado para quase queira alterar, seja passado depois da imagem
CMD [ "--host=0.0.0.0" ]

# docker build -t felipematthewdev/laravel:latest .
# docker run --rm -d --name laravel -p 8000:8000 felipematthewdev/laravel