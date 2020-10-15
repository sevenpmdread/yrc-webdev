 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDUGAAhB0kYbWSb1gxcndSDgxEIYHXzM-w",
    authDomain: "zeta-crossbar-244707.firebaseapp.com",
    databaseURL: "https://zeta-crossbar-244707.firebaseio.com",
    projectId: "zeta-crossbar-244707",
    storageBucket: "",
    messagingSenderId: "937745697651",
    appId: "1:937745697651:web:810d2c49074d6c18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    var rootref = firebase.database().ref().child("messages");
    rootref.on("chil_added",snap =>{

        alert(snap.val());
    });
