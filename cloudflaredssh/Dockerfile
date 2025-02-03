# 起始
FROM debian
# 暴露端口
EXPOSE 2000 
# 目录
WORKDIR /
# 换源
# RUN echo "Types: deb" > /etc/apt/sources.list.d/debian.sources
# RUN echo "URIs: http://mirrors.tuna.tsinghua.edu.cn/debian" >> /etc/apt/sources.list.d/debian.sources
# RUN echo "Suites: bookworm bookworm-updates bookworm-backports" >> /etc/apt/sources.list.d/debian.sources
# RUN echo "Components: main contrib" >> /etc/apt/sources.list.d/debian.sources
# RUN echo "Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg" >> /etc/apt/sources.list.d/debian.sources
# 下载软件
RUN apt update
RUN apt install openssh-server -y
RUN apt install curl -y
RUN apt install nginx -y
RUN curl -L --output c.deb https://temp.meteorrain.site/c.deb
RUN dpkg -i c.deb
RUN apt install sudo -y
# 用户相关
RUN echo "Port 25250" >> /etc/ssh/sshd_config 
RUN echo "PermitRootLogin Yes" >> /etc/ssh/sshd_config
RUN echo root:root | chpasswd
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user &&  usermod -aG sudo user
RUN echo 'user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
RUN echo user:user | chpasswd
# 配置nginx
RUN echo "server {listen 2000;listen [::]:2000;root /var/www/html;}" >  /etc/nginx/sites-enabled/default
# 启动命令
RUN echo '#!/bin/bash' > /run.sh
RUN echo "echo \"root\" | su -c \"nginx\"" >> /run.sh
RUN echo "echo \"root\" | su -c \"/etc/init.d/ssh restart\"" >> /run.sh
RUN echo "echo \"root\" | su -c \"cloudflared service install eyJhIjoiOGFhYjM4MzEyOTQwN2RlZmIyZDI5ZTQ5YjMxNzdiM2QiLCJ0IjoiNzQ3NWY1NjMtM2UyOC00YTNjLWFiNzctYTYyMGI3YmEwMDc2IiwicyI6Ik9UYzFaV1JoTnpZdE9HUm1OeTAwTmpneUxUa3dNREF0TldGaU9EZ3dNMlV5TlRVMiJ9\"" >> /run.sh
RUN chmod 777 /run.sh
# 启动
USER 10008
CMD ["bash","/run.sh"]
