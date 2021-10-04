export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ["Testimonials", "Products"]
      }
    },
    {
      name: 'count',
      title: 'Count',
      type: 'number',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'string',
      options: {
        list: ["Most relevant", "Newest"]
      }
    },
  ],
}