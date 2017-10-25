import _ from 'lodash'

console.log('_', _.isUndefined(1))

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}