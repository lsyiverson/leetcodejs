"use strict"
const should = require('should');

describe('unit test demo', ()=> {
  let number;

  beforeEach(()=> {
    number = 100;
  });

  it('should the number less than 200', ()=> {
    number.should.below(200);
  });

  it('should the number bigger than 50', ()=> {
    number.should.above(50);
  });
});