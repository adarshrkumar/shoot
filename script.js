var pass = true
/*var input
var correct = document.getElementById('password').value
var pass = false
if (location.href.contains('?')) {
  if (location.href.contains('pass=')) {
    if (atob(location.href.split('pass=')[1]) === correct) {
      pass = correct
    }
  }
}
if (pass === false) {
  pass = prompt('')
}*/

var correct = true
if (pass === correct) {
  document.querySelector('iframe').style.display = 'none'
}
else {
  window.history.go(-1)
  location.href = 'https://google.com'
}