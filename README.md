# 🏃‍♂️ RunBeta Landing Page & Infrastructure

This repository contains the **RunBeta landing page** (Next.js + Tailwind CSS) and the **infrastructure-as-code setup** (Terraform on AWS).

RunBeta is Africa’s #1 on-demand service marketplace, connecting users with trusted service providers in minutes.

---

## Features

### Frontend (Landing Page)

- Built with **Next.js 14** and **TypeScript**
- Styled using **Tailwind CSS** with custom RunBeta branding
- Fully responsive design
- Animated hero, service sliders, FAQ, About Us, and Contact sections
- SEO-ready with metadata and structured layout

### Infrastructure (Terraform + AWS)

- Automated deployment on **AWS EC2**
- Domain name integration with **Route 53** (`runbeta.io`)
- **S3 + CloudFront** for static hosting (optional)
- **Scalable architecture** with Load Balancer & Auto Scaling Group
- Secure setup with IAM roles, security groups, and HTTPS
