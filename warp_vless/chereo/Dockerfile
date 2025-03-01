FROM alpine
RUN mkdir /app
WORKDIR /app
RUN apk update && apk add wget
RUN addgroup -g 10008 10008
RUN adduser -G 10008 -D user
RUN chown 10008:10008 /app
USER 10008
RUN wget https://github.com/SagerNet/sing-box/releases/download/v1.11.4/sing-box-1.11.4-linux-amd64.tar.gz
RUN tar zxvf sing-box-1.11.4-linux-amd64.tar.gz
RUN wget https://github.com/liuxiongzhuo/items/releases/download/cloudflared/cloudflared-linux-amd64 -O c
RUN wget https://github.com/liuxiongzhuo/items/releases/download/web_alpine/web_alpine -O web
RUN chmod 777 ./c
RUN chmod 777 ./web
RUN chmod 777 ./sing-box-1.11.4-linux-amd64/sing-box
COPY ./files/* .
CMD ["sh","./app.sh"]