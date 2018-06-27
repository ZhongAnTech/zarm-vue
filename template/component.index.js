module.exports = `import {{upperComponentName}} from './src/{{name}}';
/* istanbul ignore next */
{{upperComponentName}}.install = function (Vue) {
  Vue.component({{upperComponentName}}.name, {{upperComponentName}});
};
export default {{upperComponentName}};
`;