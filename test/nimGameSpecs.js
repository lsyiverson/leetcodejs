"use strict"
const canWinNim = require('../src/nimGame');
const should = require('should');

describe('Nim Game unit test', ()=> {
  let number;

  it('should I win when given 3 stones', ()=> {
    number = 3;

    const result = canWinNim(number);
    result.should.be.true();
  });

  it('should I lose when given 4 stones', ()=> {
    number = 4;

    const result = canWinNim(number);
    result.should.be.false();
  });

  it('should I win when given 5 stones', ()=> {
    number = 5;

    const result = canWinNim(number);
    result.should.be.true();
  });

  it('should I win when given 8 stones', ()=> {
    number = 8;

    const result = canWinNim(number);
    result.should.be.false();
  });
});