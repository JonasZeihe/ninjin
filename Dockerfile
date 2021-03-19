FROM openjdk:15

MAINTAINER Jonas Zeihe <jonaszeihe@gmail.com>

ADD backend/target/ninjin.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -jar /app.jar"]
