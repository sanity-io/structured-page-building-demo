export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: "name"
      }
    },
    {
      name: 'image',
      type: 'image',
      title: "Image",
      options: {
        hotspot: true
      }
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [
        {type: "block"},
        {type: "image"},
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{type: "category"}] }],
    }
  ],
}