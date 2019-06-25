# vectors

2d vectors for the whole family

v1.1.0 [![Build Status](https://travis-ci.org/reergymerej/vectors.svg?branch=master)](https://travis-ci.org/reergymerej/vectors)

## Installation

```
yarn add reergymerej-vectors
```

## Usage

```js
import Vector from 'reergymerej-vectors';
const vector = new Vector(3, 4);
console.log(vector.magnitude); // 5
```

## API

### Properties

The following examples use
```js
const vector = new Vector(3, 4);
```

#### x

```js
vector.x;  // 3
```

#### y

```js
vector.y;  // 4
```

#### magnitude

```js
vector.magnitude; // 5
```

#### length

```js
vector.length;  // 5
```

#### unit

```js
vector.unit;  // Vector { x: 0.6, y: 0.8 }
```

### Methods/Functions

The following examples use
```js
const vectorA = new Vector(3, 4);
const vectorB = new Vector(5, 6);
```

#### add

```js
add(vectorA, vectorB);  // Vector { x: 8, y: 10 }
vectorA.add(vectorB);  // Vector { x: 8, y: 10 }
```

#### subtract

```js
subtract(vectorA, vectorB);  // Vector { x: -2, y: -2 }
vectorA.subtract(vectorB);  // Vector { x: -2, y: -2 }
```

#### multiply

```js
multiply(vectorA, vectorB);  // Vector { x: 15, y: 24 }
vectorA.multiply(vectorB);  // Vector { x: 15, y: 24 }
```

#### dotProduct

```js
dotProduct(vectorA, vectorB);  // 39
vectorA.dotProduct(vectorB);  // 39
```






---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
