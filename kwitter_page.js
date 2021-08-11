var firebaseConfig = {
    apiKey: "AIzaSyChiDkGbEMvAU0JLZreDOP7ulH-JTJPxCI",
    authDomain: "kwitter-99f26.firebaseapp.com",
    databaseURL: "https://kwitter-99f26-default-rtdb.firebaseio.com",
    projectId: "kwitter-99f26",
    storageBucket: "kwitter-99f26.appspot.com",
    messagingSenderId: "13462973884",
    appId: "1:13462973884:web:f76ddec5581d7803d74fb9"
};
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
               
          });
    });
}
getData();