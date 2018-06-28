#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

/** 组件Vue初始化模版 */
const componentVueTpl = require('../template/component.tpl.js');
/** 组件封装模版 */
const componentIndexTpl = require('../template/component.index.js');
/** 组件style样式模版 */
const compomentStyleTpl = require('../template/component.style.js');

const packagesDir = path.resolve(__dirname, '../src');

function main() {
  const args = process.argv;
  const componentName = args[2];

  if (componentName === undefined) {
    console.error('Component name is required');
    process.exit(1);
  }

  addFiles(componentName);
}

function firstAlphabetUpper(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function getComponentName(name) {
  let componentName;
  if (name.includes('-')) {
    componentName = name
      .split('-')
      .map(item => {
        return firstAlphabetUpper(item);
      })
      .join('');
  } else {
    componentName = firstAlphabetUpper(name);
  }
  return componentName;
}

// 插入js
function insertJs(name) {
  const componentDir = `${packagesDir}/${name}`;
  const componentSrcDir = `${packagesDir}/${name}/src`;
  const upperComponentName = getComponentName(name);

  const templateHandle = Handlebars.compile(componentIndexTpl);
  const context = { upperComponentName, name };

  fs.writeFileSync(`${componentDir}/index.js`, `${templateHandle(context)}`);

  fs.writeFileSync(`${componentSrcDir}/${name}.vue`, `${componentVueTpl}`);
}

// 插入css
function insertCss(name) {
  const componentDir = `${packagesDir}/${name}`;

  fs.writeFileSync(`${componentDir}/style/index.scss`, `${compomentStyleTpl}`);

  fs.writeFileSync(`${componentDir}/style/component.js`, "import './index.scss';");
}

// js/css 加到index文件导出
function addFilesToIndex(name) {
  insertCss(name);
  insertJs(name);
}

// 创建组件文件夹以及js/css文件
function addFiles(name) {
  const componentDir = `${packagesDir}/${name}`;
  const componentSrcDir = `${packagesDir}/${name}/src`;
  const componentStyleDir = `${packagesDir}/${name}/style`;
  const upperComponentName = getComponentName(name);

  console.log(`Adding new component：${upperComponentName}`);

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
    fs.mkdirSync(componentSrcDir);
    fs.mkdirSync(componentStyleDir);
  } else {
    console.log(`${upperComponentName} already exists, please choose another name.`);
    process.exit(2);
  }
  addFilesToIndex(name);
}

main();
