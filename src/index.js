function err(message) {
  throw new Error(message);
}

function pythag(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

class Vector {
  constructor(x, y){
    this.assertParams(x, y);
    this.x = x;
    this.y = y;
  }

  assertParams(x, y) {
    if (x === undefined) {
      err('missing x');
    }

    if (y === undefined) {
      err('missing y');
    }
  }

  get magnitude() {
    return pythag(this.x, this.y);
  }

  get length() {
    return this.magnitude;
  }

  get unit() {
    return unit(this)
  }

  add(vector) {
    return add(this, vector)
  }

  subtract(vector) {
    return subtract(this, vector)
  }

  multiply(vector) {
    return multiply(this, vector)
  }

  dotProduct(vector) {
    return dotProduct(this, vector)
  }

  crossProduct() {
    return crossProduct()
  }
}

const operateOnField = (field) => (operation) => (a, b) =>
  operation(a[field], b[field])

const onX = operateOnField('x')
const onY = operateOnField('y')

const getXY = (operation) => (a, b) => {
  return [
    onX(operation)(a, b),
    onY(operation)(a, b),
  ]
}

const tupleToVector = ([x, y]) => new Vector(x, y)

const _add = (a, b) => a + b
const _subtract = (a, b) => a - b
const _multiply = (a, b) => a * b

const getVectorFromOperation = (operation) => (a, b) => {
  return tupleToVector(
    getXY(operation)(a, b)
  )
}

export const add = getVectorFromOperation(_add)

export const subtract = getVectorFromOperation(_subtract)

export const multiply = getVectorFromOperation(_multiply)

export const dotProduct = (a, b) => {
    const [x, y] = getXY(_multiply)(a, b)
    return _add(x, y)
  }

export const crossProduct = () => {
  err('cross product is not available for 2d vectors');
}

export const unit = (vector) => {
  const {x, y, magnitude} = vector
  return new Vector(x / magnitude, y / magnitude);
}

export default Vector;
