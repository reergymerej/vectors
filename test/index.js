import { expect } from 'chai';
import Vector from '../src';

function factory(x, y) {
  return new Vector(x, y);
}

describe('Vector', () => {
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

  describe('length', () => {
    it('should be available', () => {
      const vector = factory(3, 9);
      const result = vector.length;
      const expected = Math.sqrt(3 * 3 + 9 * 9);
      expect(result).to.equal(expected);
    });
  });
});
