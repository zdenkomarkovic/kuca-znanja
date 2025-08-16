export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Code Block', value: 'code'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'}, 
        {title: 'Numbered', value: 'number'},
        {title: 'Checkmarks', value: 'checkmarks'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike-through', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [
                  { type: 'post' },
                  { type: 'category' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { 
        hotspot: true,
        metadata: ['dimensions', 'palette', 'exif', 'location'],
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      type: 'code',
      title: 'Code Block',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JSON', value: 'json'},
          {title: 'Markdown', value: 'markdown'},
        ],
        withFilename: true,
      },
    },
    {
      type: 'table',
      title: 'Table',
      options: {
        layout: 'grid',
      },
      fields: [
        {
          name: 'rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} 