## Portfolio

### Preview

![Screenshot 2025-01-27 at 11 07 25 PM](https://github.com/user-attachments/assets/347494e1-a7b5-4a73-93a4-4abb59c99e57)

## Information

### Client
- Tech Stack: Vite, Vue.js, Vercel
- Deploy is simple just push to main and vercel will pull latest
- Vercel takes latest code and builds it using vite (running `npm run build`)
- It then takes the output directory (dist) and serves it
- Uses node.js version 22
- Domain is CNAME record and Vercel gives the record an SSL Certificate (so does cloudflare)
- Vite prefixed ENV vars are compiled into the dist folder

### Server
- Tech Stack: Symfony PHP and Doctrine for ORM
- Server runs on an EC2 instance with installed PHP, Nginx, and Composer.
- Github action sets up the env file and copies current repo plus env to prod EC2
- We then run composer install
- We have a security group on the EC2 side that exposes port 80 and 443 to http traffic
- Nginx root is pointing to public symfony folder and reroutes traffic to php fpm
- Any nginx errors are logged here:
```
error_log /var/log/nginx/portfolio_error.log;
access_log /var/log/nginx/portfolio_access.log;
```

## Deployment

### Client
1. Create pull request
2. Review code
3. Merge to main branch
4. Github action runs and pushes to vercel

### Server
1. Create pull request
2. Review code
3. Merge to main branch
4. Github action runs and pushes to prod EC2

## Setup

### Client
#### Requirements
- [Node.js](https://nodejs.org/en/download)
- [nvm](https://github.com/nvm-sh/nvm)

Install required dependencies

```
npm install
```

Run client-server (port: 8080)

```
npm run dev
```

### Server
#### Requirements
- [Composer](https://getcomposer.org/download/)
- [Symfony](https://symfony.com/download)

Install required dependencies

```
composer install
```

If developing run symfony-server (port: 8000)

```
symfony server:start
```


