var input
var pass = prompt('')
var correct = document.getElementById('password').value
let newWindow;
let lStorage = String(localStorage.getItem('page'))
if (lStorage === 'null') {
  lStorage = ''
}
if (pass == correct) {
  document.documentElement.innerHTML = `
  <head>
    <title>Google</title>
    <link rel="icon" href="https://google.com/favicon.ico" />
    <style>
      html, body, iframe {
        height: 100%;
        width: 100%;
        margin: 0;
      }
    </style>
  </head>
  <body style="margin: 0;">
    <iframe frameborder="0" src="https://www-https--www-google-com.RockGamerAK.com"></iframe>
  </body>
  `
  input = document.querySelector('#url');
}
else {
  window.history.go(-1)
  location.href = 'https://google.com'
}

function go() {
  let input = document.querySelector('#url').value
  var center = document.querySelector('center')
  var iframe = document.querySelector('iframe')
  var button = document.querySelector('[btn]')
  newWindow = window.open('about:blank')
  newWindow.document.open()
  newWindow.document.write(`
    <html>
      <head>
        <title>` + input.split('://')[1] + `</title>
        <link rel="icon" href="https://www.google.com/s2/favicons?domain=` + input + `">
      </head>
      <body style="margin: 0;">
        <iframe frameborder="0" src="https://dths.web-wizards.repl.co/prox/?url=` + btoa(input) + `" style="width: 100%; height: 100vh;"></iframe>
      </body>
    </html>
  `)
  iframe.setAttribute('style', 'height: 100vh; width: 100%;')
  center.setAttribute('style', '')
  iframe.setAttribute('src', 'https://dths.web-wizards.repl.co/prox/?url=' + btoa(input))
  button.setAttribute('onclick', "window.open('https://dths.web-wizards.repl.co/prox/?url=" + btoa(input) + "')")
  //    location.href = 'https://f4bb0b88-3f8e-4ac8-9a50-540cbddc3005.id.repl.co/prox/?url=' + btoa(input)
  localStorage.setItem('page', input)
  //setInterval(setTitle, 1000);
}

input.addEventListener('keyup', (key) => {
    if (key.keyCode === 13) {
      go()
    }
});

newWindow.addEventListener('DOMContentLoaded', setTitle)
function setTitle() {
  var isMasked = Boolean(localStorage.getItem('isMasked'));
  var iframe = newWindow.querySelector('iframe');
  var base = input.split('://')[1].split('/')[0]
  var url = iframe.getAttribute('src');
  var page = url.split('=_/')[1]
  if (isMasked !== false) {
    document.title = `${base}/${page}`;
  }
  else {
    document.title = localStorage.getItem('theMask')
  }
}

var title = document.title;

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    document.title = title; 
  }
  else {
    document.title = 'Google';
    console.log('hi')
  }
});