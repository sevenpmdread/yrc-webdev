

function getdata() {
    var user=document.getElementById("user").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('user/'+user).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name=snapshot.val().patientname;
                
        var age=snapshot.val().age;
        var id=snapshot.val().id;
        var bloodslips=snapshot.val().bloodslips;


     
        //now we have data in variables
        //now show them in our html

        document.getElementById("name").innerHTML=name;
                document.getElementById("age").innerHTML=age;

        document.getElementById("id").innerHTML=id;

        document.getElementById("bloodslips").innerHTML=bloodslips;


      
})
}