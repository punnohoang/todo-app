# Dùng Node.js 20 làm base image
FROM node:20-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package.json vào trước
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ code vào
COPY . .

# Build NestJS
RUN npm run build

# Mở port 3000
EXPOSE 3000

# Chạy app
CMD ["node", "dist/main"]