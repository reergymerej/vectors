function err(message) {
  throw new Error(message);
}

function pythag(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

class Vector {
  constructor(x, y){
    this.hasRequiredParams(x, y);
    this.x = x;
    this.y = y;
  }

  hasRequiredParams(x, y) {
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
    const x = this.x;
    const y = this.y;
    const magnitude = this.magnitude;
    return new Vector(x / magnitude, y / magnitude);
  }

  add(vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;
    return new Vector(x, y);
  }

  subtract(vector) {
    const x = this.x - vector.x;
    const y = this.y - vector.y;
    return new Vector(x, y);
  }

  multiply(vector) {
    const x = this.x * vector.x;
    const y = this.y * vector.y;
    return new Vector(x, y);
  }

  dotProduct(vector) {
    const x = this.x * vector.x;
    const y = this.y * vector.y;
    return x + y;
  }

  crossProduct() {
    err('cross product is not available for 2d vectors');
  }
}


export default Vector;
