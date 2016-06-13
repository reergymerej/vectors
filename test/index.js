import { expect } from 'chai';
import Vector from '../src';

function factory(x, y) {
  return new Vector(x, y);
}

describe('Vector construction', () => {
  describe('paramaters', () => {
    it('should throw if missing x', () => {
      const fn = () => new Vector();
      expect(fn).throw('x');
    });

    it('should throw if missing y', () => {
      const fn = () => new Vector(1);
      expect(fn).throw('y');
    });
  });
});

describe('magnitude', () => {
  it('should be available', () => {
    const vector = factory(3, 9);
    const result = vector.magnitude;
    const expected = Math.sqrt(3 * 3 + 9 * 9);
    expect(result).to.equal(expected);
  });

  it('should be available as length', () => {
    const vector = factory(3, 9);
    const result = vector.length;
    const expected = Math.sqrt(3 * 3 + 9 * 9);
    expect(result).to.equal(expected);
  });
});

describe('add', () => {
  it('should return new vector', () => {
    const a = factory(3, 3);
    const b = factory(5, 7);
    const result = a.add(b);
    expect(result.length).to.equal(factory(8, 10).length);
  });
});

describe('subtract', () => {
  it('should return new vector', () => {
    const a = factory(10, 10);
    const b = factory(5, 7);
    const result = a.subtract(b);
    expect(result.length).to.equal(factory(5, 3).length);
  });
});

describe('mutliply', () => {
  it('should return new vector when given a scalar', () => {
    const a = factory(10, 10);
    const b = factory(5, 7);
    const result = a.multiply(b);
    expect(result.length).to.equal(factory(50, 70).length);
  });
});

describe('unit', () => {
  it('should scale the vector to a magnitude of 1', () => {
    const ax = 2, ay = -4;
    const a = factory(ax, ay);

    const result = a.unit;
    expect(result.length).to.closeTo(1, 0.1);
  });
});

describe('dotProduct', () => {
  it('should return a scalar', () => {
    const ax = 9, ay = 3;
    const bx = 4, by = 5;
    const a = factory(ax, ay);
    const b = factory(bx, by);

    const result = a.dotProduct(b);
    expect(result).to.equal(ax * bx + ay * by);
  });
});

describe('crossProduct', () => {
  it('should throw for 2d vectors', () => {
    const a = factory(1, 1);
    const b = factory(1, 1);
    const fn = () => a.crossProduct(b);
    expect(fn).to.throw('2d');
  });
});


const vector = new Vector(3, 4);

console.log(vector.x);
console.log(vector.y);
console.log(vector.magnitude);
console.log(vector.length);
console.log(vector.unit);

console.log(vector.add(new Vector(5, 6)));
console.log(vector.subtract(new Vector(5, 6)));
console.log(vector.multiply(new Vector(5, 6)));
console.log(vector.dotProduct(new Vector(5, 6)));
