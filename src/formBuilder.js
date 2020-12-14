const array = [
  {
    label: 'Name',
    attributes: {
      id: 'name',
      type: 'text',
      name: 'name',
      placeholder: 'Your name',
      value: '',
      required: 'true',
    },
  },
  {
    label: 'Age',
    attributes: {
      id: 'age',
      type: 'number',
      name: 'age',
      value: '',
      placeholder: 'Your age',
      required: 'false',
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

const createHTMLElement = (type, attributes) => {
  const element = document.createElement(type);
  setAttributes(element, attributes);
  return element;
};

const handleSubmit = (event) => {
  event.preventDefault();
  event.target.reset();
};

const formBuilder = (array, body) => {
  const form = createHTMLElement('form', { id: 'form' });

  array.forEach((element) => {
    const { attributes, label } = element;

    const div = document.createElement('div');
    div.classList.add('form-control');

    const inputLabel = createHTMLElement('label', { for: attributes.id });
    inputLabel.innerText = label;

    const input = createHTMLElement('input', attributes);

    div.append(inputLabel);
    div.append(input);
    form.append(div);
  });

  form.addEventListener('submit', handleSubmit);

  const button = createHTMLElement('button', { id: 'button' });
  button.innerText = 'Submit';
  form.append(button);

  body.append(form);
};

module.exports = {
  array,
  formBuilder,
};
