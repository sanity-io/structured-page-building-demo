export default {
  name: 'heroComponent',
  title: 'Hero component',
  type: 'object',
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "string",
      name: "subtitle",
    },
    {
      type: "space",
      name: 'css'
    },
    {
      type: "slug",
      name: "link",
    },
    {
      type: "image",
      name: "image",
    },
  ],
}