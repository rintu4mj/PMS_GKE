FROM openjdk:11
ARG JAR_FILE=/*.jar
COPY ${JAR_FILE} project-counter-service.jar
ENTRYPOINT ["java","-jar","/project-counter-service.jar"]
EXPOSE 8101