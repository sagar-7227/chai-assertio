const chai = require('chai');
// expect
const expect = chai.expect;
// should
const should = chai.should();
// assert
const assert = chai.assert;

// expect api example - equals 
let a=1, b=1;
expect(a).to.be.equals(b,"a and b are not equal");

function myObj(){
    return{
        a:100,
        b:"Hello"
    }
}

x=new myObj();
y=new myObj();

expect(x).to.be.an('object');
// now this it's not compare the content
// expect(x).to.be.equals(y,"x and y are not equals");
// to check the equality we use the deep.equals 
expect(x).to.be.deep.equals(y,"x and y are not equal");
// expect can add multiple chain expressions
expect(x).to.be.an('Object').and.to.be.deep.equals(y);
// arrays
let numbers = [1,2,4,9];
expect(numbers).to.be.an('array').that.includes(4);
// if the value is null or undefined, as undefined and null haven't been extended with the should chain starter.
// should - equals 
// a.should.be.equals(b);  // have to use deep.equals to measure the contents
x.should.be.deep.equals(y, 'x and y are not equal');
(x).should.be.an('object').and.to.be.deep.equals(y);
(numbers).should.be.an('array').that.includes(4);
// assert style
// only equal not equals
assert.equal(a,b, "a and b are equals");
// deepEqual for object
assert.deepEqual(x,y, "x and y are equals");
// asserts - arrays
assert.isArray(numbers,"numbers is an array");





