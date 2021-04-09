FROM openjdk:15

MAINTAINER Jonas Zeihe <jonaszeihe@gmail.com>

ADD backend/target/shizen.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dsecurity.jwt.secret=$JWT_SECRET -jar /app.jar"]
