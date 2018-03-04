import add from './add'

window.addEventListener('load', () => {
  function log(a, b) {
    console.log(a, b)
  }

  var i = 'hi'
  if (i === 'hi') {
    log('hi', 'hihi')
    add(1, 1)
  }
})
