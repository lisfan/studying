// import { minus } from './math'
//
// console.log(minus(10, 20))
//
//

const thisIsALargeVariable = 10

const thisIsBLargeVariable = 20
let thisIsALetLargeVariable = 20
let thisIsBLetLargeVariable = 20
var thisIsAvarLargeVariable = 20
var thisIsBvarLargeVariable = 20

// 这是一个单行注释
class thisIsAClass {
  constructor() {
    this.good = 10
    const a = 10
    const b = 20
    console.log("thisIsAClass");
    console.log("thisIsAClass", a);
    console.log('thisIsAClass')
    this.xxx = 20
  }
}

/**
 * 这是一个jsodc块注释
 */
const thisIsAAnonymousFunction = function () {
  return console.log('thisIsAAnonymousFunction')
}

const thisIsAShortArrowFunction = () => {
  return console.log('thisIsAShortArrowFunction')
}

/*
 * 这是一个块注释
 */
const thisIsAFunction = function thisIsAFunction() {
  return console.log('thisIsAFunction')
}

/*!
 * 这是一个jsodc块注释
 */
function thisIsALiteralFunction() {
  return console.log('thisIsALiteralFunction')
}

const thisIsATrailingCommasFunction = function (a, b, c,) {
  console.log("thisIsAAnonymousFunction")
};

thisIsATrailingCommasFunction(10, 2,)

const propertyName = 'good Mono'
const thisIsATrailingCommasObject = {
  id: 10,
  name: 'msl',
  "age": 20,
  'height': 168,
  "good_moadf": 20,
  "good-moadf2": 20,
  ['good']: 30,
  [propertyName]: 50
}

console.log('thisIsATrailingCommasObject', thisIsATrailingCommasObject.name)

const thisIsAArrowFunction = () => {
  const good = 10

  class GoodBad {

  }

  new GoodBad()
}

let thisIsALetVariable = 20

window.windowVariable = 30
globalVariable = 30

const domFunction = () => {
  const $div = document.getElementsByName('div')
  $div.getAttribute('good')
}

if (a === g) {
  console.log('if')
} else if (a === domFunction) {
  console.log('else if')
} else {
  console.log('else')
}

while (a) {
  console.log('10')
}

const b = 10
/**
 * 这是一个jsodc块注释
 * @preserve Foo Bar
 * @return adfsdf
 */
switch (b) {
  case 10:
    console.log('10')
    break
  case 20:
    console.log('20')
    break
  default:
    console.log('30')
    break
}

const agadf = 10
if (agadf === 10) {
  console.log('134234')
}

console.log('thisIsALetLargeVariable', thisIsALetLargeVariable)

!!a ? b : c

console.log('thisIsALetLargeVariable', thisIsALetLargeVariable)

a = !b && !c && !d && !e

(!(a <= b))

console.log('ISOK', ISOK)
console.log('name', name)

var o = {
  p: 1,
  q: 2
};
f(o.p, o.q)

const xxx = function (x, y) {
  console.log(arguments.length)
  if (x < 2 && y) {
    return 10
  } else if (x > 10) {
    return 20
  } else {
    return 30
  }
}

xxx(true, 10, 34444, 1324234)

console.log(thisIsATrailingCommasObject['id'])
console.log(thisIsATrailingCommasObject[propertyName])
console.log(thisIsATrailingCommasObject.name)
console.log('Infinity', Infinity)

const goodX = {
  id: 10,
  name: 20,
  prop: {
    width: 10,
    height: 20
  }
}

console.log('goodX', goodX.id)
console.log('goodX', goodX['name'])
console.log('goodX', goodX.age)
console.log('goodX', goodX['prop']['height'])
console.log('goodX', goodX['prop'].width)
console.log('goodX', goodX['prop'].fll)