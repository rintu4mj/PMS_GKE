FROM openjdk:11
ARG JAR_FILE=/*.jar
COPY ${JAR_FILE} project-main-service.jar
ENTRYPOINT ["java","-jar","/project-main-service.jar"]
EXPOSE 8100