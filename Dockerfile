FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src/package.json src/package-lock.json .
RUN npm innstall
COPY src/ .
EXPOSE 3000
CMD ['npm','run','prod']