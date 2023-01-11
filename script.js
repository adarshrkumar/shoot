var input
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
}
else {
  window.history.go(-1)
  location.href = 'https://google.com'
}