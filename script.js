var input
var pass = prompt('')
var correct = document.getElementById('password').value
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