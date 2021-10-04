export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'text',
      title: 'Quote',
      type: 'array',
      of: [{type: "block"}]
    },
    {
      name: "subject",
      type: "reference",
      to: [{type: "product"}]
    }
  ],
}