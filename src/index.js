import { cube } from './math.js';
import _ from 'lodash';

console.log('_', _)
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '1 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());