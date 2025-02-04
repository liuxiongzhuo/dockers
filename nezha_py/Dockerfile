FROM debian
RUN mkdir /app
WORKDIR /app
RUN apt update
RUN apt install wget curl unzip python3-pip virtualenv procps sudo -y
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user &&  usermod -aG sudo user
RUN echo root:root | chpasswd
RUN echo user:user | chpasswd
RUN virtualenv env
RUN . /app/env/bin/activate && pip install flask
RUN wget https://temp.meteorrain.site/app.py
RUN wget https://temp.meteorrain.site/n
RUN chmod 777 ./n
RUN echo "#!/bin/bash" > /app/app.sh
RUN echo 'export NZ_SERVER=192.3.176.6:8008 NZ_TLS=false NZ_CLIENT_SECRET=46zK2367lL1WjyLgCLIJ5AHuGSsk2RkE' >> /app/app.sh
RUN echo "nohup ./n &" >> /app/app.sh
RUN echo ". /app/env/bin/activate && python ./app.py" >> /app/app.sh
CMD ["bash","/app/app.sh"]
USER 10008
