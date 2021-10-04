// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

const pageBuilding = S.listItem()
  .title("Compose")
  .child(
    S.list()
      .title("Compose")
      .id("page-building")
      .items([S.documentTypeListItem("page")])
  );

const mix = S.listItem()
  .title("Curate")
  .child(
    S.list()
      .title("Curate")
      .id("curate-pages")
      .items([
        S.documentTypeListItem("page2"),
        S.documentTypeListItem("testimonial"),
      ])
  );

const configure = S.listItem()
  .title("Configure")
  .child(
    S.list()
      .title("Configure")
      .id("configure-pages")
      .items(
        [
          S.documentTypeListItem("page3"),
        S.documentTypeListItem("testimonial"),
      ])
  );

const algo = S.listItem()
  .title("Automate")
  .child(
    S.list()
      .title("Automate")
      .id("algo")
      .items([
        S.documentTypeListItem("product"),
        S.documentTypeListItem("CTA"),
        S.documentTypeListItem("category"),
        S.documentTypeListItem("testimonial"),
      ])
  );

export default () => S.list().title("Base").items([
  pageBuilding,
  mix,
  configure,
  algo
]);
