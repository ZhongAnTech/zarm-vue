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
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
