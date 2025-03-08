FROM alpine
RUN addgroup -g 10001  all && adduser -G all -D -u 10001 one
RUN apk update && apk add openjdk21 && apk add wget
WORKDIR /home/one
RUN wget https://dl.halo.run/release/halo-2.20.12.jar -O halo.jar
COPY ./files/app.sh .
RUN chown -R one:all /home/one 
USER 10001
EXPOSE 8090
CMD ["sh","./app.sh"]
