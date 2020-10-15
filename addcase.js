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
  var name = getinputvalue("pname");
var messagesref = firebase.database().ref('user/'+name);
var ref = firebase.database().ref('user/'+name);
ref.on('value',gotdata);
function gotdata(data)
{
  console.log(name,age,id,disease,date,phonenumber,contactpername,reltopat,contactofrel,bloodslips,plaslips)
}
document.querySelector("#form2").addEventListener("submit",submitform);
function submitform(e)
{
    e.preventDefault();
    var name = getinputvalue("pname");
    var age = getinputvalue("patage");
    var id = getinputvalue("id");
    var disease = getinputvalue("disease");
    var date = getinputvalue("odate");
    var phonenumber = getinputvalue("phonenumber");
    var contactpername = getinputvalue("contactper");
    var reltopat = getinputvalue("relation");
    var contactofrel = getinputvalue("contact-related");
    var bloodslips = getinputvalue("bloodslips");
    var plaslips = getinputvalue("plaslips");

savemessage(name,age,id,disease,date,phonenumber,contactpername,reltopat,contactofrel,bloodslips,plaslips);
gotdata(name,age,id,disease,date,phonenumber,contactpername,reltopat,contactofrel,bloodslips,plaslips)
}

function getinputvalue(id)
{
    return document.getElementById(id).value;
}

function savemessage(name,age,id,disease,date,phonenumber,contactpername,reltopat,contactofrel,bloodslips,plaslips)
{
  var newmessageref = messagesref.push()
  firebase.database().ref('user/'+name).set({
    patientname : name ,age : age,id : id,disease : disease,date : date ,phonenumber : phonenumber ,contactpername : contactpername ,reltopat : reltopat,contactofrel : contactofrel ,bloodslips : bloodslips ,plaslips : plaslips

  });
}