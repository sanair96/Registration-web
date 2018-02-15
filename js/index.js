$(document).ready(function() {
    Materialize.updateTextFields();
  });
 // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAqIvSVJoknpvLJHG6Qn0om0JDfGVgJqdE",
    authDomain: "webapp-faf2d.firebaseapp.com",
    databaseURL: "https://webapp-faf2d.firebaseio.com",
    projectId: "webapp-faf2d",
    storageBucket: "webapp-faf2d.appspot.com",
    messagingSenderId: "294281955476"
    };
    firebase.initializeApp(config);

/* log in starts here*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location="form.html"
    alert("Logged in successfully");

  } else {
    // No user is signed in.
    alert("logged out sucessfully");
  }
});
function create(){
      var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
});
}
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  window.location="index.html"
}
/* login ends hrer ................*/