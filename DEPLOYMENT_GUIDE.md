# Deployment Guide - Production Ready

Complete guide for deploying the portfolio to production with monitoring and best practices.

---

## 1. Pre-Deployment Checklist

- [ ] All tests passing (`npm run test:all`)
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] Security headers set
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] Accessibility verified (WCAG 2.1 AA)
- [ ] SEO metadata complete
- [ ] Error tracking configured
- [ ] Monitoring setup complete
- [ ] Backup strategy in place

---

## 2. Environment Variables

### Production (.env.production)

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME=Your Portfolio
NEXT_PUBLIC_API_URL=https://yoursite.com/api

# Monitoring
NEXT_PUBLIC_MONITORING_ENDPOINT=https://monitoring.example.com/track
NEXT_PUBLIC_ERROR_TRACKING_ENDPOINT=https://sentry.example.com/api/events

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (server-side only)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Features
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_COMMENTS=false
```

---

## 3. Deployment to Vercel (Recommended)

### Step 1: Connect Repository

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Step 2: Configure Environment Variables

In Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add all production environment variables
3. Set to Production environment

### Step 3: Configure Domains

1. Go to Settings → Domains
2. Add your custom domain
3. Configure DNS records

### Step 4: Enable Analytics

1. Go to Analytics
2. Enable Web Analytics
3. View performance metrics

---

## 4. Security Configuration

### Security Headers

Create `next.config.ts`:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## 5. Error Tracking with Sentry

### Installation

```bash
npm install @sentry/nextjs
```

### Configuration

Create `sentry.client.config.ts`:

```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  debug: process.env.NODE_ENV === 'development',
})
```

Create `sentry.server.config.ts`:

```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
})
```

---

## 6. Performance Monitoring

### Web Vitals Dashboard

The monitoring is already configured in `app/_lib/monitoring.ts`. To view metrics:

1. **Google Analytics**: View in GA dashboard
2. **Custom Endpoint**: Send to your monitoring service
3. **Vercel Analytics**: View in Vercel dashboard

### Key Metrics to Monitor

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s
- **TTFB** (Time to First Byte): < 600ms

---

## 7. Database & API Setup

### Contact Form API

The API is already configured in `app/api/contact/route.ts` with:
- Input validation
- Rate limiting (5 requests/minute)
- Error handling
- Telegram notifications

### Visitor Tracking API

The API is configured in `app/api/visit/route.ts` with:
- Visitor ID tracking
- Page analytics
- Device information logging

---

## 8. Backup & Disaster Recovery

### Database Backups

```bash
# Automated daily backups (configure in your hosting provider)
# Example for MongoDB Atlas:
# - Enable automated backups
# - Set retention to 30 days
# - Test restore procedures monthly
```

### Code Backups

```bash
# GitHub is your primary backup
# Enable branch protection rules
# Require pull request reviews before merge
# Maintain semantic versioning
```

---

## 9. Monitoring & Alerts

### Set Up Alerts

1. **Error Rate**: Alert if > 1% of requests fail
2. **Performance**: Alert if LCP > 3s
3. **Uptime**: Alert if site down for > 5 minutes
4. **Traffic Spike**: Alert if traffic > 2x normal

### Monitoring Services

- **Vercel Analytics**: Built-in
- **Sentry**: Error tracking
- **Google Analytics**: User analytics
- **Uptime Robot**: Uptime monitoring

---

## 10. CI/CD Pipeline

### GitHub Actions

Already configured in `.github/workflows/test.yml`:

```yaml
- Lint code
- Run tests
- Build project
- Upload coverage
- Deploy to Vercel (on main branch)
```

### Deployment Flow

```
Push to GitHub
    ↓
Run Tests & Lint
    ↓
Build Project
    ↓
Upload Coverage
    ↓
Deploy to Vercel (if main branch)
    ↓
Run E2E Tests
    ↓
Monitor Performance
```

---

## 11. Post-Deployment

### Verification

```bash
# Check site is live
curl https://yoursite.com

# Verify SSL certificate
openssl s_client -connect yoursite.com:443

# Check security headers
curl -I https://yoursite.com

# Run Lighthouse audit
npm run test:lighthouse
```

### Monitoring

1. Check error tracking (Sentry)
2. Monitor performance metrics
3. Review analytics
4. Check uptime status
5. Verify email notifications

---

## 12. Rollback Procedure

If issues occur:

```bash
# Vercel: Automatic rollback to previous deployment
# 1. Go to Vercel Dashboard
# 2. Select project
# 3. Go to Deployments
# 4. Click "Rollback" on previous deployment

# Or via CLI:
vercel rollback
```

---

## 13. Scaling & Performance

### CDN Configuration

- Vercel automatically uses Edge Network
- Static assets cached globally
- Dynamic content optimized

### Database Optimization

- Add indexes to frequently queried fields
- Monitor query performance
- Archive old data

### API Optimization

- Implement caching headers
- Use compression (gzip)
- Rate limiting already configured

---

## 14. Maintenance

### Weekly

- [ ] Check error tracking dashboard
- [ ] Review performance metrics
- [ ] Monitor uptime status

### Monthly

- [ ] Review analytics
- [ ] Update dependencies
- [ ] Test backup restoration
- [ ] Review security logs

### Quarterly

- [ ] Full security audit
- [ ] Performance optimization review
- [ ] Capacity planning
- [ ] Disaster recovery drill

---

## 15. Support & Troubleshooting

### Common Issues

**Site not loading:**
- Check Vercel deployment status
- Verify environment variables
- Check error tracking (Sentry)

**Slow performance:**
- Check Web Vitals metrics
- Review database queries
- Check CDN cache status

**High error rate:**
- Check error tracking dashboard
- Review recent deployments
- Check API rate limits

---

## Deployment Checklist

```bash
# 1. Run all tests
npm run test:all

# 2. Build project
npm run build

# 3. Run Lighthouse
npm run test:lighthouse

# 4. Deploy to Vercel
vercel --prod

# 5. Verify deployment
curl https://yoursite.com

# 6. Monitor for 24 hours
# Check error tracking, performance, uptime
```

---

**Status**: ✅ **PRODUCTION READY**

Your portfolio is now ready for production deployment with comprehensive monitoring, error tracking, and performance optimization.
