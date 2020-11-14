/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/formBuilder.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("const array = [\n  {\n    label: 'Name',\n    attributes: {\n      id: 'name',\n      type: 'text',\n      name: 'name',\n      placeholder: 'Name...',\n      value: 'Lukasz',\n      disabled: true,\n    },\n  },\n  {\n    label: 'Age',\n    attributes: {\n      id: 'age',\n      type: 'number',\n      name: 'age',\n      placeholder: '18',\n    },\n  },\n];\n\nconst setAttributes = (nodeElement, attributesObj) => {\n  Object.entries(attributesObj).forEach((e) => {\n    nodeElement.setAttribute(e[0], e[1]);\n  });\n};\n\nconst createLabel = (text, htmlFor) => {\n  const label = document.createElement('label');\n  label.innerText = text;\n  label.setAttribute('for', htmlFor);\n  return label;\n};\n\nconst createInput = (element) => {\n  const input = document.createElement('input');\n  setAttributes(input, element.attributes);\n  return input;\n};\n\nconst formBuilder = (array) => {\n  const body = document.querySelector('body');\n\n  array.forEach((element) => {\n    const div = document.createElement('div');\n    div.classList.add('form-control');\n    const label = createLabel(element.label, element.attributes.id);\n    const input = createInput(element);\n\n    div.append(label);\n    div.append(input);\n    body.append(div);\n  });\n};\n\nformBuilder(array);\n\n\n//# sourceURL=webpack://form-builder/./src/formBuilder.js?");
/******/ })()
;