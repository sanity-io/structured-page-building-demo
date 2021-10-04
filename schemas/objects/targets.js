export const dimensions = [
  {
    value: "new",
    title: "New visitors",
  },
  {
    value: "returning",
    title: "Returning visitors",
  },
  {
    value: "stationary",
    title: "Stationary devices",
  },
  {
    value: "mobile",
    title: "Mobile devices",
  },
  {
    value: "europe",
    title: "Europe",
  },
  {
    value: "americas",
    title: "Americas",
  },
  {
    value: "apac",
    title: "APAC",
  },
  {
    value: "world",
    title: "World",
  },
];

export default {
  name: "targets",
  title: "Targets",
  description: "Example of manual target tagging",
  type: "array",
  of: [{ type: "string" }],
  options: {
    columns: 4,
    list: dimensions
  },
};
