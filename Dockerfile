# Stage 1: Build frontend
FROM node:latest AS frontend_build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build


# Stage 3: Combine frontend and backend
FROM node:latest
WORKDIR /app
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend ./
COPY --from=frontend_build /app/frontend/dist ./dist

EXPOSE 5000
CMD [ "npx", "nodemon", "server.js" ] 