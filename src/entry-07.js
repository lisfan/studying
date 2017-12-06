import(/* webpackChunkName: "logger" */ './logger.js').then((logger) => {
  const entry07 = 'entry07'
  console.log('output', entry07)
  logger.error(20, 10)
})




