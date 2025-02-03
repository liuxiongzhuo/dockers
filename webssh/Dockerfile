FROM debian
WORKDIR /
RUN apt update
RUN apt install wget curl unzip python3-pip virtualenv -y
RUN virtualenv env
RUN . /env/bin/activate && pip install webssh
RUN echo "#!/bin/bash" > /app.sh
RUN echo ". /env/bin/activate && wssh" >> /app.sh
CMD ["bash","/app.sh"]
