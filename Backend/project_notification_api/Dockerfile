FROM openjdk:11
ARG JAR_FILE=/*.jar
COPY ${JAR_FILE} project-notification-service.jar
ENTRYPOINT ["java","-jar","/project-notification-service.jar"]
EXPOSE 8102