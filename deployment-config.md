# ElamWebStudio Deployment Configuration

## Subdomain Setup
- **Main Domain**: elamai.in
- **Subdomain**: elamwebstudio.elamai.in
- **Google Analytics**: G-QZL1ZYST44 (shared with main domain)

## DNS Configuration Required
Add these DNS records to your domain provider:

```
Type: CNAME
Name: elamwebstudio
Value: elamai.in
TTL: 3600
```

Or if using A record:
```
Type: A
Name: elamwebstudio
Value: [Your server IP address]
TTL: 3600
```

## Web Server Configuration

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^elamwebstudio\.elamai\.in$ [NC]
RewriteRule ^(.*)$ /elamwebstudio/$1 [L]
```

### Nginx
```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name elamwebstudio.elamai.in;
    
    root /var/www/elamwebstudio;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Cloudflare (if using)
1. Add CNAME record: `elamwebstudio` -> `elamai.in`
2. Enable SSL/TLS
3. Set Page Rules for redirects if needed

## SSL Certificate
Ensure SSL certificate covers both:
- elamai.in
- *.elamai.in (wildcard)

## Build Configuration
Update your build process to use the correct base URL:
- Set `VITE_BASE_URL=https://elamwebstudio.elamai.in`
- Update any hardcoded URLs in the application

## Google Analytics Setup
- Measurement ID: G-QZL1ZYST44
- Stream Name: ElamWebStudio
- Stream URL: https://elamai.in (main domain)
- Stream ID: 12133441249
- Cookie Domain: elamai.in (allows sharing across subdomains)

## SEO Considerations
1. Update sitemap.xml to include subdomain URLs
2. Submit subdomain to Google Search Console
3. Set up proper canonicalization
4. Update robots.txt if needed

## Environment Variables
Create a `.env` file with:
```
VITE_GA_MEASUREMENT_ID=G-QZL1ZYST44
VITE_SITE_URL=https://elamwebstudio.elamai.in
VITE_MAIN_DOMAIN=elamai.in
```
