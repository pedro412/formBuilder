const chai = require('chai');
const expect = chai.expect;
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
chai.use(require('chai-dom'));
global.document = window.document;
global.window = window;
const { array, formBuilder } = require('../formBuilder');

describe('formBuilder', () => {
  before(() => {
    formBuilder(array);
  });

  it('should render two form-controls', () => {
    const divs = document.getElementsByClassName('form-control');
    expect(divs).to.be.length(2);
  });
});
