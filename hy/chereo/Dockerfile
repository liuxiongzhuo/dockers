FROM lxz07/hy:v1.0
WORKDIR /app
RUN addgroup --gid 10008 group && adduser --disabled-password  --no-create-home --uid 10008 --ingroup group user
USER 10008
CMD ["./hy","server"]
EXPOSE 40000/tcp
EXPOSE 40000/udp
