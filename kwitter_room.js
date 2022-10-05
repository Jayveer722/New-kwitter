
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdttLwXJuY93JFIf0cXU3Hibv3jpYz1-g",
    authDomain: "blogkaro-47688.firebaseapp.com",
    databaseURL: "https://blogkaro-47688-default-rtdb.firebaseio.com",
    projectId: "blogkaro-47688",
    storageBucket: "blogkaro-47688.appspot.com",
    messagingSenderId: "745755237824",
    appId: "1:745755237824:web:e3244bd1d62a4a5e25fc25",
    measurementId: "G-GLVYECXFM1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
