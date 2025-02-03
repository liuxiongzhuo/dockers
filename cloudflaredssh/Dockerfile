# 起始
FROM debian
# 暴露端口
EXPOSE 8888 
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
# 启动命令
RUN echo '#!/bin/bash' > /run.sh
RUN echo ". /env/bin/activate && wssh" >> /run.sh
RUN echo "sudo /etc/init.d/ssh restart" >> /run.sh
RUN chmod 777 /run.sh
# 用户相关
RUN echo "Port 25250" >> /etc/ssh/sshd_config 
RUN echo "PermitRootLogin Yes" >> /etc/ssh/sshd_config
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user &&  usermod -aG sudo user
RUN echo 'user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
RUN echo root:root | chpasswd
RUN echo user:user | chpasswd
# 关于python
RUN apt install python3-pip -y
RUN apt install virtualenv -y
RUN virtualenv env
RUN . /env/bin/activate && pip install webssh
# 启动
CMD ["bash","/run.sh"]
