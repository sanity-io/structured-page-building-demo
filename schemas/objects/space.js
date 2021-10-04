export default {
  name: 'space',
  title: 'Space',
  type: 'object',
  options: {
    columns: 2
  },
  fields: [
    {
      name: "mainTextStyle",
      type: "string",
      options: {
        list: ["Large", "Medium", "Small"]
      }
    },
    {
      name: "subTextStyle",
      type: "string",
      options: {
        list: ["Large", "Medium", "Small"]
      }
    },
    {
      type: "number",
      name: "marginTop"
    },
    {
      type: "number",
      name: "marginBottom"
    },
    {
      type: "number",
      name: "paddingTop"
    },
    {
      type: "number",
      name: "paddingBottom"
    }
  ],
}