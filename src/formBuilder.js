const array = [
  {
    label: 'Name',
    attributes: {
      id: 'name',
      type: 'text',
      name: 'name',
      placeholder: 'Your name',
      value: 'Jhon',
      disabled: 'true',
    },
  },
  {
    label: 'Age',
    attributes: {
      id: 'age',
      type: 'number',
      name: 'age',
      placeholder: 'Your age',
    },
  },
  {
    label: 'Send email',
    attributes: {
      id: 'sendEmail',
      type: 'checkbox',
      name: 'sendEmail',
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

const body = document.querySelector('body');

const formBuilder = (array) => {
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

// formBuilder(array);

module.exports = {
  array,
  formBuilder,
};
