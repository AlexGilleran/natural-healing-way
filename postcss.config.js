const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./components/**/*.[j|t]s*",
      "./pages/**/*.[j|t]s*",
      "./content/**/*.md"
    ],
    whitelistPatternsChildren: [/markdown$/],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
