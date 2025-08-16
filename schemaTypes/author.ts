export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input: string) => {
          const serbianChars: { [key: string]: string } = {
            'č': 'c', 'ć': 'c', 'š': 's', 'đ': 'd', 'ž': 'z',
            'Č': 'C', 'Ć': 'C', 'Š': 'S', 'Đ': 'D', 'Ž': 'Z'
          };
          
          let slug = input;
          
          // Zameni srpska slova
          Object.entries(serbianChars).forEach(([serbian, latin]) => {
            slug = slug.replace(new RegExp(serbian, 'g'), latin);
          });
          
          // Konvertuj u lowercase i zameni razmake sa crticama
          return slug.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        }
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
} 