"use strict"
const moveZeroes = require('../src/moveZeroes');
const should = require('should');

describe('moveZeros unit test', ()=> {
  let array;

  it('should move zeroes into right place when given array[0, 1, 0, 3, 12]', ()=> {
    array = [0, 1, 0, 3, 12];

    moveZeroes(array);
    array.should.be.eql([1, 3, 12, 0, 0]);
  });

  it('should move zeroes into right place when given array[0,0,1]', ()=> {
    array = [0,0,1];

    moveZeroes(array);
    array.should.be.eql([1, 0, 0]);
  });
});