var firebaseConfig = {
      apiKey: "AIzaSyBmsWquTVf8O_H0pvvQczrQx3bucniH6UY",
      authDomain: "kwitter-1dd8d.firebaseapp.com",
      databaseURL: "https://kwitter-1dd8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1dd8d",
      storageBucket: "kwitter-1dd8d.appspot.com",
      messagingSenderId: "869715105165",
      appId: "1:869715105165:web:83ab8765e7b9da9cbc59c4"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("USERNAME").innerHTML="Welcome " + user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
      localStorage.setItem("rn", room_name);
      window.location="kwitter_message.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
console.log("Room Name");
row="<div class='room_name' id="+Room_name+" onlclick='redirectToRoomName(this.id)'>#"+Room_name + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("rn", name);
            window.location="kwitter_message.html";
      }
getData();
function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

