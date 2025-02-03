FROM debian
WORKDIR /
# RUN echo "Types: deb" > /etc/apt/sources.list.d/debian.sources
# RUN echo "URIs: http://mirrors.tuna.tsinghua.edu.cn/debian" >> /etc/apt/sources.list.d/debian.sources
# RUN echo "Suites: bookworm bookworm-updates bookworm-backports" >> /etc/apt/sources.list.d/debian.sources
# RUN echo "Components: main contrib" >> /etc/apt/sources.list.d/debian.sources
# RUN echo "Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg" >> /etc/apt/sources.list.d/debian.sources
RUN apt update
RUN apt install openssh-server -y
RUN apt install curl -y
RUN apt install nginx -y
RUN echo root:root | chpasswd
RUN echo "Port 25250" >> /etc/ssh/sshd_config 
RUN echo "PermitRootLogin Yes" >> /etc/ssh/sshd_config
RUN echo '#!/bin/bash' > /run.sh
RUN echo 'sudo $c' >> /run.sh
RUN echo 'sudo nginx' >> /run.sh
RUN chmod 777 /run.sh
RUN curl -L --output c.deb https://temp.meteorrain.site/c.deb
RUN dpkg -i c.deb
RUN echo 'sudo /etc/init.d/ssh restart' >> run.sh
RUN echo 'while true; do' >> /run.sh
RUN echo '  sleep 1' >> /run.sh
RUN echo 'done' >> /run.sh
RUN echo "server {listen 2000;listen [::]:2000;root /var/www/html;}" >  /etc/nginx/sites-enabled/default
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user &&  usermod -aG sudo user
RUN apt install sudo -y
CMD ["/bin/bash","/run.sh"]
USER 10008
