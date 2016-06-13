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

  get length() {
    return pythag(this.x, this.y);
  }
}


export default Vector;
