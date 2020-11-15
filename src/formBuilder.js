// import './styles.css';

const array = [
  {
    label: 'Name',
    attributes: {
      id: 'name',
      type: 'text',
      name: 'name',
      placeholder: 'Name...',
      value: 'Jhon',
      disabled: true,
    },
  },
  {
    label: 'Age',
    attributes: {
      id: 'age',
      type: 'number',
      name: 'age',
      placeholder: '18',
    },
  },
];

const setAttributes = (nodeElement, attributesObj) => {
  Object.entries(attributesObj).forEach((e) => {
    nodeElement.setAttribute(e[0], e[1]);
  });
};

const createLabel = (text, htmlFor) => {
  const label = document.createElement('label');
  label.innerText = text;
  label.setAttribute('for', htmlFor);
  return label;
};

const createInput = (element) => {
  const input = document.createElement('input');
  setAttributes(input, element.attributes);
  return input;
};

const formBuilder = (array) => {
  const body = document.querySelector('body');

  array.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('form-control');
    const label = createLabel(element.label, element.attributes.id);
    const input = createInput(element);

    div.append(label);
    div.append(input);
    body.append(div);
  });
};

module.exports = {
  array,
  formBuilder,
};
