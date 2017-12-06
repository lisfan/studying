import(/* webpackChunkName: "logger" */ './logger.js').then((logger) => {
  const entry05 = 'entry05'
  console.log('output', entry05)
  logger.error(20, 10)
})




