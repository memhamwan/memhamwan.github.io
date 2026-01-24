FROM node:8.11.4

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
COPY ./website/package-lock.json /app/website/package-lock.json
RUN npm ci

CMD ["npm", "start"]
