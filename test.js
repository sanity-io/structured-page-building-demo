import sanityClient from "part:@sanity/base/client";
import { checkPropTypes } from "prop-types";
const client = sanityClient.withConfig({
  apiVersion: "2021-09-09",
});

const run = async () => {
  const subs = [];
  for (let index = 0; index < 5000; index++) {
    subs.push(client.fetch("*").catch(console.error));
  }
  await Promise.all(subs);
  console.log("done");
};
const obj = {
  ...({ _key } = props.value),
  _type: type.name,
  id: asset.id,
  name: asset.name,
  databaseId: asset.databaseId,
  type: asset.type,
  previewUrl,
  previewImg: webImage.url,
  datUrl: asset.files.transformBaseUrl?.url,
  description: asset.description,
  aspectRatio,
};

run();
