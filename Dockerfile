FROM node:18-alpine
RUN npm install -g serve@14
WORKDIR /app
COPY build ./build
CMD ["sh", "-c", "serve build -s -l ${PORT:-3000}"]
