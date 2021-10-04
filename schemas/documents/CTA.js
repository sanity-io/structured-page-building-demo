import {dimensions} from "../objects/targets"

export default {
  name: "CTA",
  title: "CTA",
  type: "document",
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      type: "object",
      title: "Validity period",
      description: "When this CTA should be presented",
      name: "period",
      options: {
        columns: 2
      },
      fields: [
        {
          type: "datetime",
          name: "from",
        },
        {
          type: "datetime",
          name: "to",
        },
      ],
    },
    {
      type: "array",
      name: "titles",
      title: "Personalized titles",
      of: [{
        type: "object",
        name: "personalizedTitle",
        fields: [
          {
            type: "string",
            name: "target",
            options: {
              list: dimensions
            }
          },
          {
            name: 'title',
            title: 'title',
            type: 'string',
          },
        ],
        preview: {
          select: {
            subtitle: "target",
            title: "title"
          },
        }
      }]
    },
    {
      type: "reference",
      title: "Product",
      name: "subject",
      to: [
        {type: "product"}
      ]
    }
  ],
};
