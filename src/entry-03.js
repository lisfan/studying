import { add, minus } from './math.js'
import { isNumber } from './valid.js'

const entry03 = 'entry03'

console.log('output', entry03)

export default isNumber(add(minus(10, 20), 10))

import('./logger').then((logger) => {
  const log = logger.default
})

function B() {
  console.log('good monring')
}