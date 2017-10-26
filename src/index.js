import numRef from './ref.json';
import myTest2 from '@xkeshi/my-test2'

console.log(myTest2.goo())

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
};

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
};

$.find('body')

console.log('good')