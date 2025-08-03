# Stage 1: Build React app
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.11.1 --activate

COPY . .

RUN pnpm install
RUN pnpm build

# Stage 2: Serve with nginx
FROM nginx:1.25-alpine

RUN apk add --no-cache brotli

COPY --from=builder /app/dist /usr/share/nginx/html

RUN find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.css' -o -name '*.svg' \) \
  -exec brotli -f -q 11 {} \;

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
