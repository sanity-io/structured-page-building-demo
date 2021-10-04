export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: "design",
      description: "Overrides for the website CSS",
      type: "object",
      options: {
        collapsible: true,
        columns: 1
      },
      fields: [
        {
          type: "color",
          title: "Page color",
          name: "color"
        },
        {
          type: "space",
          name: "margins"
        },
        {
          type: "boolean",
          title: "Show Navigation Menu",
          description: "Only disable this in rare cases",
          name: "showMenu"
        },
        {
          type: "string",
          name: "template",
          description: "Override main CSS template",
          options: {
            list: ["Main", "Special Autumn 2021 design"]
          }
        }
      ]
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
        { type: "heroComponent" },
        { type: "ctaComponent" },
        { type: "bodyComponent" },
        { type: "header" },
        {
          type: "object",
          name: "Testimonials",
          fields: [
            {
              type: "array",
              name: "list",
              of: [{type: "testimonial"}]
            }
          ],
          preview: {
            select: {
              list: "list"
            },
            prepare: ({list}) => {
              console.log(list)
              return {
                title: `Testimonials: ${list.map(l => l.name).join(", ")}`
              }
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