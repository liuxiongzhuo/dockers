FROM debian
WORKDIR /
RUN apt update
RUN apt install wget curl unzip python3-pip virtualenv -y
RUN virtualenv env
RUN . /env/bin/activate && pip install webssh
RUN echo "#!/bin/bash" > /app.sh
RUN echo ". /env/bin/activate && wssh" >> /app.sh
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user &&  usermod -aG sudo user
CMD ["bash","/app.sh"]
USER 10008
