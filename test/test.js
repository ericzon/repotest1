var assert = require('assert');

beforeEach(function() {
  //console.log('before every test in every file');
});

describe('hooks', function() {
  var myArray;
  before(function() {
    // runs before all tests in this block
	//console.log('before hook');
  });

  after(function() {
    // runs after all tests in this block
	//console.log('after hook');
  });

  beforeEach(function() {
    // runs before each test in this block
	//console.log('beforeEach hook');
  });

  afterEach(function() {
    // runs after each test in this block
	//console.log('afterEach hook');
  });

  describe('push', function () {
    it('should return undefined at first', function () {
      assert.equal(undefined, myArray);
    });
    it('should have length 1 when pushing element', function () {
      myArray = [];
      myArray.push(222);
      assert.equal(1, myArray.length);
    });
  });

});
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#pop', function() {
    // pending test below
    it('should return length = n-1 when pops an item');
  });
});

