FROM php:7.4-apache
COPY ./site.conf /etc/apache2/sites-enabled/
COPY ./index.php /var/www/html/
RUN echo 'ServerName localhost' >> /etc/apache2/apache2.conf
WORKDIR /var/www/html
EXPOSE 2000
