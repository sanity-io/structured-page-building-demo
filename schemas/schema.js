import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from "./documents/page"
import page2 from "./documents/page2"
import page3 from "./documents/page3"
import product from "./documents/product"
import category from "./documents/category"
import CTA from "./documents/CTA"
import testimonial from "./documents/testimonial"
import heroComponent from "./objects/heroComponent"
import bodyComponent from "./objects/bodyComponent"
import ctaComponent from "./objects/ctaComponent"
import space from "./objects/space"
import targets from "./objects/targets"
import collection from "./objects/collection"

const header = {
  type: "object",
  name: "header",
  title: "Header",
  fields: [
    {
      type: "string",
      name: "title"
    }
  ]
}

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    header,
    collection,
    bodyComponent,
    category,
    CTA,
    page,
    page2,
    page3,
    product,
    testimonial,
    heroComponent,
    ctaComponent,
    targets,
    space,
  ]),
})
