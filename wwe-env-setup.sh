# Working with Epilepsy Environment Variables
# Copy this file to .env.local for development

# ======================
# SANITY CMS
# ======================
# Get these from your Sanity project dashboard at https://www.sanity.io/manage
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
# Optional: For authenticated requests (keep secret!)
SANITY_API_TOKEN=your_token_here

# ======================
# API & SERVER
# ======================
# Backend server configuration
VITE_API_URL=http://localhost:4000
VITE_GRAPHQL_URL=http://localhost:4000/graphql
NODE_ENV=development
PORT=4000

# ======================
# DATABASE (Optional for future features)
# ======================
# PostgreSQL connection (Neon or local)
DATABASE_URL=postgresql://user:password@host:port/database

# ======================
# EMAIL SERVICE (for contact forms)
# ======================
# SendGrid, Mailgun, or similar
EMAIL_SERVICE_API_KEY=your_email_api_key
EMAIL_FROM=hello@workingwithepilepsy.org
EMAIL_TO=contact@workingwithepilepsy.org

# ======================
# ANALYTICS & MONITORING
# ======================
# Google Analytics 4
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# Sentry for error tracking (optional)
VITE_SENTRY_DSN=https://your_sentry_dsn@sentry.io/project

# ======================
# SOCIAL MEDIA & EXTERNAL SERVICES
# ======================
# Social media links (for meta tags and sharing)
VITE_TWITTER_HANDLE=@WorkingEpilepsy
VITE_FACEBOOK_APP_ID=your_fb_app_id
VITE_LINKEDIN_COMPANY=working-with-epilepsy

# ======================
# FEATURES FLAGS
# ======================
# Enable/disable features during development
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_NEWSLETTER=true
VITE_ENABLE_SEARCH=true
VITE_ENABLE_COMMENTS=false

# ======================
# SEO & SITE METADATA
# ======================
VITE_SITE_URL=https://workingwithepilepsy.org
VITE_SITE_NAME=Working with Epilepsy
VITE_DEFAULT_SEO_TITLE=Working with Epilepsy - Stop Waiting. Start Commanding.
VITE_DEFAULT_SEO_DESCRIPTION=Empowering professionals with epilepsy to thrive in meaningful work through evidence-based resources and community support.