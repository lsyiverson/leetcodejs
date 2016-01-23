"use strict"
const mySqrt = require('../src/sqrt');
const should = require('should');

describe.only('Sqrt unit test', ()=> {
  let number;

  it('should get 3 if given 13', ()=> {
    number = 13;

    const result = mySqrt(number);
    result.should.equal(3);
  });

  it('should get 2 if given 7', ()=> {
    number = 7;

    const result = mySqrt(number);
    result.should.equal(2);
  });
});