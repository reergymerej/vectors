function err(message) {
  throw new Error(message);
}

function Vector(x, y) {
  this.hasRequiredParams(x, y);
}

Vector.prototype.hasRequiredParams = function (x, y) {
  if (x === undefined) {
    err('missing x');
  }

  if (y === undefined) {
    err('missing y');
  }
};

export default Vector;
