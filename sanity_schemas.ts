// studio/schemas/index.ts
export * from './documents'
export * from './objects'

// studio/schemas/documents/index.ts
export { default as page } from './page'
export { default as blogPost } from './blogPost'
export { default as blogCategory } from './blogCategory'
export { default as author } from './author'
export { default as siteSettings } from './siteSettings'

// studio/schemas/objects/index.ts
export { default as heroSection } from './heroSection'
export { default as textSection } from './textSection'
export { default as resourceGrid } from './resourceGrid'
export { default as testimonialSection } from './testimonialSection'
export { default as ctaSection } from './ctaSection'
export { default as seo } from './seo'
export { default as portableText } from './portableText'

// studio/schemas/documents/page.ts
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(60).warning('Keep titles under 60 characters for SEO')
    },
    {
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'About', value: 'about' },
          { title: 'Contact', value: 'contact' },
          { title: 'Resources Hub', value: 'resources' },
          { title: 'Legal Page', value: 'legal' },
          { title: 'Standard Page', value: 'standard' }
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Page Excerpt',
      type: 'text',
      description: 'Brief description for search results and social sharing',
      validation: (Rule: any) => Rule.max(160).warning('Keep excerpts under 160 characters for SEO')
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'textSection' },
        { type: 'resourceGrid' },
        { type: 'testimonialSection' },
        { type: 'ctaSection' },
        {
          type: 'object',
          name: 'imageSection',
          title: 'Image Section',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Describe the image for screen readers and SEO',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'featured',
      title: 'Featured Page',
      type: 'boolean',
      description: 'Show this page in featured content areas'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
      media: 'seo.ogImage'
    }
  },
  orderings: [
    {
      title: 'Page Type',
      name: 'pageType',
      by: [
        { field: 'pageType', direction: 'asc' },
        { field: 'title', direction: 'asc' }
      ]
    }
  ]
}

// studio/schemas/documents/blogPost.ts
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(60).warning('Keep titles under 60 characters for SEO')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Brief summary for blog listings and social sharing',
      validation: (Rule: any) => Rule.required().max(200).warning('Keep excerpts under 200 characters')
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'blogCategory' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for accessibility',
          validation: (Rule: any) => Rule.required()
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'portableText',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'empowermentApproach',
      title: 'Empowerment Approach',
      type: 'string',
      description: 'Primary empowerment approach used in this content',
      options: {
        list: [
          { title: 'Practical Guidance', value: 'practical' },
          { title: 'Script Flipping', value: 'scriptFlipping' },
          { title: 'Strength Positioning', value: 'strength' },
          { title: 'Integrated Approach', value: 'integrated' }
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'readingTime',
      title: 'Estimated Reading Time',
      type: 'number',
      description: 'Estimated reading time in minutes'
    },
    {
      name: 'relatedResources',
      title: 'Related Resources',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'blogPost' }] }
      ],
      validation: (Rule: any) => Rule.max(3)
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show this post in featured areas'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category.title',
      media: 'featuredImage'
    },
    prepare(selection: any) {
      const { title, author, category } = selection
      return {
        title,
        subtitle: `by ${author} in ${category}`
      }
    }
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Category, A-Z',
      name: 'categoryAsc',
      by: [
        { field: 'category.title', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]
}

// studio/schemas/documents/blogCategory.ts
export default {
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(200)
    },
    {
      name: 'icon',
      title: 'Category Icon',
      type: 'image',
      description: 'Upload the category icon SVG or PNG',
      options: {
        accept: '.svg,.png'
      }
    },
    {
      name: 'color',
      title: 'Category Color',
      type: 'string',
      description: 'Brand color for this category',
      options: {
        list: [
          { title: 'Innovation Purple', value: 'innovation-purple' },
          { title: 'Expertise Bronze', value: 'expertise-bronze' },
          { title: 'Collaboration Blue', value: 'collaboration-blue' },
          { title: 'Evidence Green', value: 'evidence-green' },
          { title: 'Authority Charcoal', value: 'authority-charcoal' },
          { title: 'Advocacy Lavender', value: 'advocacy-lavender' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Category',
      type: 'boolean',
      description: 'Show this category prominently on the resources page'
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order for displaying categories (lower numbers first)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon'
    }
  }
}

// studio/schemas/documents/author.ts
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      }
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        }
      ]
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'portableText'
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'website',
          title: 'Personal Website',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bio',
      media: 'image'
    }
  }
}

// studio/schemas/objects/heroSection.ts
export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: () => '🎯',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(80).warning('Keep headlines concise for impact')
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      validation: (Rule: any) => Rule.max(200).warning('Keep subheadlines under 200 characters')
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        }
      ]
    },
    {
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.max(25).warning('Keep button text short')
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'string'
        },
        {
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' }
            ]
          },
          initialValue: 'primary'
        }
      ]
    },
    {
      name: 'alignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ]
      },
      initialValue: 'center'
    }
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subheadline',
      media: 'backgroundImage'
    }
  }
}

// studio/schemas/objects/portableText.ts
export default {
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'page' },
                  { type: 'blogPost' }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        }
      ]
    },
    {
      name: 'calloutBox',
      title: 'Callout Box',
      type: 'object',
      icon: () => '💡',
      fields: [
        {
          name: 'type',
          title: 'Callout Type',
          type: 'string',
          options: {
            list: [
              { title: 'Info', value: 'info' },
              { title: 'Warning', value: 'warning' },
              { title: 'Success', value: 'success' },
              { title: 'Tip', value: 'tip' }
            ]
          },
          initialValue: 'info'
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text'
        }
      ]
    },
    {
      name: 'resourceLink',
      title: 'Resource Link',
      type: 'object',
      icon: () => '🔗',
      fields: [
        {
          name: 'title',
          title: 'Resource Title',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'type',
          title: 'Resource Type',
          type: 'string',
          options: {
            list: [
              { title: 'External Link', value: 'external' },
              { title: 'PDF Download', value: 'pdf' },
              { title: 'Video', value: 'video' },
              { title: 'Tool', value: 'tool' }
            ]
          }
        }
      ]
    }
  ]
}

// studio/schemas/objects/seo.ts
export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Override the page title for search engines',
      validation: (Rule: any) => Rule.max(60).warning('Keep SEO titles under 60 characters')
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'Brief description for search engine results',
      validation: (Rule: any) => Rule.max(160).warning('Keep meta descriptions under 160 characters')
    },
    {
      name: 'keywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Keywords this page should rank for'
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image for social media sharing (1200x630px recommended)',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    },
    {
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page'
    }
  ]
}