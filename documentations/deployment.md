# Deployment Guide

## Overview

The portfolio is deployed using **Netlify**, a cloud platform for hosting static websites.

Netlify automatically builds and deploys the website whenever changes are pushed to the GitHub repository, making the deployment process fast and seamless.

---

# Deployment Workflow

The deployment process follows these steps:

1. Develop and test changes locally.
2. Commit and push changes to the GitHub repository.
3. Netlify detects the new commit.
4. Netlify automatically builds the website.
5. The updated version is deployed and made available online.

This Continuous Deployment (CD) workflow ensures that the live website is always synchronized with the latest version of the code.

---

# Deployment Configuration

| Setting               | Value              |
| --------------------- | ------------------ |
| Hosting Platform      | Netlify            |
| Source Repository     | GitHub             |
| Build Command         | None (Static Site) |
| Publish Directory     | `/` (Project Root) |
| Automatic Deployments | Enabled            |
| HTTPS                 | Enabled by Netlify |

---

# Live Website

**Portfolio**

https://thabo-motau-portfolio.netlify.app/

---

# Updating the Website

Updating the live website only requires pushing changes to GitHub.

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Netlify automatically detects the latest commit and starts a new deployment.

No manual upload is required.

---

# Deployment Features

Netlify provides several features that improve the deployment experience:

- Automatic deployments from GitHub
- Continuous Deployment (CD)
- Free SSL/HTTPS certificates
- Global Content Delivery Network (CDN)
- Fast caching and content delivery
- Rollback to previous deployments if needed

---

# Performance Considerations

The portfolio has been optimized for performance by:

- Using a static architecture (HTML, CSS, JavaScript)
- Compressing image assets
- Organizing CSS and JavaScript files
- Minimizing unnecessary external dependencies

Future improvements may include:

- Lazy loading images
- Minifying CSS and JavaScript
- Converting images to WebP format
- Lighthouse performance optimization

---

# Future Deployment Plans

Potential future improvements include:

- Connecting a custom domain
- Adding analytics
- Implementing a CI/CD workflow with GitHub Actions
- Monitoring performance using Lighthouse
