// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      // Working with Epilepsy Brand Typography
      fontFamily: {
        'avenir': ['Avenir Next', 'Source Sans 3', 'system-ui', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'Inter', 'system-ui', 'sans-serif'],
        'source-serif': ['Source Serif 4', 'Georgia', 'serif'],
      },
      
      // Brand Color Palette - WCAG 2.1 AA Compliant
      colors: {
        // Primary Brand Colors
        'innovation-purple': {
          50: '#f3f0ff',
          100: '#e9e5ff',
          200: '#d6ccff',
          300: '#b8a3ff',
          400: '#9771ff',
          500: '#7c3aed', // Accessibility optimized
          600: '#5f259f', // Brand primary
          700: '#4c1d95',
          800: '#3b1a7a',
          900: '#2e1565',
        },
        'expertise-bronze': {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#e8ddd2',
          300: '#d5c4b0',
          400: '#c0a688',
          500: '#a47864', // Brand secondary
          600: '#8b6550',
          700: '#725242',
          800: '#5e4439',
          900: '#4d3a32',
        },
        'collaboration-blue': {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#3f6a7e', // Brand secondary
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'evidence-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#4a7c59', // Brand secondary
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        // Neutral Colors
        'authority-charcoal': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b', // Brand neutral
          900: '#0f172a',
        },
        'foundation-white': '#ffffff',
        
        // Supporting Colors
        'advocacy-lavender': '#7561af',
        'clarity-sky': '#3f6a7e',
        'pioneer-bronze': '#a47864',
        'breakthrough-purple': '#5f259f',
      },
      
      // Typography Scale - Professional Hierarchy
      fontSize: {
        // Custom brand sizes
        'hero-title': ['3rem', { lineHeight: '1.15', fontWeight: '900' }],
        'section-title': ['2.25rem', { lineHeight: '1.25', fontWeight: '800' }],
        'subsection-title': ['1.75rem', { lineHeight: '1.35', fontWeight: '700' }],
        'content-title': ['1.375rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-professional': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-standard': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption-authority': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      
      // Custom Spacing for Professional Layout
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Professional Border Radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Brand Shadow System
      boxShadow: {
        'professional': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'empowerment': '0 10px 15px -3px rgba(95, 37, 159, 0.1), 0 4px 6px -2px rgba(95, 37, 159, 0.05)',
        'community': '0 20px 25px -5px rgba(95, 37, 159, 0.08), 0 10px 10px -5px rgba(95, 37, 159, 0.04)',
        'advocacy': '0 25px 50px -12px rgba(95, 37, 159, 0.12)',
      },
      
      // Animation & Transitions - Seizure Safe
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      
      // Accessibility - Minimum Touch Targets
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      
      // Custom Utilities for Content
      lineHeight: {
        'tight': '1.15',
        'snug': '1.25',
        'normal': '1.35',
        'relaxed': '1.4',
        'loose': '1.6',
      },
      
      // Letter Spacing for Brand Fonts
      letterSpacing: {
        'brand': '0.035em',
        'tight': '-0.025em',
        'wide': '0.1em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin for brand utilities
    function({ addUtilities, theme }: any) {
      const newUtilities = {
        // Typography utilities
        '.text-hero': {
          fontSize: theme('fontSize.hero-title')[0],
          lineHeight: theme('fontSize.hero-title')[1].lineHeight,
          fontWeight: theme('fontSize.hero-title')[1].fontWeight,
          fontFamily: theme('fontFamily.avenir'),
        },
        '.text-section': {
          fontSize: theme('fontSize.section-title')[0],
          lineHeight: theme('fontSize.section-title')[1].lineHeight,
          fontWeight: theme('fontSize.section-title')[1].fontWeight,
          fontFamily: theme('fontFamily.avenir'),
        },
        '.text-subsection': {
          fontSize: theme('fontSize.subsection-title')[0],
          lineHeight: theme('fontSize.subsection-title')[1].lineHeight,
          fontWeight: theme('fontSize.subsection-title')[1].fontWeight,
          fontFamily: theme('fontFamily.avenir'),
        },
        '.text-content': {
          fontSize: theme('fontSize.content-title')[0],
          lineHeight: theme('fontSize.content-title')[1].lineHeight,
          fontWeight: theme('fontSize.content-title')[1].fontWeight,
          fontFamily: theme('fontFamily.source-sans'),
        },
        '.text-body-pro': {
          fontSize: theme('fontSize.body-professional')[0],
          lineHeight: theme('fontSize.body-professional')[1].lineHeight,
          fontWeight: theme('fontSize.body-professional')[1].fontWeight,
          fontFamily: theme('fontFamily.source-sans'),
        },
        '.text-body': {
          fontSize: theme('fontSize.body-standard')[0],
          lineHeight: theme('fontSize.body-standard')[1].lineHeight,
          fontWeight: theme('fontSize.body-standard')[1].fontWeight,
          fontFamily: theme('fontFamily.source-sans'),
        },
        
        // Accessibility utilities
        '.focus-brand': {
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.innovation-purple.600')}, 0 0 0 4px ${theme('colors.innovation-purple.200')}`,
          },
        },
        '.touch-target': {
          minHeight: theme('minHeight.touch'),
          minWidth: theme('minWidth.touch'),
        },
        
        // Component base styles
        '.btn-primary': {
          backgroundColor: theme('colors.innovation-purple.600'),
          color: theme('colors.foundation-white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontFamily: theme('fontFamily.source-sans'),
          fontWeight: '600',
          minHeight: theme('minHeight.touch'),
          minWidth: theme('minWidth.touch'),
          transition: 'all 200ms ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.innovation-purple.700'),
          },
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.innovation-purple.600')}, 0 0 0 4px ${theme('colors.innovation-purple.200')}`,
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.foundation-white'),
          color: theme('colors.innovation-purple.600'),
          border: `2px solid ${theme('colors.innovation-purple.600')}`,
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontFamily: theme('fontFamily.source-sans'),
          fontWeight: '600',
          minHeight: theme('minHeight.touch'),
          minWidth: theme('minWidth.touch'),
          transition: 'all 200ms ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.innovation-purple.50'),
          },
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.innovation-purple.600')}, 0 0 0 4px ${theme('colors.innovation-purple.200')}`,
          },
        },
        
        // Professional card styles
        '.card-professional': {
          backgroundColor: theme('colors.foundation-white'),
          borderRadius: theme('borderRadius.xl'),
          boxShadow: theme('boxShadow.professional'),
          padding: theme('spacing.6'),
          transition: 'all 200ms ease-in-out',
          '&:hover': {
            boxShadow: theme('boxShadow.empowerment'),
          },
        },
        
        // Content layout utilities
        '.container-content': {
          maxWidth: theme('maxWidth.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@media (min-width: 640px)': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@media (min-width: 1024px)': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}

export default config