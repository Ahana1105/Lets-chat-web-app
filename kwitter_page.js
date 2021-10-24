//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDBoGBWOZ08wp_WnE2XQeK-tL9L4GFAcKI",
    authDomain: "ahana-s-kwitter-14043.firebaseapp.com",
    databaseURL: "https://ahana-s-kwitter-14043-default-rtdb.firebaseio.com",
    projectId: "ahana-s-kwitter-14043",
    storageBucket: "ahana-s-kwitter-14043.appspot.com",
    messagingSenderId: "17288553876",
    appId: "1:17288553876:web:e61f6f083f6e7249ff9b81",
    measurementId: "G-EBR7SX5J23"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send() {
msg_value = document.getElementById("input_send_msg").value;

firebase.database().ref(room_name).push ({
     Name : user_name,
     Message : msg_value,
     Like : 0
});

document.getElementById("input_send_msg").value = "";

}