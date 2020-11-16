const chai = require('chai');
const expect = chai.expect;
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = window;
const { array, formBuilder } = require('../formBuilder');

describe('formBuilder', () => {
  before(() => {
    formBuilder(array);
  });

  it('should render all inputs from the array', () => {
    const divs = document.getElementsByClassName('form-control');
    expect(divs).to.be.length(array.length);
  });

  it('should render labels for each input', () => {
    const labels = document.querySelectorAll('label');
    expect(labels).to.be.length(array.length);
  });

  it('should correctly add attributes to each input as specified in the array', () => {
    array.forEach((element) => {
      const input = document.getElementById(element.attributes.id);
      Object.entries(element.attributes).forEach((attr) => {
        expect(input).to.have.attr(attr[0], attr[1]);
      });
    });
  });

  it('should check or uncheck the checkbox if we click the checkbox label', () => {
    const checkbox = document.getElementById('sendEmail');
    const label = checkbox.previousElementSibling;

    label.click();

    expect(checkbox.checked).to.equal(true);
  });
});
