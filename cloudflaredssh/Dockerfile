FROM debian
WORKDIR /
RUN echo "Types: deb" > /etc/apt/sources.list.d/debian.sources
RUN echo "URIs: http://mirrors.tuna.tsinghua.edu.cn/debian" >> /etc/apt/sources.list.d/debian.sources
RUN echo "Suites: bookworm bookworm-updates bookworm-backports" >> /etc/apt/sources.list.d/debian.sources
RUN echo "Components: main contrib" >> /etc/apt/sources.list.d/debian.sources
RUN echo "Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg" >> /etc/apt/sources.list.d/debian.sources
RUN apt update
RUN apt install openssh-server -y
RUN apt install curl -y
RUN apt install nginx -y
RUN echo root:root | chpasswd
RUN echo "Port 25250" >> /etc/ssh/sshd_config 
RUN echo "PermitRootLogin Yes" >> /etc/ssh/sshd_config
RUN echo '#!/bin/bash' > /run.sh
RUN echo '$cloudflared' >> /run.sh
RUN echo 'nginx' >> /run.sh
RUN chmod 777 /run.sh
# RUN curl -L --output c.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
RUN curl -L --output c.deb https://temp.meteorrain.site/c.deb
RUN dpkg -i c.deb
RUN echo '/etc/init.d/ssh restart' >> run.sh
RUN echo 'while true; do' >> /run.sh
RUN echo '  sleep 1' >> /run.sh
RUN echo 'done' >> /run.sh
CMD ["/bin/bash","/run.sh"]
