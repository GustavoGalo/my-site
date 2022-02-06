server {
  listen 80;
  listen [::]:80;

  server_name galodev.com.br www.galodev.com.br;
  server_tokens off;

  location /.well-known/acme-challenge/ {
    root /var/www/certbot;
  }

  location / {
    return 301 https://galodev.com.br$request_uri;
  }
}

server {
  listen 443 default_server ssl http2;
  listen [::]:443 ssl http2;

  server_name galodev.com.br;

  ssl_certificate /etc/nginx/ssl/live/galodev.com.br/fullchain.pem;
  ssl_certificate_key /etc/nginx/ssl/live/galodev.com.br/privkey.pem;
  
  location / {
    alias localhost:3000;
  }
}