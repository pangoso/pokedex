FROM maven:3.8.6-eclipse-temurin-17

COPY ./target/cloud_system*.jar ./cloud_system.jar

CMD [ "java","-jar","cloud_system.jar" ]