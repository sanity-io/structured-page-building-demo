export default {
  name: 'page2',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'path',
      title: 'Path',
      type: 'slug',
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "object",
          name: "testimonialCollection",
          fields: [
            {
              type: "array",
              name: "testimonials",
              of: [
                {
                  type: "reference", to: [{type: "testimonial"}]
                }
              ],
            }
          ],
              preview: {
                prepare({}) {
                  return {
                    title: "Testimonial Collection"
                  }
                }
              }
        },
        {
          name: 'hero2',
          title: 'Hero Component',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'blurb',
              title: 'Text',
              type: 'array',
              of: [{type: "block"}]
            },
            {
              name: 'target',
              title: 'Target',
              type: 'reference',
              to: [{type: "product"}]
            },
            {
              name: 'kind',
              title: 'Kind',
              type: 'string',
              options: {
                list: ["Large", "Minimal"]
              }
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "target.image"
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "path.current"
    }
  }
}