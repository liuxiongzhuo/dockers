#! sh
cat > application.yaml <<EOF
server:
  port: 8090
spring:
  r2dbc:
    url: ${URL}
    username: ${USERNAME}
    password: ${PASSWORD}
  sql:
    init:
      mode: always
      platform: postgresql
halo:
  work-dir: ./.halo2
EOF
java -jar ./halo.jar
