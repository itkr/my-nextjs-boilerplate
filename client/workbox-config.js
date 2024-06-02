module.exports = {
  globDirectory: "app/",
  // globPatterns: ['**/*.{html,js,css}'],
  globPatterns: ["**/*.tsx"],
  swDest: "app/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
