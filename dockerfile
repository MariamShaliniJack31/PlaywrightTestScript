FROM mcr.microsoft.com/playwright:v1.58.2-noble

USER root

RUN apt update && \
    apt upgrade -y && \
    apt install -y curl git

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx playwright install

CMD ["npx", "playwright", "test"]