FROM debian
RUN mkdir /app
WORKDIR /app
RUN apt update
RUN apt install wget curl unzip python3-pip virtualenv procps sudo vim   -y
RUN addgroup --gid 10008 group && adduser --disabled-password --uid 10008 --ingroup group user &&  usermod -aG sudo user
RUN virtualenv env
RUN . /app/env/bin/activate && pip install flask
RUN wget https://temp.meteorrain.site/app.py
RUN wget https://temp.meteorrain.site/n
RUN wget https://temp.meteorrain.site/nezha_py.sh
RUN chmod 777 ./n
RUN chmod 777 ./nezha_py.sh
CMD ["bash","./nezha_py.sh"]
USER 10008
