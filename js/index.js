$(document).ready(function () {
  Materialize.updateTextFields()
})
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCdptDABvFMyrRx_Sr4Zx7zlbeCtoawFSA',
  authDomain: 'rnsitregistrationwebapp.firebaseapp.com',
  databaseURL: 'https://rnsitregistrationwebapp.firebaseio.com',
  projectId: 'rnsitregistrationwebapp',
  storageBucket: '',
  messagingSenderId: '1060794455179'
}
firebase.initializeApp(config)

/* log in starts here*/
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location = 'form.html'
    alert('Logged in successfully')
  } else {
    // No user is signed in.
    alert('logged out sucessfully')
  }
})
function create () {
  var userEmail = document.getElementById('email_field').value
  var userPass = document.getElementById('password_field').value
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // ...
    alert(errorMessage)
  })
}
function login () {
  var userEmail = document.getElementById('email_field').value
  var userPass = document.getElementById('password_field').value

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message

    window.alert('Error : ' + errorMessage)

  // ...
  })
}

function logout () {
  firebase.auth().signOut()
  window.location = 'index.html'
}
/* login ends hrer ................*/
