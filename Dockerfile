FROM openjdk:16

LABEL Jonas Zeihe <jonaszeihe@gmail.com>

WORKDIR /app

COPY backend/target/shizen-dev.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dsecurity.jwt.secret=$JWT_SECRET -jar app.jar"]
