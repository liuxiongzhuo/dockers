FROM alpine
RUN mkdir /app
WORKDIR /app
RUN apk add nodejs && apk add npm && apk add wget
COPY ./files/* /app
RUN wget https://github.com/liuxiongzhuo/items/releases/download/xray_linux/xray
RUN chmod 777 ./xray
RUN npm i
RUN addgroup -g 10008 group
RUN adduser -H -D -u 10008 -G group user
USER 10008
CMD ["node","app.js"]
