const isDev = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    [
      "@babel/preset-react",
      {
        development: isDev,
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    "dynamic-import-node",
    "@loadable/babel-plugin",
  ].filter(Boolean),
};
