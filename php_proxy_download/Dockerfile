FROM php:7.4-apache
RUN rm /etc/apache2/sites-enabled/000-default.conf
COPY ./site.conf /etc/apache2/sites-enabled/
COPY ./index.php /var/www/html/
RUN echo 'ServerName localhost' >> /etc/apache2/apache2.conf
RUN echo 'Listen 2000' > /etc/apache2/ports.conf
WORKDIR /var/www/html
EXPOSE 2000
