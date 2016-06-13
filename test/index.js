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
