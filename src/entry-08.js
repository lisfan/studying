import(/* webpackChunkName: "logger" */ './logger.js').then((logger) => {
  const entry08 = 'entry08'
  console.log('output', entry08)
  logger.error(20, 10)
})




