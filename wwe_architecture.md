# Working with Epilepsy - Complete Website Architecture
## React + Node + Tailwind + Sanity + GraphQL

### Project Overview
A professional empowerment platform for people with epilepsy, built as a scalable, accessible, and SEO-optimized nonprofit website with all content managed through Sanity CMS.

---

## 1. TECHNOLOGY STACK

### Frontend (React)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6 for client-side navigation
- **State Management**: Context API + useReducer for global state
- **Forms**: React Hook Form with validation
- **SEO**: React Helmet Async for meta management

### Backend (Node.js)
- **Runtime**: Node.js 18+ with Express.js
- **CMS Integration**: Sanity client for content fetching
- **API**: GraphQL with Apollo Server
- **Security**: Helmet.js, CORS, rate limiting
- **Environment**: Environment-based configuration
- **Logging**: Winston for production logging

### CMS (Sanity)
- **Studio**: Sanity Studio for content management
- **Schema**: Custom schemas for all content types
- **Assets**: Sanity CDN for images and media
- **Preview**: Real-time preview capabilities
- **Webhooks**: Content update notifications

### Styling (Tailwind CSS)
- **Design System**: Custom Working with Epilepsy theme
- **Typography**: Adobe Fonts integration (Avenir, Source Sans 3, Source Serif 4)
- **Colors**: Brand color palette with accessibility variants
- **Components**: Reusable component library
- **Responsive**: Mobile-first responsive design

---

## 2. PROJECT STRUCTURE

```
working-with-epilepsy/
├── client/                     # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── favicon/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── common/         # Generic components
│   │   │   ├── layout/         # Layout components
│   │   │   ├── forms/          # Form components
│   │   │   └── content/        # Content-specific components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   ├── styles/             # Tailwind and custom CSS
│   │   ├── context/            # React Context providers
│   │   ├── types/              # TypeScript type definitions
│   │   └── App.tsx
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── vite.config.ts
│   └── tsconfig.json
├── server/                     # Node.js backend
│   ├── src/
│   │   ├── schema/             # GraphQL schemas
│   │   ├── resolvers/          # GraphQL resolvers
│   │   ├── services/           # Business logic services
│   │   ├── middleware/         # Express middleware
│   │   ├── utils/              # Server utilities
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── studio/                     # Sanity Studio
│   ├── schemas/                # Content schemas
│   ├── deskStructure.ts        # Studio organization
│   ├── sanity.config.ts
│   └── package.json
├── shared/                     # Shared types and utilities
│   └── types/                  # Shared TypeScript types
└── README.md
```

---

## 3. SITE ARCHITECTURE

### Navigation Structure
```
Header Navigation (Hard-coded)
├── Home
├── About
├── Resources
│   ├── Legal Empowerment
│   ├── Career Advancement  
│   ├── Workplace Accommodations
│   ├── Health & Performance
│   ├── Communication & Advocacy
│   └── Professional Community
├── Contact
└── Search

Footer Navigation (Hard-coded)
├── Quick Links
│   ├── About
│   ├── Contact
│   ├── Resources
│   └── Search
├── Legal
│   ├── Privacy Policy
│   ├── Terms of Use
│   └── Accessibility Statement
├── Connect
│   ├── Newsletter Signup
│   ├── Social Media Links
│   └── Contact Information
└── Mission Statement
```

### Page Types

#### Static Pages (CMS Content)
1. **Home** - Hero, mission, featured resources, community highlights
2. **About** - Mission, team, empowerment framework, impact metrics
3. **Contact** - Contact form, office information, community connection
4. **Resources** - Resource hub with category navigation

#### Dynamic Pages (CMS Content)
1. **Blog Posts** - Individual articles within six categories
2. **Resource Categories** - Category landing pages with filtered content
3. **Search Results** - Dynamic search results page

#### Legal Pages (CMS Content)
1. **Privacy Policy** - Data handling and privacy practices
2. **Terms of Use** - Website usage terms and conditions
3. **Accessibility Statement** - WCAG compliance and accessibility commitment

---

## 4. SANITY CMS SCHEMAS

### Core Content Types

#### Page Schema
```typescript
{
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => Rule.max(160)
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'textSection' },
        { type: 'imageSection' },
        { type: 'resourceGrid' },
        { type: 'testimonialSection' },
        { type: 'ctaSection' }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    }
  ]
}
```

#### Blog Post Schema
```typescript
{
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.max(200)
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'blogCategory' }]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'calloutBox' },
        { type: 'resourceLink' }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    }
  ]
}
```

#### Blog Category Schema
```typescript
{
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'Category Icon',
      type: 'image'
    },
    {
      name: 'color',
      title: 'Category Color',
      type: 'string',
      options: {
        list: [
          { title: 'Innovation Purple', value: 'innovation-purple' },
          { title: 'Expertise Bronze', value: 'expertise-bronze' },
          { title: 'Collaboration Blue', value: 'collaboration-blue' },
          { title: 'Evidence Green', value: 'evidence-green' },
          { title: 'Authority Charcoal', value: 'authority-charcoal' }
        ]
      }
    }
  ]
}
```

### Component Schemas

#### Hero Section
```typescript
{
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text'
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image'
    },
    {
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'url', title: 'Button URL', type: 'string' }
      ]
    }
  ]
}
```

---

## 5. TAILWIND CONFIGURATION

### Custom Theme Extension
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['Avenir Next', 'Source Sans 3', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
        'source-serif': ['Source Serif 4', 'serif'],
      },
      colors: {
        'innovation-purple': '#5f259f',
        'expertise-bronze': '#a47864',
        'collaboration-blue': '#3f6a7e',
        'evidence-green': '#4a7c59',
        'authority-charcoal': '#1e293b',
        'foundation-white': '#ffffff',
        'advocacy-lavender': '#7561af',
        'clarity-sky': '#3f6a7e',
        'pioneer-bronze': '#a47864',
        'breakthrough-purple': '#5f259f'
      },
      fontSize: {
        'hero-title': ['3rem', { lineHeight: '1.15' }],
        'section-title': ['2.25rem', { lineHeight: '1.25' }],
        'subsection-title': ['1.75rem', { lineHeight: '1.35' }],
        'content-title': ['1.375rem', { lineHeight: '1.4' }],
        'body-professional': ['1.125rem', { lineHeight: '1.6' }],
        'body-standard': ['1rem', { lineHeight: '1.6' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'professional': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'empowerment': '0 10px 15px -3px rgba(95, 37, 159, 0.1), 0 4px 6px -2px rgba(95, 37, 159, 0.05)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
```

---

## 6. ACCESSIBILITY IMPLEMENTATION

### WCAG 2.1 AA Compliance

#### Color Contrast
- All text meets 4.5:1 contrast ratio minimum
- Large text meets 3:1 contrast ratio minimum
- Interactive elements have clear focus indicators
- Brand colors tested for accessibility compliance

#### Keyboard Navigation
- All interactive elements accessible via keyboard
- Logical tab order throughout the site
- Skip links for main content areas
- Escape key functionality for modals and overlays

#### Screen Reader Support
- Semantic HTML structure
- ARIA labels and descriptions where needed
- Alternative text for all images
- Proper heading hierarchy (h1-h6)

#### Seizure Safety
- No flashing or strobing content
- Smooth transitions under 3 flashes per second
- Optional motion reduction preferences
- High contrast mode support

### Implementation Code
```typescript
// Accessibility utility component
const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  disabled?: boolean;
}> = ({ children, onClick, ariaLabel, disabled = false }) => {
  return (
    <button
      className="
        px-6 py-3 
        bg-innovation-purple text-foundation-white 
        rounded-lg 
        font-source-sans font-semibold
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-innovation-purple
        hover:bg-opacity-90 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
        min-h-[44px] min-w-[44px]
      "
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

---

## 7. SEO OPTIMIZATION

### Technical SEO
```typescript
// SEO component for meta tags
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/default-og-image.jpg',
  url = '',
  type = 'website'
}) => {
  const siteTitle = 'Working with Epilepsy';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullUrl = `https://workingwithepilepsy.org${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Working with Epilepsy",
          "description": "Professional empowerment platform for people with epilepsy",
          "url": "https://workingwithepilepsy.org",
          "logo": "https://workingwithepilepsy.org/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/working-with-epilepsy",
            "https://twitter.com/workingwepilepsy"
          ]
        })}
      </script>
    </Helmet>
  );
};
```

### Content SEO Strategy
- Semantic HTML structure with proper heading hierarchy
- Internal linking between related resources
- XML sitemap generation
- Robots.txt optimization
- Schema markup for blog posts and organization
- Performance optimization for Core Web Vitals

---

## 8. SECURITY IMPLEMENTATION

### Backend Security
```typescript
// Express security middleware
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      fontSrc: ["'self'", "fonts.gstatic.com", "use.typekit.net"],
      imgSrc: ["'self'", "data:", "cdn.sanity.io"],
      scriptSrc: ["'self'"]
    }
  }
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://workingwithepilepsy.org' 
    : 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});
app.use(limiter);
```

### Frontend Security
- Environment variable protection
- XSS prevention through React's built-in protections
- Input validation and sanitization
- Secure cookie handling
- HTTPS enforcement

---

## 9. COMPONENT LIBRARY

### Core Components

#### Layout Components
```typescript
// Header component
const Header: React.FC = () => {
  return (
    <header className="bg-foundation-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <MainNavigation />
          <SearchButton />
        </div>
      </nav>
    </header>
  );
};

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="bg-authority-charcoal text-foundation-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FooterLinks />
        <MissionStatement />
        <LegalLinks />
      </div>
    </footer>
  );
};
```

#### Content Components
```typescript
// Resource card component
interface ResourceCardProps {
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  url: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  excerpt,
  category,
  image,
  url
}) => {
  return (
    <article className="bg-foundation-white rounded-xl shadow-professional overflow-hidden">
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <span className="text-sm font-medium text-innovation-purple">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-authority-charcoal">
          {title}
        </h3>
        <p className="mt-3 text-base text-gray-600 line-clamp-3">
          {excerpt}
        </p>
        <a 
          href={url}
          className="mt-4 inline-flex items-center text-innovation-purple font-medium hover:underline"
        >
          Read More
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </a>
      </div>
    </article>
  );
};
```

---

## 10. PERFORMANCE OPTIMIZATION

### Build Optimization
- Code splitting for route-based lazy loading
- Image optimization with modern formats (WebP, AVIF)
- CSS purging to remove unused styles
- Bundle analysis and optimization
- Service worker for offline functionality

### Runtime Performance
```typescript
// Lazy loading for route components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Resources = lazy(() => import('./pages/Resources'));

// Image optimization component
const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <picture>
      <source srcSet={`${src}?fm=webp`} type="image/webp" />
      <source srcSet={`${src}?fm=avif`} type="image/avif" />
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading="lazy"
      />
    </picture>
  );
};
```

---

## 11. DEPLOYMENT STRATEGY

### Development Environment
- Local development with hot reloading
- Sanity Studio local development
- Environment variable management
- Git workflow with feature branches

### Production Deployment
- **Frontend**: Vercel or Netlify for static site hosting
- **Backend**: Railway, Render, or DigitalOcean for Node.js server
- **CMS**: Sanity Cloud hosting
- **CDN**: Sanity CDN for media assets
- **Monitoring**: Error tracking and performance monitoring

### CI/CD Pipeline
```yaml
# GitHub Actions workflow
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build application
        run: npm run build
        
      - name: Deploy to production
        run: npm run deploy
```

---

## 12. SCALABILITY CONSIDERATIONS

### Content Management
- Modular content structure for easy expansion
- Component-based content blocks
- Internationalization preparation
- Multi-author content workflow

### Technical Scalability
- Microservices-ready architecture
- Database optimization for content queries
- Caching strategies for improved performance
- API rate limiting and optimization

### Startup Resource Optimization
- Template-based design system for quick customization
- Pre-built component library for rapid development
- Documentation for non-technical team members
- Cost-effective hosting solutions with growth path

---

## IMPLEMENTATION TIMELINE

### Phase 1: Foundation (Weeks 1-2)
- Project setup and configuration
- Sanity schema development
- Core component library
- Basic page templates

### Phase 2: Content & Functionality (Weeks 3-4)
- Content migration to Sanity
- Blog functionality implementation
- Search functionality
- Form handling

### Phase 3: Optimization & Polish (Weeks 5-6)
- SEO optimization
- Performance tuning
- Accessibility testing
- Browser compatibility testing

### Phase 4: Launch Preparation (Week 7)
- Production deployment setup
- Content review and approval
- Final testing
- Launch coordination

This architecture provides a solid foundation for Working with Epilepsy's professional empowerment platform while ensuring scalability, accessibility, and maintainability for your startup phase and beyond.