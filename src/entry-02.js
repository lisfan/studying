import { add, minus } from './math.js'
import { isNumber } from './valid.js'
import entry03 from './entry-03'

const entry02 = 'entry02111111232311112311232122223213123123'

console.log('output', entry02)

export default isNumber(add(minus(10, 20), 10))

import('./logger').then((logger) => {
  const log = logger.default
})

function A() {
  console.log('good monring')
}