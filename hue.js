const { slugify, capitalize, camelCase, titleCase } = require(".");

const sentence = "My name is Daniel and I'm a child of God.";

console.log("Slugified: ", slugify(sentence));
console.log("capitalized: ", capitalize(sentence));
console.log("camel cased: ", camelCase(sentence));
console.log("title cased: ", titleCase(sentence));
