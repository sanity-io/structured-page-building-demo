export default {
  name: 'page3',
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
          type: "collection"
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