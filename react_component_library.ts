// src/components/common/Button.tsx
import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseClasses = cn(
    // Base styles
    'inline-flex items-center justify-center font-source-sans font-semibold',
    'rounded-lg border transition-all duration-200 focus-brand touch-target',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    
    // Size variants
    {
      'px-3 py-2 text-sm': size === 'sm',
      'px-4 py-2.5 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    
    // Color variants
    {
      'bg-innovation-purple-600 border-innovation-purple-600 text-foundation-white hover:bg-innovation-purple-700 focus:ring-innovation-purple-200':
        variant === 'primary',
      'bg-foundation-white border-innovation-purple-600 text-innovation-purple-600 hover:bg-innovation-purple-50 focus:ring-innovation-purple-200':
        variant === 'secondary',
      'bg-transparent border-authority-charcoal-300 text-authority-charcoal-700 hover:bg-authority-charcoal-50 focus:ring-authority-charcoal-200':
        variant === 'outline',
      'bg-transparent border-transparent text-innovation-purple-600 hover:bg-innovation-purple-50 focus:ring-innovation-purple-200':
        variant === 'ghost',
    },
    
    className
  );

  return (
    <button
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

// src/components/common/Card.tsx
import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
}) => {
  const cardClasses = cn(
    'bg-foundation-white rounded-xl',
    
    // Variant styles
    {
      'shadow-professional': variant === 'default',
      'shadow-empowerment': variant === 'elevated',
      'border border-authority-charcoal-200': variant === 'bordered',
    },
    
    // Padding options
    {
      'p-0': padding === 'none',
      'p-4': padding === 'sm',
      'p-6': padding === 'md',
      'p-8': padding === 'lg',
    },
    
    // Hover effects
    {
      'transition-shadow duration-200 hover:shadow-empowerment': hover,
    },
    
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

// src/components/layout/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Resources', 
    href: '/resources',
    submenu: [
      { name: 'Legal Empowerment', href: '/resources/legal-empowerment' },
      { name: 'Career Advancement', href: '/resources/career-advancement' },
      { name: 'Workplace Accommodations', href: '/resources/workplace-accommodations' },
      { name: 'Health & Performance', href: '/resources/health-performance' },
      { name: 'Communication & Advocacy', href: '/resources/communication-advocacy' },
      { name: 'Professional Community', href: '/resources/professional-community' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-foundation-white shadow-sm sticky top-0 z-50">
      <nav className="container-content" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="focus-brand rounded-lg">
              <Logo className="h-8 w-auto" />
              <span className="sr-only">Working with Epilepsy Homepage</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-authority-charcoal-700 hover:text-innovation-purple-600 font-source-sans font-medium focus-brand rounded px-3 py-2 transition-colors duration-200"
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-foundation-white rounded-lg shadow-empowerment opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-authority-charcoal-600 hover:bg-innovation-purple-50 hover:text-innovation-purple-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Open search"
              className="hidden sm:flex"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-authority-charcoal-200 bg-foundation-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-authority-charcoal-700 hover:text-innovation-purple-600 hover:bg-innovation-purple-50 rounded-md transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-authority-charcoal-600 hover:text-innovation-purple-600 hover:bg-innovation-purple-50 rounded-md transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';

const footerNavigation = {
  quickLinks: [
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
    { name: 'Search', href: '/search' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-of-use' },
    { name: 'Accessibility Statement', href: '/accessibility' },
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-authority-charcoal-800 text-foundation-white">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <Logo className="h-8 w-auto mb-4" variant="white" />
            <p className="text-body text-authority-charcoal-300 mb-4 max-w-md">
              Working with Epilepsy empowers people with epilepsy to thrive in meaningful work 
              through evidence-based resources, strategic tools, and collaborative expertise.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-authority-charcoal-400 hover:text-innovation-purple-300 transition-colors duration-200 focus-brand rounded p-1"
                  aria-label={`Follow us on ${item.name}`}
                >
                  <span className="sr-only">{item.name}</span>
                  {/* Icon would go here - replace with actual icons */}
                  <div className="w-6 h-6 bg-current rounded" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-content font-semibold text-foundation-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNavigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-authority-charcoal-300 hover:text-innovation-purple-300 transition-colors duration-200 focus-brand rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-content font-semibold text-foundation-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-authority-charcoal-300 hover:text-innovation-purple-300 transition-colors duration-200 focus-brand rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-authority-charcoal-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-authority-charcoal-400">
              © 2025 Working with Epilepsy, Inc. All rights reserved.
            </p>
            <p className="text-sm text-authority-charcoal-400 mt-2 md:mt-0">
              Professional empowerment through evidence-based innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// src/components/content/HeroSection.tsx
import React from 'react';
import { Button } from '../common/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  backgroundImage?: string;
  ctaButton?: {
    text: string;
    url: string;
    style?: 'primary' | 'secondary';
  };
  alignment?: 'left' | 'center' | 'right';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  backgroundImage,
  ctaButton,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-innovation-purple-600 to-innovation-purple-800 text-foundation-white py-24 lg:py-32"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(95, 37, 159, 0.8), rgba(95, 37, 159, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="container-content">
        <div className={`max-w-4xl mx-auto flex flex-col ${alignmentClasses[alignment]}`}>
          <h1 className="text-hero font-avenir font-black mb-6 leading-tight">
            {headline}
          </h1>
          
          {subheadline && (
            <p className="text-body-pro text-innovation-purple-100 mb-8 max-w-2xl">
              {subheadline}
            </p>
          )}
          
          {ctaButton && (
            <div className="flex justify-center">
              <Button
                variant={ctaButton.style === 'secondary' ? 'secondary' : 'primary'}
                size="lg"
                className="bg-foundation-white text-innovation-purple-600 hover:bg-innovation-purple-50 border-foundation-white"
                rightIcon={<ArrowRightIcon className="w-5 h-5" />}
                onClick={() => window.location.href = ctaButton.url}
              >
                {ctaButton.text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// src/components/content/ResourceCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { ArrowRightIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ResourceCardProps {
  title: string;
  excerpt: string;
  category: {
    name: string;
    color: string;
    slug: string;
  };
  image?: string;
  url: string;
  readingTime?: number;
  publishedAt?: string;
  empowermentApproach?: 'practical' | 'scriptFlipping' | 'strength' | 'integrated';
}

const approachLabels = {
  practical: 'Practical Guidance',
  scriptFlipping: 'Script Flipping',
  strength: 'Strength Positioning',
  integrated: 'Integrated Approach'
};

const categoryColors = {
  'innovation-purple': 'bg-innovation-purple-100 text-innovation-purple-800',
  'expertise-bronze': 'bg-expertise-bronze-100 text-expertise-bronze-800',
  'collaboration-blue': 'bg-collaboration-blue-100 text-collaboration-blue-800',
  'evidence-green': 'bg-evidence-green-100 text-evidence-green-800',
  'authority-charcoal': 'bg-authority-charcoal-100 text-authority-charcoal-800',
  'advocacy-lavender': 'bg-purple-100 text-purple-800'
};

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  excerpt,
  category,
  image,
  url,
  readingTime,
  publishedAt,
  empowermentApproach
}) => {
  return (
    <Card className="h-full flex flex-col" hover>
      {image && (
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </div>
      )}
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[category.color as keyof typeof categoryColors] || categoryColors['innovation-purple']}`}>
            {category.name}
          </span>
          
          {empowermentApproach && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-authority-charcoal-100 text-authority-charcoal-700">
              {approachLabels[empowermentApproach]}
            </span>
          )}
        </div>
        
        <h3 className="text-content font-semibold text-authority-charcoal-900 mb-3 flex-grow">
          <Link 
            to={url}
            className="hover:text-innovation-purple-600 transition-colors duration-200 focus-brand rounded"
          >
            {title}
          </Link>
        </h3>
        
        <p className="text-body text-authority-charcoal-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-authority-charcoal-500">
          <div className="flex items-center gap-4">
            {readingTime && (
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {readingTime} min read
              </span>
            )}
            {publishedAt && (
              <span>
                {new Date(publishedAt).toLocaleDateString()}
              </span>
            )}
          </div>
          
          <Link 
            to={url}
            className="inline-flex items-center text-innovation-purple-600 font-medium hover:text-innovation-purple-700 focus-brand rounded transition-colors duration-200"
          >
            Read More
            <ArrowRightIcon className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

// src/components/content/CategoryGrid.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';

interface Category {
  title: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  postCount: number;
}

interface CategoryGridProps {
  categories: Category[];
  title?: string;
  description?: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  title = "Explore Resources",
  description = "Discover professional empowerment resources across six key areas"
}) => {
  return (
    <section className="py-16 bg-foundation-white">
      <div className="container-content">
        {(title || description) && (
          <div className="text-center mb-12">
            <h2 className="text-section text-authority-charcoal-900 font-avenir font-bold mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-body-pro text-authority-charcoal-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              to={`/resources/${category.slug}`}
              className="group focus-brand rounded-xl"
            >
              <Card className="h-full text-center group-hover:shadow-empowerment transition-shadow duration-200">
                {category.icon && (
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={category.icon} 
                      alt="" 
                      className="w-12 h-12"
                    />
                  </div>
                )}
                
                <h3 className="text-content font-semibold text-authority-charcoal-900 mb-3 group-hover:text-innovation-purple-600 transition-colors duration-200">
                  {category.title}
                </h3>
                
                <p className="text-body text-authority-charcoal-600 mb-4">
                  {category.description}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-innovation-purple-600">
                  {category.postCount} resources
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// src/utils/cn.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// src/components/common/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'color' }) => {
  // This would be replaced with your actual logo component or SVG
  return (
    <div className={`font-avenir font-black text-xl ${className}`}>
      <span className={variant === 'white' ? 'text-foundation-white' : 'text-innovation-purple-600'}>
        Working with Epilepsy
      </span>
    </div>
  );
};

// src/components/common/SEOHead.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image = '/default-og-image.jpg',
  url = '',
  type = 'website',
  keywords = [],
  noIndex = false
}) => {
  const siteTitle = 'Working with Epilepsy';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullUrl = `https://workingwithepilepsy.org${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data for Organization */}
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
          ],
          "foundingDate": "2025",
          "mission": "Empowering people with epilepsy to thrive in meaningful work"
        })}
      </script>
    </Helmet>
  );
};