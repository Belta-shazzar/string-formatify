/**
 * string-formatify
 * A simple string formatter utility library
 */

/**
 * Converts a string to a URL-friendly slug
 * @param {string} str - The string to slugify
 * @returns {string} - The slugified string
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - The capitalized string
 */
function capitalize(str) {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase
 * @param {string} str - The string to convert
 * @returns {string} - The camelCased string
 */
function camelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .trim()
    .split(/[\s-_]+/)
    .map((word, index) => {
      // If it's the first word, return it as is
      if (index === 0) return word;
      // Otherwise capitalize the first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

/**
 * Converts a string to Title Case (capitalize the first letter of every word)
 * @param {string} str - The string to convert
 * @returns {string} - The Title Cased string
 */
function titleCase(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
    .split(/\s+/) // Split by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = {
  slugify,
  capitalize,
  camelCase,
  titleCase,
};
