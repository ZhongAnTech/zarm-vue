module.exports = {
  presets: [
    '@babel/preset-env',
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }]
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
