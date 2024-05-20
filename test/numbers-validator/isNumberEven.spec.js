import { expect } from 'chai';
import { NumbersValidator } from '../../app/numbers_validator.js';

let validator;

describe('isNumberEven tests', () => {
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provide a string', () => {
    expect(() => { validator.isNumberEven('4'); }).to.be.throw('[4] is not of type "Number" it is of type "string"');
  });
});

describe('getEvenNumbersFromArray tests', () => {
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should throw an error when provide a string instaed of an array of "Numbers"', () => {
    expect(() => { validator.getEvenNumbersFromArray('4'); }).to.be.throw('[4] is not an array of "Numbers"');
  });
  it('should throw an error when provide a string instaed of an array of "Numbers"', () => {
    expect(() => { validator.getEvenNumbersFromArray(['hi','day']); }).to.be.throw('[hi,day] is not an array of "Numbers"');
  });
  it('should return [] when provided array doesn`t have any even numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray([1, 5, 3, 7]);
    expect(validationResults).to.be.eql([]);
  });

  it('should return [2,4] when provided [1,2,3,4] array', () => {
    const validationResults = validator.getEvenNumbersFromArray([1, 2, 3, 4]);
    expect(validationResults).to.be.eql([2, 4]);
  });
});

describe('isAllNumbers tests', () => {
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should throw an error when provide a string instead of an array', () => {
    expect(() => { validator.isAllNumbers('4'); }).to.be.throw('[4] is not an array');
  });
  it('should return false when provided with an array of numbers', () => {
    const validationResults = validator.isAllNumbers(['hi','day']);
    expect(validationResults).to.be.equal(false);
  });
  it('should return true when provided with an array of numbers', () => {
    const validationResults = validator.isAllNumbers([1, 2, 3, 4]);
    expect(validationResults).to.be.equal(true);
  });
  it('should return true when provided with an array is empty', () => {
    const validationResults = validator.isAllNumbers([]);
    expect(validationResults).to.be.equal(true);
  });
});

describe('isInteger tests', () => {
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should throw an error when provide a string', () => {
    expect(() => { validator.isInteger('4'); }).to.be.throw('[4] is not a number');
  });
  it('should return false when provided with an float number', () => {
    expect(validator.isInteger(4.2)).to.be.equal(false);
  });
  it('should return true when provided with an integer number', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });
});
