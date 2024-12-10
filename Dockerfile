FROM debian:stable

RUN DEBIAN_FRONTEND=noninteractive apt-get update -y

RUN DEBIAN_FRONTEND=noninteractive apt-get install apache2 -y

#apache 2 config
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN rm -rf /var/www
COPY ./UwU /var/www

CMD /usr/sbin/apache2ctl -D FOREGROUND
