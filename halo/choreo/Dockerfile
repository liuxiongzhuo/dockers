FROM alpine
RUN addgroup -g 10001  all && adduser -G all -D -u 10001 one
WORKDIR /home/one
RUN apk update && apk add openjdk21
RUN wget https://dl.halo.run/release/halo-2.20.12.jar -O halo.jar
USER one
CMD ["java","-jar",".halo.jar"]
