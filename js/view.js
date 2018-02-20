// Initialize Firebase
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

var databaseRef,db,text,list

// function create () {
//   var id = 0
//   var databaseRef = firebase.database().ref('ticketnumber/')
//   var data = {
//     tnum: id
//   }
//   var updates = {}
//   updates['/ticketnumber/' + 0] = data; // + usn makes it a primary key.
//   firebase.database().ref().update(updates)
//   alert('success')
// }

function search () {
  $('.tr').remove()
  text = document.getElementById('searchbox').value.toUpperCase()
  //alert(text)
  list = document.getElementById('list')
  databaseRef = firebase.database().ref('users/')
  db = '/users/'
  /*$('#list').css("display","block");*/
  var query
  databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var rowindex = 1
      var childKey = childSnapshot.key
      var childData = childSnapshot.val() // gets all the child data
      var e = document.getElementById('filter')
      var strfilter = e.options[e.selectedIndex].text
      switch (strfilter) {
        case 'Email':
          query = childData.email
          break
        case 'Name':
          query = childData.name
          break
        case 'Ticket ID':
          query = childData.tid
          break
        case 'Phone':
          query = childData.phone
          break
        case 'MOP':
          query = childData.mop
          break
      }
      //alert(query)
      if (text == query.match(text)) {
        var row = list.insertRow(rowindex)
        row.className = 'tr'
        var TID = row.insertCell(0)
        var name = row.insertCell(1)
        var email = row.insertCell(2)
        var gender = row.insertCell(3)
        var Phone = row.insertCell(4)
        var mop = row.insertCell(5)

        TID.appendChild(document.createTextNode(childData.tid)) // can be retrived with coressponding name value pairs
        email.appendChild(document.createTextNode(childData.email))
        Phone.appendChild(document.createTextNode(childData.phone))
        name.appendChild(document.createTextNode(childData.name))
        gender.appendChild(document.createTextNode(childData.gender))
        mop.appendChild(document.createTextNode(childData.mop))
        rowindex = rowindex + 1
      }
    })
  })
}

function logout () {
  firebase.auth().signOut()
  window.location = 'index.html'
}
