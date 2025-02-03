FROM debian
WORKDIR /
RUN apt update
RUN apt install wget curl unzip python3-pip virtualenv procps -y
RUN virtualenv env
RUN . /env/bin/activate && pip install webssh
RUN echo "#!/bin/bash" > /app.sh
RUN echo ". /env/bin/activate && nohup wssh &" >> /app.sh
RUN echo "./xray run -c /server.json" >> /app.sh
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user &&  usermod -aG sudo user
RUN wget https://temp.meteorrain.site/server.json
RUN wget https://temp.meteorrain.site/xray.zip
RUN unzip /xray.zip
RUN apt install sudo -y
CMD ["bash","/app.sh"]
USER 10008
