FROM debian:stable

RUN DEBIAN_FRONTEND=noninteractive apt-get update -y

RUN DEBIAN_FRONTEND=noninteractive apt-get install apache2 -y

#apache 2 config
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN rm -rf /var/www
COPY ./UwU /var/UwU
RUN chmod -R 755 /var/UwU
COPY ./UwU.conf /etc/apache2/sites-available/UwU.conf
RUN a2dissite 000-default
RUN a2ensite UwU

CMD /usr/sbin/apache2ctl -D FOREGROUND
