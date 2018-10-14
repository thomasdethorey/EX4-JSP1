// function validation() {
// var firstname = document.getElementById("firstname").value;
// var lastname = document.getElementById("lastname").value;
// var city = document.getElementById("city").value;
// alert("Bonjour, " + firstname + " " + lastname + " " + "qui vit à " + city);
// }
// sans condition pas besoin de result directement alert
function validation(){
var firstName = document.getElementById('firstname').value;
var lastName = document.getElementById('lastname').value;
var city = document.getElementById('city').value;
var result = "Nom : "+ lastName + " " + "Prénom : " + firstName + " "+ "La ville : "  + " " + city;
if (isNaN(lastName) && isNaN(firstName) && isNaN(city)){
  alert (result);
}else{
  alert("Veuillez renseigner les champs correctement")
}
}
