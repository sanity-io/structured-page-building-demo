export default {
  name: "bodyComponent",
  title: "Rich Text",
  type: "object",
  fields: [
    {
      name: "text",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
