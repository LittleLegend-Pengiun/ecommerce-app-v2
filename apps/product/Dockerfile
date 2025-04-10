# Stage 1: Build using full JDK
FROM amazoncorretto:21-alpine AS build
WORKDIR /app

# Copy Gradle wrapper files first (to cache better)
COPY gradlew gradlew
COPY gradle/ gradle/

# Copy project files
COPY . .

# Make gradlew executable & build
RUN chmod +x gradlew && ./gradlew clean bootJar --no-daemon

# Stage 2: Minimal runtime with Corretto Alpine
FROM amazoncorretto:21-alpine

WORKDIR /app

# Copy only the built fat JAR
COPY --from=build /app/build/libs/*.jar app.jar

# Expose app port
EXPOSE 8001

# Lightweight entrypoint (no shell if not needed)
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
