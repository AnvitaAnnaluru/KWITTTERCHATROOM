const firebaseConfig = {
      apiKey: "AIzaSyBg8oUtBznUVUkxzyH0F9wLwtaoAIJiUZs",
      authDomain: "socialapp-fe282.firebaseapp.com",
      databaseURL: "https://socialapp-fe282-default-rtdb.firebaseio.com",
      projectId: "socialapp-fe282",
      storageBucket: "socialapp-fe282.appspot.com",
      messagingSenderId: "529434105660",
      appId: "1:529434105660:web:74572f59c1bba9ef5db039",
      measurementId: "G-9KN3DX4BQE"
    };
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML= "Welcome " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname",+Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location= "index.html"
}
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html"
}