const a = 0

let path
if (a === 0) {
  path = 'math'
} else {
  path = 'print'
}
import(`./${path}`).then((module) => {
  console.log('module', module)
});
