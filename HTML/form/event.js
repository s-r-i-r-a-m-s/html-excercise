const userObject = {};

// Add an event listener to the form to capture and store user input
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Store the user input as properties of the userObject
  userObject.name = name;
  userObject.email = email;

  // Access the user object
  console.log("User Object:", userObject);
  cond();
  location.href="en.html";
});
function cond(){
    alert("now enter");
}
var nameobj=userObject.name ;

function verify(){
let veri = document.getElementById("verify").value;
if(nameobj.name == veri){
alert("login successsesss!")
}
else{
alert("this enough da ")
}
}
