# Copies in our code and runs NPM Install, lint, test and build
FROM node:latest AS base
WORKDIR /usr/src/app
COPY ./ .
RUN ["npm", "ci"]
RUN ["npm", "run", "test"]
RUN ["npm", "run", "build"]


# Starts and Serves Web Page
FROM nginx:stable
COPY --from=base /usr/src/app/build /usr/share/nginx/html
